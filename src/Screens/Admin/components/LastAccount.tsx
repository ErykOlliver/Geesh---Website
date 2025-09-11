import { PopAccount } from "./PopAccount"


export const LastAccount = () => {
    return (
        <div className="bg-phantom-night rounded-md p-2.5 flex flex-col items-start justify-center border border-graphite-shadow">
            <h1 className="text-xl text-silver-dusk font-Poppins font-bold">Ùltimo usuário cadastrado</h1>
            <div className="flex flex-col gap-2.5 border border-silver-dusk rounded-md p-2.5 w-full">
                <PopAccount account_name="Erick Oliveira" account_email="erykolliver@gmail.com" account_type="short" />
            </div>
        </div>
    )
}
