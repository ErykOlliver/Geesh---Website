import { User } from "lucide-react";
import { Link } from "react-router-dom";

type AccountProps = {
    account_name: String,
    account_email: String,
    account_avatar?: React.ReactNode;
}


export const PopAccount = (props: AccountProps) => {
    return (
        <div className="flex justify-between items-center border border-silver-dusk rounded-md px-2.5 py-1.5">
            <div className="flex items-center gap-2.5">
                <div className="bg-White-80 w-fit p-2.5 text-graphite-shadow rounded-full h-fit">
                    {props.account_avatar ?
                        <img src={props.account_avatar.toString()} />
                        :
                        <User className="w-6 h-6" />
                    }
                </div>
                <div className="flex flex-col text-start items-start ">
                    <p className="text-lg font-Inter text-White-80">{props.account_name}</p>
                    <span className="font-Inter font-light text-sm text-White-80/70">{props.account_email}</span>
                </div>
            </div>
            <Link to={"#"} className="w-fit h-fit px-4 py-2 flex justify-center items-center bg-White-80 text-graphite-shadow rounded-full">
                <span className="text-sm">Ver perfil</span>
            </Link>
        </div>
    )
}
