import { Download } from "lucide-react"

export const DownloadAppNow = () => {
    return (
        <section className="w-full flex flex-col gap-2.5 text-center font-Poppins bg-White-80 items-center justify-start px-5 py-14">
            <div className="shadow-md border-4 bg-[#F8F8F8] rounded-xl border-white p-3.5 flex flex-col gap-4.5 text-lg text-graphite-shadow/70">
                <h1 className="text-black">Transforme sua relação com a energia.</h1>
                <span className="text-base">Baixe agora o Geesh e dê o primeiro passo rumo a um consumo mais sustentável.</span>
                <a aria-label='aria-label="Download do Geesh.apk"' href="#Home" className=' hover:bg-white hover:text-azure transition-all hover:shadow-bluishWhite font-Poppins flex w-full h-fit py-3.5 justify-center items-center shadow-md bg-azure text-white rounded-full gap-1'><Download /> Fazer download agora</a>
            </div>
        </section>
    )
}
