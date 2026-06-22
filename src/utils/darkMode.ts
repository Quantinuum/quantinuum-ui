const modes = ["system", "dark", "light"] as const;
type Mode = (typeof modes)[number];
const isMode = (mode: string): mode is Mode => {
  return ["system", "dark", "light"].includes(mode);
};

const mode_storage_key = "data-theme" as const;

const isDark = (mode: Mode): boolean => {
  return (
    (mode === "system" &&
      window?.matchMedia?.("(prefers-color-scheme: dark)").matches) ||
    mode === "dark"
  );
};

const getTheme = () => {
  const localMode = localStorage.getItem(mode_storage_key);
  // Default to dark mode if none specified.
  const resolvedMode =
    localMode !== null && isMode(localMode) ? localMode : ("light" as const);
  return {
    mode: resolvedMode,
    isDark: isDark(resolvedMode),
  };
};

const setTheme = (mode: Mode) => {
  localStorage.setItem(mode_storage_key, mode);
  window.dispatchEvent(new Event("storage"));
};



const subscribeToTheme = (callback: (state: {isDark: boolean, mode: Mode}) => void) => {
  const _callback = () => {
    const theme = getTheme();
    callback(theme);
  }
  _callback()
  window.addEventListener("storage", _callback);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", _callback);

  return () => {
    window.removeEventListener("storage", _callback);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", _callback);
  };
};

export {
  getTheme,
  setTheme,
  subscribeToTheme
};
