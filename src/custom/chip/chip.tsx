import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import type { ComponentPropsWithRef } from "react";
import { cn } from "../../utils/cn";

const chipVariants = cva(
  "inline-flex items-center gap-1.5 rounded-xl font-medium transition-colors focus-within:outline-none max-w-[240px]",
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
        sm: "pl-1.5 py-0",
        md: "pl-1.5 pr-1 py-0.5",
        lg: "pl-2 pr-1.5 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

const removeButtonVariants = cva(
  "flex shrink-0 items-center justify-center aspect-square w-4 h-4 rounded-full opacity-70 outline-none transition-opacity hover:opacity-100 focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-current",
  {
    variants: {
      variant: {
        default: "hover:bg-muted hover:text-foreground",
        muted: "hover:bg-muted-accent hover:text-foreground",
        primary: "hover:bg-primary-foreground hover:text-primary",
      },
      size: {
        sm: "p-0.5",
        md: "p-1",
        lg: "p-1.5",
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
      <div className="truncate flex-1 max-w-[200px] text-xs font-medium">{children}</div>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={removeAriaLabel ?? "Remove"}
          className={removeButtonVariants({ variant, size })}
        >
          <X className="h-3.5 w-3.5 shrink-0" />
        </button>
      )}
    </div>
  );
};

export { Chip, chipVariants };
