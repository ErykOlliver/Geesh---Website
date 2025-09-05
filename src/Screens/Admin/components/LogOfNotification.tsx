import { Clock } from "lucide-react"

type LogProps = {
    log_desc: string
    log_data: string
}

export default function LogOfNotification(props: LogProps) {
    return (
        <div className="flex flex-col text-start">
            <div className="flex items-center gap-1">
                <p className="text-xs font-Azeret text-White-80">{props.log_data}</p>
                <div className="w-fit h-fit flex justify-center items-center">
                    <Clock className="w-4 h-4" />
                </div>
            </div>
            <span className="font-Azeret text-White-80/70 text-sm">{props.log_desc}</span>
        </div>
    )
}
