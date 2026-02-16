import { Separator } from "shadcn/ui/separator";
import { QuantinuumLogo } from "../../QuantinuumLogo";

const footerConfig = {
  columns: [
    {
      name: "Products",
      items: [
        {
          name: "Systems",
          href: "/systems"
      },
        {
          name: "Nexus",
          href: "/nexus"
        },
        {
          name: "InQuanto",
          href: "/inquanto"
        },
        {
          name: "Quantum Origin",
          href: "/origin"
        }
      ]
    }, {
      name: "Opensource",
      items: [
        {
          name: "pytket",
          href: "/tket"
        },
        {
          name: "guppy",
          href: "/guppy"
        },
        {
          name: "selene",
          href: "/selene"
        },
        {
          name: "\u03BBambeq",
          href: "/lambeq"
        }
      ]
    },{
      name: "Quantinuum",
      items: [
        {
          name: "About", 
          href: "https://www.quantinuum.com/about",
        }, {
          name: "Careers",
          href: "https://www.quantinuum.com/careers",
        },{
          name: "Events", 
          href: "https://www.quantinuum.com/events"
        }
      ]
    }
  ],
}

export const Footer = () => {
  return (
    <div className="mb-24">

      <div className="my-24"></div>
        <Separator/>
        <div className="my-12"></div>

    <footer className="text-muted-foreground flex w-full flex-col justify-between md:items-start lg:flex-row ">
      <div className="mb-12 lg:mb-0">
        <div className="-mt-4">
          <a href="https://www.quantinuum.com/" target='_blank' className='hover:opacity-75 transition'>
          <QuantinuumLogo/>
          </a>
        </div>
        <p className="max-w-[24rem] text-xs leading-5">
          Copyright © {new Date().getFullYear()} Quantinuum Inc. All rights reserved.{' '}
        </p>
        <div className='flex items-center gap-2 mt-2'>
          <a href="https://www.quantinuum.com/terms-conditions" target="_blank" className='font-medium text-xs tracking-tight text-blue-600 dark:text-blue-300'>
            Terms and Conditions
          </a> <div>/</div>  
          <a target="_blank" href="https://www.quantinuum.com/privacy-statement" className='font-medium text-xs tracking-tight text-blue-600 dark:text-blue-300'>
            Privacy Policy
          </a><div>/</div>
          <a target="_blank" href="https://www.quantinuum.com/cookie-notice" className='font-medium text-xs tracking-tight text-blue-600 dark:text-blue-300'>
            Cookie Notice
          </a><div>/</div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-24">
        {footerConfig.columns.map((col) => {
          return (
            <div key={col.name} className="flex flex-col md:items-end">
              <span className="text-foreground text-left text-[0.675rem] font-semibold uppercase tracking-wide md:text-right">
                {col.name}
              </span>
              <ul className="mt-3 flex flex-col gap-2 lg:text-right">
                {col.items.map((item) => {
                  return (
                    <li key={item.name}>
                      <a
                        className="text-muted-foreground text-[0.85rem] font-medium"
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </footer>
    </div>
  )
}
