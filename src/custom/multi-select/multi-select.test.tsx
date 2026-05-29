import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi, describe, afterEach, it, expect } from "vitest"
import { MultiSelect } from "./multi-select"
import type { MultiSelectItem } from "./types"

const mockItems: MultiSelectItem[] = [
  { value: "1", label: "Alice" },
  { value: "2", label: "Bob" },
  { value: "3", label: "Charlie" },
  { value: "4", label: "Disabled User", disabled: true },
]

const defaultProps = {
  items: mockItems,
  value: [] satisfies MultiSelectItem[],
  onChange: vi.fn(),
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe("MultiSelect", () => {
  describe("Props", () => {
    it("should render as expected", () => {
      const { container } = render(
        <MultiSelect
          {...defaultProps}
          label="Team Members"
          placeholder="Select members..."
          bottomMessage="Choose one or more"
        />
      )
      expect(container.firstChild).toMatchSnapshot()
    })

    it("should support custom data-testid", () => {
      render(
        <MultiSelect
          {...defaultProps}
          data-testid="my-select"
        />
      )

      expect(screen.getByTestId("my-select")).toBeInTheDocument()
    })

    it("should display placeholder when no items are selected", () => {
      render(
        <MultiSelect
          {...defaultProps}
          placeholder="Select users..."
        />
      )

      expect(screen.getByRole("combobox")).toHaveTextContent("Select users...")
    })

    it("should display label", () => {
      render(
        <MultiSelect
          {...defaultProps}
          label="Assignees"
        />
      )

      expect(screen.getByLabelText("Assignees")).toBeInTheDocument()
    })

    it("should display error message", () => {
      render(
        <MultiSelect
          {...defaultProps}
          errorMessage="Required field"
        />
      )

      expect(screen.getByRole("combobox")).toHaveAccessibleDescription("Required field")
    })

    it("should display bottom message", () => {
      render(
        <MultiSelect
          {...defaultProps}
          bottomMessage="Select at least one"
        />
      )

      expect(screen.getByRole("combobox")).toHaveAccessibleDescription("Select at least one")
    })

    it("should prioritize error message over bottom message", () => {
      render(
        <MultiSelect
          {...defaultProps}
          errorMessage="Error"
          bottomMessage="Helper"
        />,
      )

      expect(screen.getByRole("combobox")).toHaveAccessibleDescription("Error")
    })

    it("should display count badge when showChips is false", () => {
      const selected = [mockItems[0], mockItems[1]]

      render(
        <MultiSelect
          {...defaultProps}
          value={selected}
          showChips={false}
        />
      )

      expect(screen.getByRole("combobox")).toHaveTextContent("2 Selected")
    })

    it("should display individual chips when showChips is true", () => {
      const selected = [mockItems[0], mockItems[1]]
      render(
        <MultiSelect
          {...defaultProps}
          value={selected}
          showChips={true}
        />
      )

      expect(screen.getByRole("list", { name: "Selected items" })).toBeInTheDocument()
      expect(screen.getByLabelText("Selected item: Alice")).toBeInTheDocument()
      expect(screen.getByLabelText("Selected item: Bob")).toBeInTheDocument()
    })

    it("should be disabled when disabled prop is true", () => {
      render(
        <MultiSelect
          {...defaultProps}
          disabled
        />
      )

      expect(screen.getByRole("combobox")).toBeDisabled()
    })

    it("should hide search input when isSearchVisible is false", async () => {
      const user = userEvent.setup()
      render(
        <MultiSelect
          {...defaultProps}
          isSearchVisible={false}
        />
      )

      await user.click(screen.getByRole("combobox"))
      expect(screen.queryByPlaceholderText("Search...")).not.toBeInTheDocument()
    })

    it("should display empty message when items list is empty", async () => {
      const user = userEvent.setup()
      render(
        <MultiSelect
          {...defaultProps}
          items={[]}
          emptySearchMessage="No results found."
        />,
      )

      await user.click(screen.getByRole("combobox"))
      await user.type(screen.getByPlaceholderText("Search..."), "xyz")

      expect(screen.getByText("No results found.")).toBeInTheDocument()
    })
  })

  describe("Callbacks", () => {
    it("should call onChange with selected item", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(
        <MultiSelect
          {...defaultProps}
          onChange={onChange}
        />
      )

      await user.click(screen.getByRole("combobox"))
      await user.click(screen.getByRole("option", { name: "Alice" }))

      expect(onChange).toHaveBeenCalledWith([mockItems[0]])
    })

    it("should call onChange without item when deselecting", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(
        <MultiSelect
          {...defaultProps}
          value={[mockItems[0]]}
          onChange={onChange}
        />,
      )

      await user.click(screen.getByRole("combobox"))
      await user.click(screen.getByRole("option", { name: "Alice" }))

      expect(onChange).toHaveBeenCalledWith([])
    })

    it("should call onChange with empty array on \"clear all\"", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(
        <MultiSelect
          {...defaultProps}
          value={[mockItems[0]]}
          onChange={onChange}
        />,
      )

      await user.click(screen.getByRole("combobox"))
      await user.click(screen.getByRole("option", { name: "Clear All" }))

      expect(onChange).toHaveBeenCalledWith([])
    })

    it("should call onSearchChange for each keystroke", async () => {
      const user = userEvent.setup()
      const onSearchChange = vi.fn()
      render(
        <MultiSelect
          {...defaultProps}
          onSearchChange={onSearchChange}
        />
      )

      await user.click(screen.getByRole("combobox"))
      await user.type(screen.getByPlaceholderText("Search..."), "Ali")

      expect(onSearchChange).toHaveBeenCalledWith("A")
      expect(onSearchChange).toHaveBeenCalledWith("Al")
      expect(onSearchChange).toHaveBeenCalledWith("Ali")
    })
  })

  describe("Behavior", () => {
    it("should open dropdown on click", async () => {
      const user = userEvent.setup()
      render(
        <MultiSelect
          {...defaultProps}
          data-testid="multi-select"
        />
      )

      const trigger = screen.getByTestId("multi-select")
      await user.click(trigger)
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    it("should display items when opened", async () => {
      const user = userEvent.setup()
      render(
        <MultiSelect
          {...defaultProps}
        />
      )

      await user.click(screen.getByRole("combobox"))

      expect(screen.getByRole("option", { name: "Alice" })).toBeInTheDocument()
      expect(screen.getByRole("option", { name: "Bob" })).toBeInTheDocument()
      expect(screen.getByRole("option", { name: "Charlie" })).toBeInTheDocument()
    })

    it("should display clear all when items are selected", async () => {
      const user = userEvent.setup()
      render(
        <MultiSelect
          {...defaultProps}
          value={[mockItems[0]]}
        />
      )

      await user.click(screen.getByRole("combobox"))
      expect(screen.getByRole("option", { name: "Clear All" })).toBeInTheDocument()
    })
  })

  describe("Accessibility", () => {
    it("should set aria-invalid when there is an error", () => {
      render(
        <MultiSelect
          {...defaultProps}
          errorMessage="Error"
        />
      )

      expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true")
    })
  })
})
