import { Button } from "../ui/button";

type ModalProps = {
    open_modal: boolean,
    on_close: () => void,
    account: { name: String, email: String, tel: String }
}

export const ViewAccountModal = (props: ModalProps) => {
    if (!props.open_modal) return null;
    return (
        <div className="absolute w-100 border shadow-2xl py-1.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-silver-dusk flex flex-col rounded-md justify-center items-center bg-abyssal-black">
            <header className="flex p-2.5 border-b justify-between  w-full items-center">
                <h2 className="font-Poppins">Informações do usuário</h2>
            </header>
            <article className=" w-full h-full p-2.5 flex flex-col gap-2.5 ">
                <section className="flex flex-col border rounded-md border-silver-dusk p-2.5">
                    <div className="flex gap-2 p-1"><h3 className="">Nome:</h3><span>{props.account.name}</span></div>
                    <div className="flex gap-2 p-1"><h3>E-mail:</h3><span>{props.account.name}</span></div>
                    <div className="flex gap-2 p-1"><h3>Telefone:</h3><span>{props.account.name}</span></div>
                </section>
                <Button onClick={props.on_close} className="w-full bg-White-80 hover:bg-graphite-shadow hover:text-White-80 rounded text-graphite-shadow hover:cursor-pointer">Fechar</Button>
            </article>
        </div>
    )
}
