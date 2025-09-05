type SectionProps = {
    title: String,
    icon?: React.ReactNode
}

export const SectionIndicator = (props: SectionProps) => {
    return (
        <div className="flex text-abyssal-black/50 gap-1.5 w-full font-Poppins text-sm justify-start items-center">
            <div>{props.icon}</div>
            <span className="border-b w-full py-1 border-abyssal-black/70">{props.title}</span>
        </div>
    )
}
