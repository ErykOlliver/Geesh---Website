type model = 'complete' | 'simple';

type BenefitsProps = {
    icon?: React.ReactNode,
    title: string,
    model: model,
    description?: string,

}


export default function BenefitBase(props: BenefitsProps) {
    const renderBenefit = () => {
        switch (props.model) {
            case 'complete':
                return (
                    <div className="w-full gap-2.5 flex items-center px-1.5 ">
                        <div className="w-16 h-16  flex justify-center items-center">
                            {props.icon}
                        </div>
                        <div className="text-sm sm:text-lg text-start font-Inter">
                            <h1 className="font-bold">{props.title}</h1>
                            <p>{props.description}</p>
                        </div>
                    </div>
                )
            case 'simple':
                return (
                    <div className="w-full gap-2.5 flex items-center  px-1.5">
                        <div className="text-sm sm:text-lg text-start font-Inter">
                            <h1 className="font-bold">{props.title}</h1>
                        </div>
                    </div>
                )
        }
    }
    return (
        <div className="w-full flex items-center">
            {renderBenefit()}
        </div>
    )
}
