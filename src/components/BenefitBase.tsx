
type BenefitsProps = {
    icon?: React.ReactNode,
    title: string,
    description?: string,

}


export default function BenefitBase(props: BenefitsProps) {
    return (
        <div className="sm:h-58 sm:justify-center w-full h-fit gap-1.5 hover:px-10 hover:cursor-pointer shadow-md duration-200 hover:shadow-md hover:shadow-bluishWhite ease-in transition-all bg-[#F8F8F8] p-4 flex flex-col font-Poppins items-start text-start border-4 rounded-md border-white">
            <div className="text-graphite-shadow flex justify-center items-center">
                {props.icon}
            </div>
            <h1 className="font-medium text-xl text-graphite-shadow">{props.title}</h1>
            <p className="sm:w-fit text-coal/70 text-lg">{props.description}</p>
        </div>
    )
}
