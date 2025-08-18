type model = 'on description' | 'no description';

type BenefitsProps = {
    icon: React.ReactNode,
    title: string,
    model: model,
    description?: string,

}


export default function BenefitBase(props: BenefitsProps) {
    const renderBenefit = () => {
        switch (props.model) {
            case 'on description':
                return (
                    <div className="w-full gap-2.5 flex items-center px-1.5 ">
                        <div className="w-16 h-16  flex justify-center items-center">
                            {props.icon}
                        </div>
                        <div className="text-sm text-start font-Inter">
                            <h1 className="font-bold">{props.title}</h1>
                            <p>{props.description}</p>
                        </div>
                    </div>
                )
            case 'no description':
                return (
                    <div className="w-full gap-2.5 flex items-center  px-1.5">
                        <div className="w-8 h-8 sm:w-16 sm:h-16 flex justify-center items-center">
                            {props.icon}
                        </div>
                        <div className="text-sm text-start font-Inter">
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
