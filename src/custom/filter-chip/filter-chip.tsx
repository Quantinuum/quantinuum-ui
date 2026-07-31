import { Chip, type ChipProps } from "../chip";
import { type ComponentPropsWithRef } from "react"

type FilterChipProps = ComponentPropsWithRef<"div"> & {
  label: string;
  items: FilterChipProps["label"][];
  variant?: ChipProps["variant"];
  size?: ChipProps["size"];
  onRemove?: (item: FilterChipProps["label"]) => void;
};

const FilterChip = ({ label, items, variant, size, onRemove }: FilterChipProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="inline-flex items-center px-3 py-1.5 gap-1.5 rounded-2xl border border-border">
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
