import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Components use gap-x/gap-y where they used space-x/space-y, so a consumer space-* override must still replace them.
const twMerge = extendTailwindMerge({
  extend: {
    conflictingClassGroups: {
      "space-x": ["gap-x"],
      "space-y": ["gap-y"],
      "gap-x": ["space-x"],
      "gap-y": ["space-y"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
