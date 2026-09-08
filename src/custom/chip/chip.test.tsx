import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, afterEach, it, expect } from "vitest";
import { Chip } from "./chip";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Chip", () => {
  it("should render as expected", () => {
    const { container } = render(<Chip>NexusUser1</Chip>);

    expect(screen.getByText("NexusUser1")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should not render a remove button when onRemove is omitted", () => {
    render(<Chip>NexusUser1</Chip>);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should render a remove button when onRemove callback is provided", () => {
    const { container } = render(<Chip onRemove={() => {}}>NexusUser1</Chip>);

    expect(screen.getByRole("button", { name: "Remove" })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should call onRemove when the remove button is clicked", async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();

    render(<Chip onRemove={onRemove}>NexusUser1</Chip>);

    expect(onRemove).toHaveBeenCalledTimes(0);
    await user.click(screen.getByRole("button", { name: "Remove" }));
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it("should use a custom removeAriaLabel for the remove button", () => {
    render(
      <Chip onRemove={() => {}} removeAriaLabel="Remove NexusUser1">
        NexusUser1
      </Chip>,
    );

    expect(screen.getByRole("button", { name: "Remove NexusUser1" })).toBeInTheDocument();
  });

  it("should forward additional props such as data-testid", () => {
    render(<Chip data-testid="my-chip">NexusUser1</Chip>);

    expect(screen.getByTestId("my-chip")).toBeInTheDocument();
  });
});
