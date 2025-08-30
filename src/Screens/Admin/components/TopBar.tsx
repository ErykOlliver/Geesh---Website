import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function TopBar() {
    const [time, setTime] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {

            const now = new Date()
            const hours = String(now.getHours()).padStart(2, "0")
            const min = String(now.getMinutes()).padStart(2, "0")

            setTime(`${hours}:${min}`)

        }, 1000)

        return () => clearInterval(interval);
    }, [])



    return (
        <div className="fixed left-96 right-0 h-fit hidden py-5 bg-phantom-night text-white border-b-2 border-graphite-shadow sm:flex items-center justify-center px-6 z-50">
            <div className="w-[90%] h-full justify-between flex items-center">
                <h1 className="text-4xl font-Poppins">Dashboard</h1>
                <div className="flex items-end flex-col font-Poppins gap-1.5">
                    <div className="flex gap-1.5 items-center">
                        <h2 className="text-xl">{time}</h2>
                        <Clock />
                    </div>
                    <p className="text-sm">Segunda-feira, 31 de agosto, 2025</p>
                </div>
            </div>
        </div>
    )
}
