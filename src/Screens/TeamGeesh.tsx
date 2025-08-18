import { Battery, MoreVertical, Timer, User } from "lucide-react";
import BenefitBase from "../components/BenefitBase";
import MemberBase from "../components/MemberBase";

export default function TeamGeesh() {
    return (
        <div className="w-screen flex bg-White-80 items-center justify-center">
            <div className="w-[90%] flex flex-col gap-6 pt-2.5">
                <h1 className="text-3xl sm:text-4xl text-start font-bold font-Inter uppercase">Equipe de desenvolvimento</h1>
                <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-5 pt-1.5 pb-2.5">
                    <MemberBase name="Erick Oliveira" skills='Lider, programador & design' img="/Erick.jpeg" />
                    <MemberBase name="Matheus Gabriel" skills='Programador' />
                    <MemberBase name="Micael Pereira" skills='Tester' />
                    <MemberBase name="Guilherme Araujo" skills='Tester' />
                    <MemberBase name="Gustavo Almeida" skills='Tester' />
                </div>
                <div className="w-full flex items-start gap-1.5 pt-1.5 pb-2.5">
                    <div className="w-full h-fit flex gap-2.5">
                        <div className="bg-gradient-to-b from-azure to-bluishWhite w-5 sm:w-1 rounded-r-2xl"></div>
                        <p className="text-justify text-coal/90 font-Poppins text-sm sm:text-lg">
                            Unimos tecnologia, dedicação e propósito para criar algo que realmente
                            faça a diferença. Geesh é a ponte entre inovação e sustentabilidade.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
