"use client"

import { forwardRef, useCallback, useId, useMemo, useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../../shadcn/ui/popover"
import { MultiSelectLabel } from "./multi-select-label"
import { MultiSelectList } from "./multi-select-list"
import { MultiSelectTrigger } from "./multi-select-trigger"
import type { MultiSelectItem, MultiSelectProps } from "./types"

const MultiSelect = forwardRef<HTMLButtonElement, MultiSelectProps>(
  (
    {
      value = [],
      onChange,
      items = [],
      isLoading = false,
      onSearchChange,
      placeholder = "Select items...",
      searchPlaceholder = "Search...",
      emptySearchMessage = "No results found.",
      disabled = false,
      className,
      id: idProp,
      label,
      labelTooltip,
      labelPosition = "top",
      labelIcon,
      errorMessage,
      bottomMessage,
      showChips = false,
      isSearchVisible = true,
      "data-testid": dataTestId,
      disabledTooltip = "Item disabled",
      clearAllText = "Clear All",
      selectedLabel,
      renderItem,
      modal,
    },
    ref,
  ) => {
    const generatedId = useId()
    const id = idProp ?? generatedId
    const messageId = `${id}-message`

    const [open, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const displayedItems = useMemo(() => {
      // If onSearchChange is provided, we assume the parent component is handling the search i.e for async search, so we return the items as-is. Otherwise, we perform client-side filtering based on the inputValue.
      if (onSearchChange || !inputValue) {
        return items
      }

      return items.filter((item) =>
        item.label.toLowerCase().includes(inputValue.toLowerCase()),
      )
    }, [items, inputValue, onSearchChange])

    const handleSearchInputChange = useCallback(
      (val: string) => {
        setInputValue(val) // Update local input state for search value
        onSearchChange?.(val) // Notify parent component of search input change
      },
      [onSearchChange],
    )

    const handleOpenChange = useCallback(
      (isNextOpen: boolean) => {
        setOpen(isNextOpen)
        if (!isNextOpen) {
          setInputValue("") // Clear local input state when closing the dropdown
          onSearchChange?.("") // Clear search input when closing the dropdown
        }
      },
      [onSearchChange],
    )

    const handleSelect = useCallback(
      (item: MultiSelectItem) => {
        const isSelected = value.some((v) => v.value === item.value)
        onChange?.(
          isSelected
            ? value.filter((v) => v.value !== item.value)
            : [...value, item],
        )
      },
      [value, onChange],
    )

    const handleClearAll = useCallback(() => {
      onChange?.([])
    }, [onChange])

    return (
      <div className={labelPosition === "left" ? "flex items-start gap-3 min-w-52 max-w-3xl w-full" : "flex flex-col gap-1.5 min-w-52 max-w-3xl w-full"}>
        {label && (
          <div className={labelPosition === "left" ? "shrink-0 min-h-9 flex items-center" : ""}>
            <MultiSelectLabel
              htmlFor={id}
              label={label}
              tooltip={labelTooltip}
              position={labelPosition}
              icon={labelIcon}
            />
          </div>
        )}

        <div className={labelPosition === "left" ? "flex flex-col gap-1.5 flex-1" : "w-full"}>
          <Popover open={open} onOpenChange={handleOpenChange} modal={modal}>
            <PopoverTrigger asChild>
              <MultiSelectTrigger
                ref={ref}
                id={id}
                open={open}
                value={value}
                placeholder={placeholder}
                isLoading={isLoading}
                disabled={disabled}
                hasError={!!errorMessage}
                className={className}
                showChips={showChips}
                selectedLabel={selectedLabel}
                data-testid={dataTestId}
                aria-describedby={errorMessage || bottomMessage ? messageId : undefined}
              />
            </PopoverTrigger>

            <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
              <MultiSelectList
                inputValue={inputValue}
                isLoading={isLoading}
                items={displayedItems}
                value={value}
                searchPlaceholder={searchPlaceholder}
                emptySearchMessage={emptySearchMessage}
                isSearchVisible={isSearchVisible}
                disabledTooltip={disabledTooltip}
                clearAllText={clearAllText}
                renderItem={renderItem}
                onSearchInputChange={handleSearchInputChange}
                onSelect={handleSelect}
                onClearAll={handleClearAll}
              />
            </PopoverContent>
          </Popover>

          {errorMessage ? (
            <p id={messageId} className="text-sm text-destructive">
              {errorMessage}
            </p>
          ) : bottomMessage ? (
            <p id={messageId} className="text-sm text-muted-foreground">
              {bottomMessage}
            </p>
          ) : null}
        </div>
      </div>
    )
  },
)

MultiSelect.displayName = "MultiSelect"

export { MultiSelect }
