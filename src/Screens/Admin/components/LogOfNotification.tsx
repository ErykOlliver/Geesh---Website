type LogProps = {
    log_desc: string
    log_data: string
}

export default function LogOfNotification(props: LogProps) {
    return (
        <div className="flex flex-col text-start">
            <p className="text-xs font-Azeret text-White-80">{props.log_data}</p>
            <span className="font-Azeret text-White-80/70 text-sm">{props.log_desc}</span>
        </div>
    )
}
