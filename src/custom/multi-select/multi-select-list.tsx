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
  renderItem,
  onSearchInputChange,
  onSelect,
  onClearAll,
}: MultiSelectListProps) => {
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

  const isEmptyMessageVisible = !isLoading && inputValue.length > 0 && items.length === 0

  const getScreenReaderAnnouncement = () => {
    if (isLoading) {
      return "Loading options"
    }

    if (inputValue.length > 0) {
      return `${items.length} ${items.length === 1 ? "result" : "results"} found`
    }

    return ''
  }

  return (
    <Command shouldFilter={false}>
      {/* Screen reader announcement for loading and search results */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">{getScreenReaderAnnouncement()}</div>

      {/* Search */}
      {isSearchVisible && (
        <div className="flex items-center gap-2 border-b px-3">
          <Search className="h-4 w-4 shrink-0 opacity-50" />

          <CommandPrimitive.Input
            value={inputValue}
            onValueChange={onSearchInputChange}
            placeholder={searchPlaceholder}
            className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          />

          {isLoading && <Loader2 className="h-4 w-4 shrink-0 animate-spin opacity-50" />}
        </div>
      )}

      <CommandList>
        {/* Empty message */}
        {isEmptyMessageVisible && <CommandEmpty>{emptySearchMessage}</CommandEmpty>}

        {/* Items */}
        {items.length > 0 && (
          <CommandGroup className={cn("p-0", isLoading && "opacity-50 pointer-events-none")}>
            {items.map((option) => {
              const isSelected = selectedValues.has(option.value)
              const isDisabled = option.disabled === true

              return (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  disabled={isDisabled}
                  onSelect={handleItemSelect}
                  className="cursor-pointer hover:bg-muted data-[selected=true]:!bg-accent data-[selected=true]:text-accent-foreground rounded-none px-2"
                  tabIndex={0}
                >
                  <MultiSelectListItem
                    item={option}
                    isSelected={isSelected}
                    isDisabled={isDisabled}
                    disabledTooltip={disabledTooltip}
                    renderItem={renderItem}
                  />
                </CommandItem>
              )
            })}
          </CommandGroup>
        )}

        {/* Clear all */}
        {value.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup className="p-0">
              <CommandItem
                onSelect={onClearAll}
                className="justify-center text-center cursor-pointer hover:bg-muted rounded-none px-2"
              >
                {clearAllText}
              </CommandItem>
            </CommandGroup>
          </>
        )}
      </CommandList>
    </Command>
  )
}
