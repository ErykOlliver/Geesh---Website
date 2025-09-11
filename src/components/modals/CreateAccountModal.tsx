import { Button } from "../ui/button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../FirebaseConfig"
import { doc, setDoc } from "firebase/firestore";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

type ModalProps = {
    open_modal: boolean,
    on_close: () => void,
}

export const CreateAccountModal = (props: ModalProps) => {
    const [name, set_name] = useState('')
    const [email, set_email] = useState('')
    const [tel, set_tel] = useState('')
    const [password, set_pass] = useState('')
    const [registered_by, set_registered_by] = useState('')
    if (!props.open_modal) return null;

    const SignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email || !password) return

        const user = await createUserWithEmailAndPassword(auth, email, password)
        const uid = user.user.uid;

        await setDoc(doc(db, "accounts", uid), {
            name: name,
            email: email,
            tel: tel,
            pass: password
        })
        await setDoc(doc(db, "registration history", uid), {log: `Usuario ${name} cadastrado por ${registered_by}`})

    }
    return (
        <div className="absolute w-110 border shadow-2xl py-1.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-silver-dusk flex flex-col rounded-md justify-center items-center bg-abyssal-black">
            <header className="flex p-2.5 border-b justify-center flex-col w-full items-start text-start">
                <h2 className="font-Poppins text-lg">Para cadastrar, preencha os campos vazios com as informações do usuário.</h2>
            </header>
            <article className=" w-full h-full p-2.5 flex flex-col gap-2.5 ">
                <form id="accountForm" className="flex gap-1.5 flex-col justify-center w-full items-start">
                    <label className="text-start">Nome:</label>
                    <input required value={name} onChange={(e) => set_name(e.target.value)} type="text" name="" className=" bg-phantom-night w-full outline-none p-1.5 rounded" id="" placeholder="Nome do usuário" />
                    <label className="text-start">E-mail:</label>
                    <input required value={email} onChange={(e) => set_email(e.target.value)} type="email" name="" className=" bg-phantom-night w-full outline-none p-1.5 rounded" id="" placeholder="E-mail do usuário" />
                    <label className="text-start">Telefone:</label>
                    <input required value={tel} onChange={(e) => set_tel(e.target.value)} type="tel" name="" className=" bg-phantom-night w-full outline-none p-1.5 rounded" id="" placeholder="Telefone do usuário" />
                    <label className="text-start">Senha:</label>
                    <input required value={password} onChange={(e) => set_pass(e.target.value)} type="text" name="" className=" bg-phantom-night w-full outline-none p-1.5 rounded" id="" placeholder="Senha do usuário" />
                    <label>Usuário cadastrado por:</label>
                    <Select onValueChange={set_registered_by} value={registered_by}>
                        <SelectTrigger className="w-full outline-none border-none bg-phantom-night">
                            <SelectValue placeholder="Selecionar" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Moderadores</SelectLabel>
                                <SelectItem value="Erick Oliveira">Erick Oliveira</SelectItem>
                                <SelectItem value="Matheus Gabriel">Matheus Gabriel</SelectItem>
                                <SelectItem value="Gustavo Almeida">Gustavo Almeida</SelectItem>
                                <SelectItem value="Micael Pereira">Micael Pereira</SelectItem>
                                <SelectItem value="Guilherme Araujo">Guilherme Araujo</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </form>
                <Button onClick={SignUp} form="accountForm" className="w-full bg-abyssal-emerald border border-verdant-rite text-white hover:bg-graphite-shadow hover:text-White-80 rounded hover:cursor-pointer">Cadastrar</Button>
                <Button onClick={props.on_close} className="w-full bg-White-80 hover:bg-graphite-shadow hover:text-White-80 rounded text-graphite-shadow hover:cursor-pointer">Fechar</Button>
            </article>
        </div>
    )
}
