

import { MenuIcon } from 'lucide-react';
import { Button } from 'shadcn/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from 'shadcn/ui/dropdown-menu';

  export const MobileMenu = (props: {
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
  }) => {
    return <DropdownMenu >
    <DropdownMenuTrigger asChild><Button variant='outline' className="w-8 p-0 h-8"> <MenuIcon/></Button></DropdownMenuTrigger>
    <DropdownMenuContent className="max-h-[80vh] overflow-y-auto ml-2" >
        {props.navTextLinks.map(link => {
            return   <><DropdownMenuItem asChild key={link.title}><a href={link.href}>{link.title}</a>
            </DropdownMenuItem>
            {link.dropDown.map(subitem => {
              return <DropdownMenuItem className="text-xs ml-2 text-muted-foreground last:mb-4" key={subitem.title} asChild ><a  href={subitem.href}>{subitem.title}</a></DropdownMenuItem>
            })}
            </>
        })}
        {}
    </DropdownMenuContent>
  </DropdownMenu>
  }
