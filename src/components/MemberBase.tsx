
type MemberProps = {
    img?: String,
    name: string,
    skills: string,
    description: String

}

export default function MemberBase(props: MemberProps) {

    return (
        <div className="group sm:h-140 hover:shadow-bluishWhite transition-all duration-200 bg-cover bg-center shadow-md  h-90 w-full rounded-4xl border-4 border-white text-center font-Poppins" style={{ backgroundImage: `url(${props.img})` }}>
            <div className=" w-full h-full bg-gradient-to-t py-3.5 px-2.5 from-black to-transparent rounded-4xl flex flex-col justify-end items-center">
                <h1 className="font-medium text-White-80 text-4xl group-hover:animate-riseUp">{props.name}</h1>
                <h3 className="text-White-80/80 text-base  animate-pulse group-hover:animate-riseUp">{props.skills}</h3>
                <span className="sm:hidden group-hover:flex group-hover:animate-visibleDesc transition-all text-White-80/50 text-sm ">{props.description}</span>
            </div>
        </div >
    )
}
