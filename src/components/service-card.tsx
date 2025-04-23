import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  className?: string
}

export function ServiceCard({
  title,
  description,
  features,
  icon: Icon,
  className,
}: ServiceCardProps) {
  return (
    <Card className={cn('w-full transition-all hover:shadow-lg', className)}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon className="h-6 w-6 text-primary" />
          <CardTitle className="text-2xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <Button className="w-full">Request Service</Button>
      </CardContent>
    </Card>
  )
}
