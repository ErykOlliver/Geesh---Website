type StatisticProps = {
    icon: React.ReactNode;
    title: String;
    value: number
}


export const GeneralUserStatistic = (props: StatisticProps) => {
    return (
        <div className="w-44 h-fit shadow bg-phantom-night border-2 border-graphite-shadow rounded-lg items-start p-2.5 gap-2.5 flex flex-col justify-center">
            <div className="flex gap-1 items-end">
                <div className="text-ghost-mist">
                    {props.icon}
                </div>
                <span className="text-sm font-Poppins text-silver-dusk">{props.title}</span>
            </div>
            <h1 className="text-5xl font-Inter font-bold">{props.value}</h1>
        </div>
    )
}
