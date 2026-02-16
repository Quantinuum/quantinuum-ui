import { LucideIcon } from "lucide-react"
import { Card, CardDescription, CardHeader } from "shadcn/ui/card"
import { CardTitle } from '../triplecard/Card'

export const HelpCard = (props: {
    columns: {
      title: string;
      icon_description: string;
      icon: LucideIcon;
      link: string;
      description: string;
    }[]
  }) => {
  return (<div className="my-24 grid grid-cols-1 flex-grow gap-8 md:grid-cols-2">
    {props.columns.map((item) => {
    return (
        <a href={item.link} key={item.title}>
        <Card className="hover:bg-muted transition">
          <CardHeader>
              <item.icon className="w-6 h-6 mb-3 inline" aria-label={item.icon_description}></item.icon>
              <CardTitle className="text-[1rem] font-semibold inline-block">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
          </CardHeader>
        </Card>
        </a>
        );
    })}
    </div> 
  )
}
