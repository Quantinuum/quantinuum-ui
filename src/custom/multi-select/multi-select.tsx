"use client"

import { forwardRef, useCallback, useId, useState } from "react"
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
      modal = false,
      "data-testid": dataTestId,
      disabledTooltip = "Item disabled",
      clearAllText = "Clear All",
      renderItem,
    },
    ref,
  ) => {
    const generatedId = useId()
    const id = idProp ?? generatedId
    const messageId = `${id}-message`

    const [open, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = useCallback(
      (val: string) => {
        setInputValue(val)
        onSearchChange?.(val)
      },
      [onSearchChange],
    )

    const handleOpenChange = useCallback(
      (nextOpen: boolean) => {
        setOpen(nextOpen)
        if (!nextOpen) {
          setInputValue("")
          onSearchChange?.("")
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
      <div className={labelPosition === "left" ? "flex items-start gap-3" : "flex flex-col gap-1.5 w-full"}>
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
                data-testid={dataTestId}
                aria-describedby={errorMessage || bottomMessage ? messageId : undefined}
              />
            </PopoverTrigger>

            <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
              <MultiSelectList
                inputValue={inputValue}
                isLoading={isLoading}
                items={items}
                value={value}
                searchPlaceholder={searchPlaceholder}
                emptySearchMessage={emptySearchMessage}
                isSearchVisible={isSearchVisible}
                disabledTooltip={disabledTooltip}
                clearAllText={clearAllText}
                renderItem={renderItem}
                onInputChange={handleInputChange}
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
