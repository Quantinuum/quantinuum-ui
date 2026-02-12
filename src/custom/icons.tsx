import { cn } from "../utils/cn"

export const StatusIconSuccess = (props: { className?: string }) => {


  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-5 text-[#16A34A] dark:text-[#4ADE80]", props.className)}>
<path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.8566 8.19113C14.1002 7.85614 14.0261 7.38708 13.6911 7.14345C13.3561 6.89982 12.8871 6.97388 12.6434 7.30887L9.15969 12.099L7.28033 10.2197C6.98744 9.92678 6.51256 9.92678 6.21967 10.2197C5.92678 10.5126 5.92678 10.9874 6.21967 11.2803L8.71967 13.7803C8.87477 13.9354 9.08999 14.0149 9.30867 13.9977C9.52734 13.9805 9.72754 13.8685 9.85655 13.6911L13.8566 8.19113Z" fill="currentColor"/>
</svg>


}

export const StatusIconError = (props: { className?: string }) => {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-5 text-[#E7000B] dark:text-[#FF6467]", props.className)}>
    <path fillRule="evenodd" clipRule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM10 5C10.4142 5 10.75 5.33579 10.75 5.75V10.25C10.75 10.6642 10.4142 11 10 11C9.58579 11 9.25 10.6642 9.25 10.25V5.75C9.25 5.33579 9.58579 5 10 5ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44771 13 9 13.4477 9 14C9 14.5523 9.44771 15 10 15Z" fill="currentColor" />
  </svg>


}


export const StatusIconCancelled = (props: { className?: string }) => {


  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-5 text-muted-foreground", props.className)}>
    <path d="M10 2.75C14.0041 2.75 17.25 5.99594 17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>





}

export const StatusIconQueued = (props: { className?: string }) => {



  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-5 text-muted-foreground", props.className)}>
    <path d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM10 4.25C9.58579 4.25 9.25 4.58579 9.25 5V10C9.25 10.4142 9.58579 10.75 10 10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H10.75V5C10.75 4.58579 10.4142 4.25 10 4.25Z" fill="currentColor" />
  </svg>



}

export const StatusIconSubmitted = (props: { className?: string }) => {



  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-5 text-muted-foreground", props.className)}>
    <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.25 13.25C9.25 13.6642 9.58579 14 10 14C10.4142 14 10.75 13.6642 10.75 13.25V8.6599L12.7004 10.7603C12.9823 11.0639 13.4568 11.0814 13.7603 10.7996C14.0639 10.5177 14.0814 10.0432 13.7996 9.73966L10.5496 6.23966C10.4077 6.08684 10.2086 6 10 6C9.79145 6 9.59231 6.08684 9.45041 6.23966L6.20041 9.73966C5.91855 10.0432 5.93613 10.5177 6.23966 10.7996C6.54319 11.0814 7.01774 11.0639 7.2996 10.7603L9.25 8.6599V13.25Z" fill="currentColor" />
  </svg>




}


export const StatusIconRetrying = (props: { className?: string }) => {

  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-5 text-muted-foreground", props.className)}>
    <g clipPath="url(#clip0_4504_53241)">
      <path d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM12.4424 6.55762C12.1983 6.31354 11.8017 6.31354 11.5576 6.55762C11.3135 6.80169 11.3135 7.19831 11.5576 7.44238L12.4902 8.375H9.0625C8.35591 8.375 7.67431 8.64675 7.16895 9.13672C6.66291 9.62742 6.375 10.2975 6.375 11C6.375 11.3474 6.44544 11.6909 6.58203 12.0107C6.71865 12.3306 6.91852 12.6204 7.16895 12.8633C7.67431 13.3532 8.35591 13.625 9.0625 13.625H10.375C10.7202 13.625 11 13.3452 11 13C11 12.6548 10.7202 12.375 10.375 12.375H9.0625C8.67519 12.375 8.30727 12.2259 8.03906 11.9658C7.90645 11.8372 7.80212 11.685 7.73145 11.5195C7.6609 11.3542 7.625 11.1777 7.625 11C7.625 10.6416 7.77151 10.2936 8.03906 10.0342C8.30727 9.77415 8.67519 9.625 9.0625 9.625H12.4902L11.5576 10.5576C11.3135 10.8017 11.3135 11.1983 11.5576 11.4424C11.8017 11.6865 12.1983 11.6865 12.4424 11.4424L14.4424 9.44238C14.6865 9.19831 14.6865 8.80169 14.4424 8.55762L12.4424 6.55762Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_4504_53241">
        <rect width="16" height="16" fill="white" transform="translate(2 2)" />
      </clipPath>
    </defs>
  </svg>


}

export const ExactMatchIcon = (props: { className?: string }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={cn("size-5", props.className)}>
      <rect x="0.5" y="0.5" width="19" height="19" rx="1.5" stroke="currentColor"/>
      <path
        d="M17 13H14.4074C14.1325 12.9996 13.869 12.8941 13.6746 12.7067C13.4802 12.5192 13.3708 12.2651 13.3704 12V9C13.3704 8.73478 13.4796 8.48043 13.6741 8.29289C13.8686 8.10536 14.1324 8 14.4074 8H17V9H14.4074V12H17V13ZM11.2963 8H9.22222V6H8.18518V13H11.2963C11.5712 12.9996 11.8347 12.8941 12.0291 12.7067C12.2235 12.5192 12.3329 12.2651 12.3333 12V9C12.3333 8.73478 12.2241 8.48043 12.0296 8.29289C11.8351 8.10536 11.5713 8 11.2963 8ZM9.22222 12V9H11.2963V12H9.22222ZM6.11111 8H3.51852V9H6.11111V10H4.03704C3.762 10 3.49822 10.1054 3.30374 10.2929C3.10926 10.4804 3 10.7348 3 11V12C3 12.2652 3.10926 12.5196 3.30374 12.7071C3.49822 12.8946 3.762 13 4.03704 13H7.14815V9C7.14815 8.73478 7.03889 8.48043 6.84441 8.29289C6.64992 8.10536 6.38615 8 6.11111 8ZM6.11111 12H4.03704V11H6.11111V12Z"
        fill="currentColor"/>
    </svg>
  )
}
