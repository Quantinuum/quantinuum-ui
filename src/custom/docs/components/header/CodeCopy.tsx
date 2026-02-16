'use client'
import React from "react"

import { Check, Copy } from "lucide-react"
import { Button } from 'shadcn/ui/button'
import { cn } from '../../../../utils/cn'
export const CodeCopy = (props: {textToCopy: string, className?: string}) => {

    const [copied, setHasCopied] = React.useState(false)
 
    return <div className="dark:text-foreground text-background w-full flex  items-center justify-center self-start whitespace-nowrap rounded bg-gradient-to-r from-zinc-600 to-slate-600  py-0.5 pl-4 text-center text-sm font-semibold  dark:from-zinc-600 dark:to-slate-600">
        <code className="font-mono">{props.textToCopy}</code>

        <Button
        variant="ghost"
        size="icon"
        className={cn(`${copied ? ' hover:bg-transparent' : 'hover:bg-background/50 hover:text-foreground/75'} ml-1`, props.className)}
        onClick={() => {
          window.navigator.clipboard.writeText(props.textToCopy)
          setHasCopied(true)
          setTimeout(() => {
            setHasCopied(false)
          }, 2500)
        }}
      >
        {copied ? (
          <Check className="text-background h-5 w-5"></Check>
        ) : (
          <Copy className="aspect-square h-4 w-4"></Copy>
        )}
      </Button>
      </div>
}
