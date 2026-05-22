import { ChevronDown, ChevronUp, Loader2 } from "lucide-react"
import { forwardRef } from "react"
import { Badge } from "../../shadcn/ui/badge"
import { cn } from "../../utils/cn"

import type { MultiSelectTriggerProps } from "./types"

export const MultiSelectTrigger = forwardRef<HTMLButtonElement, MultiSelectTriggerProps>(
  ({
    open,
    value,
    placeholder,
    isLoading,
    hasError,
    showChips,
    className,
    ...props
  }, ref) => (
    <button
      ref={ref}
      type="button"
      role="combobox"
      aria-expanded={open}
      aria-haspopup="listbox"
      aria-invalid={hasError || undefined}
      aria-busy={isLoading || undefined}
      className={cn(
        "flex min-h-9 w-full items-center gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background",
        "hover:bg-muted",
        "focus:outline-none focus:ring-1 focus:ring-ring",
        "disabled:cursor-not-allowed disabled:opacity-50",
        hasError ? "border-destructive" : "border-input",
        value.length > 0 && "flex-wrap h-auto",
        className,
      )}
      {...props}
    >
      {value.length === 0 ? (
        <div className="flex-1 text-left text-muted-foreground">{placeholder}</div>
      ) : (
        <div className="flex flex-1 flex-wrap items-center gap-2">
          {showChips ? (
            <>
              {value.map((item) => (
                <Badge key={item.value} variant="secondary" className="min-w-[1.5rem] text-center px-2 text-xs">
                  {item.label}
                </Badge>
              ))}
            </>
          ) : (
            <>
              <Badge variant="secondary" className="min-w-[1.5rem] text-center px-2 text-xs">
                {value.length} Selected
              </Badge>
            </>
          )}
        </div>
      )}

      <div className="ml-auto shrink-0">
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin opacity-50" />
        ) : open ? (
          <ChevronUp className="h-4 w-4 opacity-50" />
        ) : (
          <ChevronDown className="h-4 w-4 opacity-50" />
        )}
      </div>
    </button>
  ),
)

MultiSelectTrigger.displayName = "MultiSelectTrigger"
