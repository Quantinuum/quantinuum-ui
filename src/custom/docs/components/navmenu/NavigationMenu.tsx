
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from 'shadcn/ui/navigation-menu';


export const Navigation = (props: {
  activePath: string,
  navTextLinks: {
    href: string,
    title: string,
    logo: JSX.Element,
    description: string,
    dropDown: {
      href: string,
      title: string, 
    }[],
  }[];
} ) => {
  const isActivePath = (activePath: string, path: string) => {
    return activePath.startsWith(path)
  }
  return (
    <NavigationMenu className="place-self-center sm:block">
      <NavigationMenuList className="hidden md:flex">
        { props.navTextLinks.map((item) => {
          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {item.description && !item.href && (
                    <p className="p-4 text-sm leading-tight text-muted-foreground py-2 hidden md:block lg:block">
                      {item.description}
                    </p>
                  )}
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {item.href && (
                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href={item.href}
                        >
                          {item.logo}
                          <p className="text-sm leading-tight text-muted-foreground py-6">
                            {item.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  )}

                  {item.dropDown && item.dropDown.length > 0 && item.dropDown.map((subtitle) => (
                    <li key={subtitle.title}> {/* Add a unique key */}
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href={subtitle.href}
                        >
                          <div className="text-sm font-medium leading-none">{subtitle.title}</div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
