import { Download } from 'lucide-react'

export default function DownloadApp() {
    return (
        <div className='w-[90%] flex flex-col gap-5 items-center justify-center'>
            <div className='flex flex-col w-full items-center justify-center gap-5 py-1.5'>
                <img src="/public/GeeshIcon.svg" alt="Geesh Logo" className='w-20' />
                <h1 className='text-5xl uppercase text-White-80 font-Inter'>Seu gerenciador <span className='font-bold'> de energias renovaveis</span></h1>
            </div>
            <div className='flex flex-col w-full items-center justify-center gap-5 p-1.5'>
                <div className='px-2.5 py-1.5 bg-gray-40/40 text-sm rounded-md'><p className='text-White-80 font-Poppins text-sm'>v1.0.0</p></div>
                <a href="#" className='bg-White-80 text-azure hover:bg-azure hover:text-White-80 transition flex gap-1 px-5 py-4 text-xl rounded-full items-center font-Montserrat'> <Download /> Fazer download do Geesh</a>
            </div>
        </div>
    )
}
