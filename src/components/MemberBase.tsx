import { User } from "lucide-react"

type MemberProps = {
    img?: React.ReactNode,
    name: string,
    skills: string,

}


export default function MemberBase(props: MemberProps) {

    return (
        <div className="w-full flex items-center gap-2.5">
            <div className=" flex items-center justify-center w-20 h-16 sm:w-20 sm:h-16 rounded-full">
                {props.img ?
                    <img src={props.img.toLocaleString()} alt="foto do usuário" className="w-full h-full rounded-full" />
                    :
                    <div className="w-full h-full rounded-full flex items-center justify-center bg-gray"><User width={32} height={32}  strokeWidth={1}/></div>}
            </div>
            <div className=" flex flex-col text-start w-full h-full text-lg gap-0">
                <h1 className="font-bold font-Inria">{props.name}</h1>
                <p className="font-Inria font-light text-base">{props.skills}</p>
            </div>
        </div >
    )
}
