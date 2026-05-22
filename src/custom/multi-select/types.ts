import type { ComponentPropsWithoutRef } from "react"

export interface MultiSelectItem {
  value: string
  label: string
  disabled?: boolean
  icon?: React.ComponentType<{ className?: string }>
  [key: string]: unknown
}

export interface MultiSelectProps {
  value?: MultiSelectItem[]
  onChange?: (value: MultiSelectItem[]) => void
  items?: MultiSelectItem[]
  isLoading?: boolean
  onSearchChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptySearchMessage?: string
  disabled?: boolean
  className?: string
  id?: string
  label?: string
  labelTooltip?: string
  labelPosition?: "top" | "left"
  labelIcon?: React.ComponentType<{ className?: string }>
  errorMessage?: string
  bottomMessage?: string
  showChips?: boolean
  isSearchVisible?: boolean
  "data-testid"?: string
  disabledTooltip?: string
  clearAllText?: string
  renderItem?: (item: MultiSelectItem) => React.ReactNode
}

export interface MultiSelectLabelProps {
  htmlFor: string
  label: string
  tooltip?: string
  position?: "top" | "left"
  icon?: React.ComponentType<{ className?: string }>
}

export interface MultiSelectTriggerProps
  extends Omit<ComponentPropsWithoutRef<"button">, "value"> {
  open: boolean
  value: MultiSelectItem[]
  placeholder: string
  isLoading: boolean
  hasError: boolean
  showChips?: boolean
}

export interface MultiSelectListItemProps {
  item: MultiSelectItem
  isSelected: boolean
  isDisabled: boolean
  disabledTooltip?: string
  renderItem?: (item: MultiSelectItem) => React.ReactNode
}

export interface MultiSelectListProps {
  inputValue: string
  isLoading: boolean
  items: MultiSelectItem[]
  isSearchVisible?: boolean
  disabledTooltip?: string
  clearAllText?: string
  renderItem?: (item: MultiSelectItem) => React.ReactNode
  onClearAll: () => void
  value: MultiSelectItem[]
  searchPlaceholder: string
  emptySearchMessage: string
  onSearchInputChange: (val: string) => void
  onSelect: (option: MultiSelectItem) => void
}
