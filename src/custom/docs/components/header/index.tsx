
import React from 'react'
import { cn } from '../../../../utils/cn'
import { CodeCopy } from './CodeCopy'

const DocsHeaderTitle = React.forwardRef<
HTMLHeadingElement,
React.InputHTMLAttributes<HTMLParagraphElement>
>(({ className, type, ...props }, ref) => {
return (
  <h1
    className={cn('text-6xl font-semibold tracking-tighter', className)}
    ref={ref}
  >
    {props.children}
  </h1>
)
})
DocsHeaderTitle.displayName = 'DocsHeaderTitle'

const DocsHeaderSubtitle = React.forwardRef<
HTMLHeadingElement,
React.InputHTMLAttributes<HTMLParagraphElement>
>(({ className, type, ...props }, ref) => {
return (
  <h2
    className={cn('text-muted-foreground mt-5 mb-8 text-2xl tracking-tighter', className)}
    ref={ref}
  >
    {props.children}
  </h2>
)
})
DocsHeaderSubtitle.displayName = 'DocsHeaderSubtitle'

const DocsHeaderLeft = React.forwardRef<
HTMLDivElement,
React.InputHTMLAttributes<HTMLParagraphElement>
>(({ className, type, ...props }, ref) => {

  return<div className="relative mx-auto flex flex-grow flex-wrap flex-col py-4">
   <div className="mb-4 mt-0 md:mt-6 flex flex-col" ref={ref}>{props.children}</div></div>
 
})
DocsHeaderLeft.displayName = 'DocsHeaderLeft'

const DocsHeaderRight = React.forwardRef<
HTMLDivElement,
React.InputHTMLAttributes<HTMLParagraphElement>
>(({ className, type, ...props }, ref) => {

  return <div className="mt-0 mr-10 hidden lg:flex md:justify-end" ref={ref}>{props.children}</div>
 
})
DocsHeaderRight.displayName = 'DocsHeaderRight'


const DocsHeaderWrapper  = React.forwardRef<
HTMLDivElement,
React.InputHTMLAttributes<HTMLParagraphElement>
>(({ className, type, ...props }, ref) => {
  return  <header className="flex w-full my-4 mb-16" ref={ref}>
      {props.children}</header>
 
})
DocsHeaderWrapper.displayName = 'DocsHeaderWrapper'



export { CodeCopy, DocsHeaderLeft, DocsHeaderRight, DocsHeaderSubtitle, DocsHeaderTitle, DocsHeaderWrapper }

