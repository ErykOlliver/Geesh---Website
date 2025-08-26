import { KeyRound, ShieldUser } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../FirebaseConfig.tsx"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const navigate = useNavigate()

    const SignIn = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            user ? navigate("/GeeshWebsite/Admin/") : navigate("/GeeshWebsite/AdminSignIn/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="bg-phantom-night rounded-lg border border-graphite-shadow shadow-2xl gap-4 flex flex-col w-80 h-fit justify-center items-center p-4">
            <div className="flex flex-col gap-2.5 items-center justify-center  w-full h-fit ">
                <img src="/GeeshWebsite/GeeshName.svg" alt="Geesh Logo" className='w-24 sm:w-34 ' />
                <p className="text-ghost-mist uppercase text-xs">Gerenciamento de Energia</p>
            </div>
            <form className="flex flex-col w-full h-full gap-2.5  py-3.5" id="AdminSignInForm">
                <label htmlFor="" className="flex text-silver-dusk items-center text-sm font-Inter font-light gap-1 justify-start "><ShieldUser className="text-ghost-mist" /> Admin</label>
                <input type="email" value={email} onChange={(e) => SetEmail(e.target.value)} name="email" className="w-full rounded-lg h-9 bg-abyssal-black border border-midnight-smoke text-White-80 text-sm px-3.5 focus:outline-none" />
                <label htmlFor="" className="flex text-silver-dusk items-center text-sm font-Inter font-light gap-1 justify-start "><KeyRound className="text-ghost-mist" /> Senha</label>
                <input type="password" value={password} onChange={(e) => SetPassword(e.target.value)} name="password" className="w-full rounded-lg h-9 bg-abyssal-black border border-midnight-smoke text-White-80 text-sm px-3.5 focus:outline-none" />
            </form>
            <button form="AdminSignInForm" onClick={SignIn} className="text-White-80 hover:cursor-pointer hover:bg-amethyst-myst transition-colors w-full bg-purple-enigma rounded-lg flex justify-center items-center font-bold h-10 " >Administrar</button>
        </div>
    )
}
