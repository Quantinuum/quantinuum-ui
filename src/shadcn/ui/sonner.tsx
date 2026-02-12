"use client"

import { Toaster as Sonner } from "sonner"
import { cn } from "../../utils/cn"
export * as sonner from "sonner"
type ToasterProps = React.ComponentProps<typeof Sonner>

const SonnerToast = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          content: "w-[calc(100%-1.2rem)]",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success: '[&_[data-icon]]:text-green-600 [&_[data-icon]]:dark:text-green-300',
          error: '[&_[data-icon]]:text-destructive',
          info: '[&_[data-icon]]:text-muted-foreground',
          warning: '[&_[data-icon]]:text-amber-600 [&_[data-icon]]:dark:text-amber-300'
        },
      }}
      {...props}
      className={cn("toaster group", props.className)}
    />
  )
}

export { SonnerToast }
