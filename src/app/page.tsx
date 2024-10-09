import { ModeToggle } from '@/components/mode-toggle'
import { NavMain } from '@/components/nav-main'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container">
      <NavMain />
      <div className="content flex flex-col items-center text-center">
        <h1 className="text-5xl">Hello world</h1>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
        <Button>Hello</Button>
      </div>
      <ModeToggle />
    </div>
  )
}
