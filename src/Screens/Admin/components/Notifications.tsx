import { BellRing } from "lucide-react"
import LogOfNotification from "./LogOfNotification"
import { useEffect, useState } from "react";
import { db } from "../../../../FirebaseConfig";
import { collection, getDocs, Timestamp } from "firebase/firestore";

type LogProps = {
    id: String,
    log: String,
    timer: String
}

export const Notifications = () => {
    const [registers_in_db, update_registration] = useState<LogProps[]>([]);


    useEffect(() => {
        async function getLogs() {
            const snapshot = await getDocs(collection(db, "registration history"));
            const data: LogProps[] = snapshot.docs.map((doc) => {
                const d = doc.data();
                let timerString = "";
                if (d.timer && d.timer instanceof Timestamp) {
                    timerString = d.timer.toDate().toLocaleDateString()
                } return {
                    id: doc.id,
                    log: (d.log as string) || "",
                    timer: timerString
                }
            });
            update_registration(data);
        }

        getLogs();
    }, [registers_in_db]);
    return (
        <div className="bg-phantom-night flex flex-col w-full p-2.5 gap-2 h-56 sm:h-96 border justify-center border-graphite-shadow rounded-md">
            <div className="flex items-center py-1.5 gap-1.5 justify-start">
                <div className="w-fit h-fit text-ghost-mist">
                    <BellRing className="w-6 h-6" />
                </div>
                <h1 className="text-xl text-silver-dusk font-Poppins font-bold">Notificações</h1>
            </div>
            <div className="overflow-y-auto w-full border h-44 sm:h-80 border-silver-dusk rounded-md flex flex-col p-2.5 gap-2.5">
                {registers_in_db.map((acc) => (
                    <LogOfNotification key={acc.id.toString()} log_desc={acc.log.toString()} log_data={`${acc.timer.toString()}`} />
                ))}
            </div>
        </div>
    )
}
