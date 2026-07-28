import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import type { ComponentPropsWithRef } from "react";
import { cn } from "../../utils/cn";

const chipVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-medium transition-colors focus-within:outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-muted-accent text-foreground",
        muted:
          "bg-muted text-foreground",
        primary:
          "bg-primary text-primary-foreground",
      },
      size: {
        sm: "px-1.5 py-0",
        md: "px-1.5 py-0.5",
        lg: "px-2 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface ChipProps
  extends Omit<ComponentPropsWithRef<"div">, "onClick" | "children">,
    VariantProps<typeof chipVariants> {
  children: string | number;
  onRemove?: () => void;
  removeAriaLabel?: string;
}

const Chip = ({
  className,
  variant,
  size,
  children,
  onRemove,
  removeAriaLabel,
  ref,
  ...props
}: ChipProps) => {
  return (
    <div
      ref={ref}
      className={cn(chipVariants({ variant, size }), className)}
      {...props}
    >
      <span className="truncate text-xs font-medium leading-4">{children}</span>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={removeAriaLabel ?? "Remove"}
          className="flex shrink-0 items-center justify-center rounded-full opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-current"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  );
};

export { Chip, chipVariants };
