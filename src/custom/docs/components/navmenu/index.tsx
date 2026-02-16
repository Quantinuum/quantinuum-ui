'use client'
import { NexusLogo } from '../logos/NexusLogo'
import { SystemsLogo } from '../logos/SystemsLogo'
import { MobileMenu } from './MobileMenu'
import { ModeSelector } from './ModeSelector'
import { Navigation } from './NavigationMenu'
import { QuantinuumIdent } from './QuantinuumIdent'
import { QuantinuumLogo } from './QuantinuumLogo'

const navConfig = {
  navTextLinks: [
    {
      title: 'Systems',
      href: '/systems/',
      pathMatch: 'somewhere',
      logo: <SystemsLogo width={150 * 1.5} height={16 * 1.5}></SystemsLogo>,
      description: "Quantinuum's QCCD ion-trap hardware, the world's highest peforming quantum computer.",
      dropDown: [{
        title: "Guides",
        href: "/systems/guides.html",
      },{
        title: "Getting Started",
        href: "/systems/trainings/getting_started/getting_started_index.html",
      },{
        title: "Knowledge Articles",
        href: "/systems/trainings/knowledge_articles/ka_index.html",
      },{
        title: "Support",
        href: "/systems/support.html",
      }]
    }, {
      title: 'Nexus',
      href: '/nexus/',
      pathMatch: 'somewhere',
      logo: <NexusLogo variant="horizontal"  className="h-10 w-48 -mt-1"  />,
      description: "Cloud platform connecting users with hardware and compilation services, alongside associated data.",
      dropDown: [{
        title: 'Guides',
        href: '/nexus/guides.html',
      },
      {
        title: 'Trainings',
        href: '/nexus/trainings/getting_started.html',
      },
      {
        title: 'API Reference',
        href: '/nexus/api_index.html',
      },
      {
        title: 'Support',
        href: '/nexus/support_index.html',
      },]
    }, {
      title: "Developer Tools",
      href: "",
      pathMatch: "",
      logo: <></>,
      description: "Opensource developer tools empower users to build and experiment with quantum algorithms.",
      dropDown: [{
        title: 'Pytket API Docs',
        href: '/tket/api-docs/',
      },{
        title: 'Pytket User Guide',
        href: '/tket/user-guide/',
      }, {
        title: "Pytket Extensions",
        href: '/tket/api-docs/extensions.html',
      }, {
        title: 'Guppy',
        href: "/guppy/",
      }, {
        title: "Selene",
        href: "/selene/"
      }, {
        title: "\u03BBambeq",
        href: "/lambeq/"
      }, 
    ]
    }, {
      title: "Solutions",
      href: "",
      pathMatch: "",
      logo: <></>,
      description: "End-to-end Application Solutions leveraging Quantinuum Systems.",
      dropDown: [{
        title: 'InQuanto',
        href: '/inquanto/',
      },{
        title: 'Quantum Origin',
        href: "/origin/",
      }
    ]
    }
  ],
}


export const NavBar = (props: {
  activePath: string
  enableModeSelector?: boolean
}) => {
  return (
    <div className="bg-background text-foreground border-border sticky top-0 z-[100] w-full border-b text-sm">
      <div className=" bg-background px-3 md:px-4 mx-auto max-w-[90rem] flex h-14 items-center justify-between">
        <div className="mr-4 flex items-center">
          <div className='block md:hidden mr-3'>
            <MobileMenu {...navConfig}/>
          </div>
          <div className="whitespace-nowrap flex items-center gap-2">
          <a href="/" aria-label='Quantinuum Documentation' title="Quantinuum Documentation" className='hover:cursor-pointer hover:opacity-50 transition'>
            <div className='hidden sm:block'><QuantinuumLogo />
            </div>
            <div className='block sm:hidden'>
              <QuantinuumIdent/>
            </div>
            </a>
            <div className="text-muted-foreground text-xs font-medium flex items-center gap-1.5">
              <div className='mx-0.5 text-muted-foreground/50'>|</div><div>Documentation</div>
            </div>
          </div>
          <a href="/" className="ml-4 mr-4 flex items-center space-x-2">
            <span className="hidden font-bold">Quantinuum</span>
          </a>
       
        </div>
        <div className="flex items-center gap-5">
          <Navigation activePath={props.activePath} navTextLinks={navConfig.navTextLinks} />
          {props.enableModeSelector ? <> <div className='w-px h-6 bg-muted-foreground/50'></div><ModeSelector /> </>: null}
        </div>
      </div>
    </div>
  )
}
