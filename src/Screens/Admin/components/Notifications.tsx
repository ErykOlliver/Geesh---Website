import { BellRing } from "lucide-react"
import LogOfNotification from "./LogOfNotification"

export const Notifications = () => {
    return (
        <div className="bg-phantom-night flex flex-col w-full p-2.5 gap-2 h-56 sm:h-96 border justify-center border-graphite-shadow rounded-md">
            <div className="flex items-center py-1.5 gap-1.5 justify-start">
                <div className="w-fit h-fit text-ghost-mist">
                    <BellRing className="w-6 h-6" />
                </div>
                <h1 className="text-xl text-silver-dusk font-Poppins font-bold">Notificações</h1>
            </div>
            <div className="overflow-y-auto w-full border h-44 sm:h-80 border-silver-dusk rounded-md flex flex-col p-2.5 gap-2.5">
                <LogOfNotification log_desc="Usuario João vicent cadastrado por Guilherme Araujo" log_data="27/08/2025, 14:21" />
                <LogOfNotification log_desc="Usuario João vicent cadastrado por Guilherme Araujo" log_data="27/08/2025, 14:21" />
                <LogOfNotification log_desc="Usuario João vicent cadastrado por Guilherme Araujo" log_data="27/08/2025, 14:21" />
                <LogOfNotification log_desc="Usuario João vicent cadastrado por Guilherme Araujo" log_data="27/08/2025, 14:21" />
                <LogOfNotification log_desc="Usuario João vicent cadastrado por Guilherme Araujo" log_data="27/08/2025, 14:21" />
            </div>
        </div>
    )
}
