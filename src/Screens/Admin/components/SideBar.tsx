import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"

export const SideBar = () => {
    return (
        <div className="flex w-full flex-col">
            <aside className="fixed sm:w-96 bg-phantom-night border-r-2 border-graphite-shadow h-full max-h-screen hidden sm:flex">

            </aside>
            {/* Mobile Menu */}
            <div className="fixed flex sm:hidden">
                <header className="bg-phantom-night border-b-2 border-graphite-shadow w-screen items-center justify-center flex py-2.5">
                    <div className="w-[90%] flex justify-between items-center">
                        <h1 className="text-white text-4xl font-Poppins">Inicio</h1>
                        <Sheet>
                            <SheetTrigger asChild>
                                <div className="text-white">
                                    <span className="sr-only">Menu</span>
                                    <Menu size={32} />
                                </div>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <img src="/GeeshWebsite/AdminLogo.svg" alt="Geesh Logo" className='w-44' />
                                </SheetHeader>
                                <nav className="px-3.5">
                                    <ul>
                                        <li>Dashboard</li>
                                        <li></li>
                                    </ul>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </header>
            </div>
        </div>
    )
}
