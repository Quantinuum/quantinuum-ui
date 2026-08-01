import { type ComponentPropsWithRef } from "react";
import { Chip, type ChipProps } from "../chip";
import { cn } from "../../utils/cn";

type FilterChipProps = ComponentPropsWithRef<"div"> & {
  label: string;
  items: ChipProps["children"][];
  variant?: ChipProps["variant"];
  size?: ChipProps["size"];
  onRemove?: (item: ChipProps["children"]) => void;
};

const FilterChip = ({
  label,
  items,
  variant,
  size,
  onRemove,
  className,
  ...props
}: FilterChipProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1.5 gap-1.5 rounded-2xl border border-border",
        className,
      )}
      {...props}
    >
      <div className="text-foreground text-xs font-normal">{label}</div>
      {items.map((item) => (
        <Chip
          key={item}
          variant={variant}
          size={size}
          onRemove={onRemove ? () => onRemove(item) : undefined}
          removeAriaLabel={`Remove ${item}`}
        >
          {item}
        </Chip>
      ))}
    </div>
  )
};

export { FilterChip, type FilterChipProps };
