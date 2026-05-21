import { Command as CommandPrimitive } from "cmdk"
import { Loader2, Search } from "lucide-react"
import { useCallback, useMemo } from "react"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList, CommandSeparator } from "../../shadcn/ui/command"
import { cn } from "../../utils/cn"

import { MultiSelectListItem } from "./multi-select-list-item"
import type { MultiSelectListProps } from "./types"

export const MultiSelectList = ({
  inputValue,
  isLoading,
  items,
  value,
  searchPlaceholder,
  emptySearchMessage,
  isSearchVisible = true,
  disabledTooltip,
  clearAllText = "Clear All",
  renderOption,
  onInputChange,
  onSelect,
  onClearAll,
}: MultiSelectListProps) => {
  const hasSearched = inputValue.length > 0

  const selectedValues = useMemo(
    () => new Set(value.map((v) => v.value)),
    [value],
  )

  const handleItemSelect = useCallback(
    (optionValue: string) => {
      const option = items.find((o) => o.value === optionValue)
      if (option) {
        onSelect(option)
      }
    },
    [items, onSelect],
  )

  const screenReaderAnnouncement = isLoading ? "Loading options": "Search results"

  const isEmptyMessageVisible = !isLoading && hasSearched && items.length === 0

  const SearchSection = () => {
    if (!isSearchVisible) return null

    return (
      <div className="flex items-center gap-2 border-b px-3">
        <Search className="h-4 w-4 shrink-0 opacity-50" />

        <CommandPrimitive.Input
          value={inputValue}
          onValueChange={onInputChange}
          placeholder={searchPlaceholder}
          className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        />

        {isLoading && <Loader2 className="h-4 w-4 shrink-0 animate-spin opacity-50" />}
      </div>
    )
  }

  const ItemsSection = () => {
    if (items.length === 0) return null

    return (
      <CommandGroup className={cn(isLoading && "opacity-50 pointer-events-none")}>
        {items.map((option) => {
          const isSelected = selectedValues.has(option.value)
          const isDisabled = option.disabled === true

          return (
            <CommandItem
              key={option.value}
              value={option.value}
              disabled={isDisabled}
              onSelect={handleItemSelect}
              className="cursor-pointer"
              tabIndex={0}
            >
              <MultiSelectListItem
                item={option}
                isSelected={isSelected}
                isDisabled={isDisabled}
                disabledTooltip={disabledTooltip}
                renderOption={renderOption}
              />
            </CommandItem>
          )
        })}
      </CommandGroup>
    )
  }

  const ClearAllSection = () => {
    if (value.length === 0) return null

    return (
      <>
        <CommandSeparator />
        <CommandGroup>
          <CommandItem
            onSelect={onClearAll}
            className="justify-center text-center cursor-pointer"
          >
            {clearAllText}
          </CommandItem>
        </CommandGroup>
      </>
    )
  }

  return (
    <Command shouldFilter={false}>
      <div aria-live="polite" aria-atomic="true" className="sr-only">{screenReaderAnnouncement}</div>
      <SearchSection />

      <CommandList>
        { isEmptyMessageVisible && <CommandEmpty>{emptySearchMessage}</CommandEmpty> }
        <ItemsSection />
        <ClearAllSection />
      </CommandList>
    </Command>
  )
}
