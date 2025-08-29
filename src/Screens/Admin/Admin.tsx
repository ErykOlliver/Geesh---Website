import { Outlet } from "react-router-dom"
import { SideBar } from "./components/SideBar"

export default function Admin() {
    return (
        <body className="flex w-screen h-screen">
            <SideBar />
            <div>
                
                <main>
                    <Outlet />
                </main>
            </div>
        </body>
    )
}
