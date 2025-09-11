import { Outlet } from "react-router-dom"
import { SideBar } from "./components/SideBar"
import TopBar from "./components/TopBar"

export default function Admin() {
    document.title = "Geesh - Dashboard"
    return (
        <div className="bg-black flex flex-col w-screen h-screen overflow-hidden">
            <SideBar />
            <div className="flex-1">
                <TopBar />
                <main className="bg-black fixed bottom-0 w-full h-213 flex items-start sm:fixed sm:w-390 sm:right-0 sm:h-207.5 sm:bottom-0 overflow-y-auto">
                    <div className="w-full h-full py-5">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}
