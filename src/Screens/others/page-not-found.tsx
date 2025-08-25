import { Link } from "react-router-dom";


export default function PageNotFound() {
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-azure to-bluishWhite'>
            <div className="w-[90%] h-full flex flex-col gap-2.5 font-Inter text-White-80 justify-center items-center">
                <img src="/GeeshWebsite/404.svg" alt="Geesh Logo" className='w-54' />
                <div className="w-full sm:w-[40%] justify-center items-center flex flex-col gap-2.5">
                    <h3 className="text-3xl font-bold uppercase ">Página não encontrada</h3>
                    <p className="text-center text-base text-White-80/80 w-full">
                        Parece que a energia dessa página acabou...
                        Mas não se preocupe, você ainda pode recarregar e voltar para o fluxo certo.
                    </p>
                </div>
                <Link to="/GeeshWebsite/" className=" hover:bg-White-80 hover:text-bluishWhite hover:shadow transition-all border border-White-80 px-5.5 py-2.5 rounded-full" > Voltar para a página inicial</Link>
            </div>
        </div>
    )
}
