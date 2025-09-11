import { Eye, Trash2, User } from "lucide-react";
import ButtonWithToolTip from "@/components/ButtonWithToolTip";
import { useState } from "react";
import { ViewAccountModal } from "@/components/modals/ViewAccountModal";

type AccountType = 'short' | 'full'

type AccountProps = {
    account_name: String,
    account_email: String,
    account_avatar?: React.ReactNode,
    account_type: AccountType
}


export const PopAccount = (props: AccountProps) => {
    const [enable_modal, modal_state] = useState<'view' | null>(null)
    const user = {
        name: 'Erick',
        email: 'oliveira@gmaill',
        tel: '0000-0000'
    }
    const render = () => {
        switch (props.account_type) {
            case "short":
                return (
                    <div className="flex justify-between items-center">
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
                    </div>
                )
            case "full":
                return (
                    <div className="flex justify-between items-center">
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
                        <div className="flex justify-center items-center gap-2">
                            <ButtonWithToolTip function={() => modal_state('view')} icon={<Eye />} hover_title="Visualizar" />
                            <ButtonWithToolTip function={() => undefined} icon={<Trash2 />} hover_title="Deletar" />
                        </div>
                    </div>
                )
        }
    }

    return (
        <div className="border border-silver-dusk rounded-md px-2.5 py-1.5">
            {render()}
            <ViewAccountModal open_modal={enable_modal == 'view'} on_close={() => modal_state(null)} account={user} />
        </div>
    )
}
