"use client"

import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../../shadcn/ui/tooltip"
import { cn } from "../../utils/cn"
import type { MultiSelectLabelProps } from "./types"

export const MultiSelectLabel = ({
  htmlFor,
  label,
  tooltip,
  position = "top",
  icon: Icon,
}: MultiSelectLabelProps) => {
  return (
    <div className={cn("flex items-center gap-1.5", position === "left" && "whitespace-nowrap")}>
      {Icon && <Icon className="h-4 w-4 shrink-0" />}
      <label htmlFor={htmlFor} className="text-sm font-medium leading-none text-muted-foreground">
        {label}
      </label>
      {tooltip && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="h-4 w-4 shrink-0 cursor-help text-muted-foreground" />
          </TooltipTrigger>
          <TooltipContent>{tooltip}</TooltipContent>
        </Tooltip>
      )}
    </div>
  )
}
