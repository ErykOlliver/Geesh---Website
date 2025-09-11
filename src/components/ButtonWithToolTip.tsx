import { Button } from "@/components/ui/button"

type UtilitiesProps = {
  hover_title: String,
  icon: React.ReactNode,
  function: () => void
}


export default function ButtonWithToolTip(props: UtilitiesProps) {
  return (
    <Button onClick={props.function} className="group relative shadow-2xl hover:cursor-pointer bg-transparent hover:bg-graphite-shadow rounded transition-all">
      {props.icon}
      <div className="group-hover:opacity-100 absolute top-10 opacity-0 bg-graphite-shadow p-1.5 rounded border-silver-dusk border">
        <span>{props.hover_title}</span>
      </div>
    </Button>
  )
}
