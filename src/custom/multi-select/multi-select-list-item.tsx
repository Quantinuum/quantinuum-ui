import { Checkbox } from "../../shadcn/ui/checkbox"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../shadcn/ui/tooltip"
import { cn } from "../../utils/cn"

import type { MultiSelectListItemProps } from "./types"

export const MultiSelectListItem = ({
  item,
  isSelected,
  isDisabled,
  disabledTooltip,
  renderItem,
}: MultiSelectListItemProps) => {
  const itemContent = (
    <div className={cn("flex items-start gap-2 w-full", isDisabled && "cursor-not-allowed")}>
      <Checkbox
        checked={isSelected}
        disabled={isDisabled}
        className="mr-2 shrink-0 mt-0.5 pointer-events-none"
      />

      <div className="flex flex-wrap items-center gap-2 flex-1">
        {renderItem ? (
          renderItem(item)
        ) : (
          <>
            {item.icon && <item.icon className="h-4 w-4 text-muted-foreground shrink-0" />}
            <span className="text-sm leading-5" style={{ overflowWrap: "anywhere" }}>{item.label}</span>
          </>
        )}
      </div>
    </div>
  )

  if (isDisabled) {
    return (
      <TooltipProvider>
        <Tooltip disableHoverableContent>
          <TooltipTrigger asChild>{itemContent}</TooltipTrigger>
          <TooltipContent align="start">{disabledTooltip}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return itemContent
}
