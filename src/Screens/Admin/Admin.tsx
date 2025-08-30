import { Outlet } from "react-router-dom"
import { SideBar } from "./components/SideBar"
import TopBar from "./components/TopBar"

export default function Admin() {
    document.title = "Geesh - Dashboard"
    return (
        <div className="flex flex-col w-screen h-screen">
            <SideBar />
            <div className="flex-1">
                <TopBar />
                <main className="w-full h-full bg-black">
                    <div className="w-full h-full pt-20 sm:pt-30">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}
