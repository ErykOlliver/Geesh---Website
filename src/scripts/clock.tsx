import { useEffect, useState } from "react";

export function useClock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, "0");
            const min = String(now.getMinutes()).padStart(2, "0");
            setTime(`${hours}:${min}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return time;
}
export function captureClock() {
    const [captured_timer, print_timer] = useState("");

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    print_timer(`${hours}:${min}`);
    
    return captured_timer;
}
