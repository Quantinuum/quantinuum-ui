import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, afterEach, it, expect } from "vitest";
import { FilterChip } from "./filter-chip";

const items = ["NexusUser1", "NexusUser2"];

afterEach(() => {
  vi.restoreAllMocks();
});

describe("FilterChip", () => {
  it("should render as expected", () => {
    const { container } = render(<FilterChip label="Username" items={items} />);

    expect(screen.getByText("NexusUser1")).toBeInTheDocument();
    expect(screen.getByText("NexusUser2")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should not render when no items are provided", () => {
    const { container } = render(<FilterChip label="Username" items={[]} />);

    expect(container.firstChild).toBeNull();
  });

  it("should not render remove buttons when onRemove callback is not provided", () => {
    render(<FilterChip label="Username" items={items} />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should call onRemove callback with the correct payload", async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();

    render(<FilterChip label="Username" items={items} onRemove={onRemove} />);

    expect(onRemove).not.toHaveBeenCalled();

    await user.click(
      screen.getByRole("button", { name: "Remove NexusUser2" }),
    );

    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith("NexusUser2");
  });
});
function matchSnapshot() {
  throw new Error('Function not implemented.');
}
