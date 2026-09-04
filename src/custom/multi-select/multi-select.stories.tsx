import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Users, Building2 } from "lucide-react"
import { TooltipProvider } from "../../shadcn/ui/tooltip"
import { MultiSelect } from "src"
import type { MultiSelectItem, MultiSelectProps } from "./types"

// Icon mapping for label icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Building2,
}
interface MultiSelectContainerProps
  extends Omit<
    MultiSelectProps,
    "value" | "onChange" | "items" | "isLoading" | "onSearchChange" | "labelIcon"
  > {
  labelIcon?: string
}

// Multiselect data
const mockUsers: MultiSelectItem[] = [
  { value: "user-1", label: "Alice Johnson lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet" },
  { value: "user-2", label: "Bob Smith" },
  { value: "user-3", label: "Charlie Brown" },
  { value: "user-4", label: "Diana Prince" },
  { value: "user-5", label: "Edward Norton", disabled: true },
  { value: "user-6", label: "Fiona Apple" },
  { value: "user-7", label: "George Lucas" },
  { value: "user-8", label: "Hannah Montana" },
  { value: "user-9", label: "Ivan Drago" },
  { value: "user-10", label: "Julia Roberts" },
  { value: "user-11", label: "96ece537-9c7d-58b0-8daf-8b94c90a5d18" },
]

// Will take a string query i.e "Alice" and will return the mockUsers filtered but with a 500ms delay to simulate an API delay
const simulateUserSearch = async (query: string): Promise<MultiSelectItem[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (query) {
    return mockUsers.filter((user) => user.label.toLowerCase().includes(query.toLowerCase()))
  }

  return mockUsers
}

// Container component
// Wraps the multiselect and holds state for selected items and async search simulation
const MultiSelectContainer = ({ labelIcon, ...props }: MultiSelectContainerProps) => {
  const [selectedItems, setSelectedItems] = useState<MultiSelectItem[]>([])
  const [items, setItems] = useState<MultiSelectItem[]>(mockUsers)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearchChange = (query: string) => {
    setIsLoading(true)
    simulateUserSearch(query).then((results) => {
      setItems(results)
      setIsLoading(false)
    })
  }

  return (
    <div className="w-[550px]">
      <MultiSelect
        {...props}
        value={selectedItems}
        items={items}
        className="w-[300px]"
        isLoading={isLoading}
        onChange={setSelectedItems}
        onSearchChange={handleSearchChange}
        labelIcon={labelIcon ? iconMap[labelIcon] : undefined}
      />
    </div>
  )
}

// Story Metadata Configuration
type Story = StoryObj<typeof MultiSelectContainer>

const meta: Meta<typeof MultiSelectContainer> = {
  title: "custom/MultiSelect",
  component: MultiSelectContainer,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: { control: "text" },
    searchPlaceholder: { control: "text" },
    emptySearchMessage: { control: "text" },
    label: { control: "text" },
    labelTooltip: { control: "text" },
    labelPosition: {
      control: "radio",
      options: ["top", "left"],
      description: "Position of the label relative to the input",
    },
    labelIcon: {
      control: "select",
      options: ["", "Users", "Building2"],
      description: "Icon name from lucide-react",
    },
    errorMessage: { control: "text" },
    bottomMessage: { control: "text" },
    disabled: { control: "boolean" },
    selectedLabel: {
      control: "text",
      description: "Label to show when items are selected (if showChips is false or label is not visible)",
    },
    showChips: {
      control: "boolean",
      description: "Show individual chips (true) or count badge (false)",
    },
    isSearchVisible: {
      control: "boolean",
      description: "Show search input in dropdown",
    },
    disabledTooltip: {
      control: "text",
      description: "Tooltip text shown for disabled items",
    },
    clearAllText: {
      control: "text",
      description: "Text for the clear all button",
    },
    renderItem: {
      table: { disable: true },
    },
  },
  args: {
    placeholder: "Select users...",
    searchPlaceholder: "Type a name...",
    emptySearchMessage: "No users found.",
    label: "Assignees",
    labelIcon: "Users",
    labelTooltip: "Select one or more users to assign to this item",
    labelPosition: "top",
    bottomMessage: "You can select multiple users.",
    disabled: false,
    showChips: false,
    selectedLabel: "Assignees",
    isSearchVisible: true,
    disabledTooltip: "Item disabled",
    clearAllText: "Clear All",
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
}

export default meta;

// Story 1: Default
// Basic usage with async search and Storybook controls
export const Default: Story = {}

// Story 2: Form Integration
// Demonstrates validation in a form context
export const FormIntegration: Story = {
  args: {
    disabledTooltip: "Item disabled for reason",
  },

  render: ({ disabledTooltip }) => {
    const [projectName, setProjectName] = useState("")
    const [selectedUsers, setSelectedUsers] = useState<MultiSelectItem[]>([])
    const [userError, setUserError] = useState<string | undefined>()

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault()

      if (selectedUsers.length === 0) {
        setUserError("At least one user is required")
        return
      }

      setUserError(undefined)
      alert(`Submitted: ${selectedUsers.map((user) => user.label).join(", ")}`)
    }

    return (
      <form onSubmit={handleSubmit} className="w-[400px] space-y-4">
        <div>
          <label htmlFor="project-name" className="text-sm font-medium">
            Project name
          </label>
          <input
            id="project-name"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="mt-1 w-full rounded-md border border-input px-3 py-2 text-sm"
            placeholder="Enter name..."
          />
        </div>

        <MultiSelect
          value={selectedUsers}
          items={mockUsers}
          label="Assignees"
          labelIcon={Users}
          labelTooltip="Select team members to assign"
          disabledTooltip={disabledTooltip}
          errorMessage={userError}
          placeholder="Select users..."
          onChange={(users) => {
            setSelectedUsers(users)
            setUserError(undefined)
          }}
        />

        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Create Project
        </button>
      </form>
    )
  },
}

// Story 3: Custom Render
// Shows custom item rendering with email display
const usersWithEmails: MultiSelectItem[] = [
  { value: "user-1", label: "Alice Johnson", email: "alice@example.com" },
  { value: "user-2", label: "Bob Smith", email: "bob@example.com" },
  { value: "user-3", label: "Charlie Brown", email: "charlie@example.com" },
  { value: "user-4", label: "Inactive User", email: "inactive@example.com", disabled: true },
]

export const CustomRender: Story = {
  render: ({ labelIcon, ...props }: MultiSelectContainerProps) => {
    const [selectedItems, setSelectedItems] = useState<MultiSelectItem[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const handleSearchChange = (query: string) => {
      setIsLoading(true)
      simulateUserSearch(query).then(() => {
        setIsLoading(false)
      })
    }

    return (
      <div className="w-[400px]">
        <MultiSelect
          {...props}
          value={selectedItems}
          items={usersWithEmails}
          isLoading={isLoading}
          onChange={setSelectedItems}
          onSearchChange={handleSearchChange}
          labelIcon={labelIcon ? iconMap[labelIcon] : undefined}
          renderItem={(item) => {
            const email = typeof item.email === "string" ? item.email : ""
            return (
              <div className="flex items-center gap-3 w-full">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
                  {item.label.charAt(0)}
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{email}</span>
                </div>
              </div>
            )
          }}
        />
      </div>
    )
  },
}
