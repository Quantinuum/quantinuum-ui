import React from 'react'
import { cn } from '../../../../utils/cn'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.InputHTMLAttributes<HTMLParagraphElement>
>(({ className, type, ...props }, ref) => {
  return (
    <p
      className={cn(
        'mb-1 mt-4 text-[1.45rem] font-semibold tracking-tight',
        className
      )}
      ref={ref}
    >
      {props.children}
    </p>
  )
})
CardTitle.displayName = 'CardTitle'

const CardSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.InputHTMLAttributes<HTMLParagraphElement>
>(({ className, type, ...props }, ref) => {
  return (
    <p
      className={cn('text-muted-foreground mb-6 mt-4 text-sm', className)}
      ref={ref}
    >
      {props.children}
    </p>
  )
})
CardSubtitle.displayName = 'CardSubtitle'

const Card = React.forwardRef<
  HTMLParagraphElement,
  React.InputHTMLAttributes<HTMLParagraphElement>
>(({ className, type, ...props }, ref) => {
  return (
    <div
      className={cn(
        ' border-border flex w-full flex-col justify-between rounded-xl overflow-hidden border p-7 pb-9 dark:bg-muted/25 bg-background',
        className
      )}
      ref={ref}
    >
      <div> {props.children}</div>
    </div>
  )
})
Card.displayName = 'Card'

const IconBar = React.forwardRef<
  HTMLParagraphElement,
  React.InputHTMLAttributes<HTMLParagraphElement>
>(({ className, type, ...props }, ref) => {
  return (
    <div
      className={cn('mb-4 flex items-center justify-between', className)}
      ref={ref}
    >
      {props.children}
    </div>
  )
})
IconBar.displayName = 'IconBar'

export { Card, CardSubtitle, CardTitle }

