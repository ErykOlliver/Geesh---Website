import { Battery, MoreVertical, Timer, User } from "lucide-react";
import BenefitBase from "../components/BenefitBase";

export default function TeamGeesh() {
    return (
        <div className="w-screen flex bg-White-80 items-center justify-center">
            <div className="w-[90%] flex flex-col gap-4">
                <div className="w-full flex flex-col items-start gap-1.5 pt-1.5 pb-2.5">
                    <h1 className="text-4xl font-bold font-Inter">Geesh</h1>
                    <div className="flex flex-col gap-2.5">
                        <p className="text-justify text-coal/90 font-Poppins text-sm">
                            O Geesh é uma aplicação desenvolvida por alunos do 3º ano do curso
                            técnico em Mecatrônica do CETEP RM, com o objetivo de gerenciar de forma
                            simples e eficiente a energia proveniente de fontes renováveis.
                            <br />
                            Seu funcionamento integra diferentes soluções, como energia solar e eólica,
                            conectadas a dispositivos inteligentes criados por outras equipes do mesmo
                            projeto.
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-col items-start gap-1.5 pt-1.5 pb-2.5">
                    <h1 className="text-2xl font-bold font-Inter">Principais vantagens</h1>
                    <div className="flex flex-col gap-6">
                        <BenefitBase icon={<Timer width={32} height={32} />} title="Monitoramento em Tempo Real" description="Veja quanto entra e sai de energia, em tempo real, com gráficos simples e dados atualizados a todo momento." model="on description" />
                        <BenefitBase icon={<User width={32} height={32} />} title="Acessibilidade Garantida" description="Interface simples, intuitiva e inclusiva. Qualquer pessoa consegue usar com facilidade." model="on description" />
                        <BenefitBase icon={<Battery width={32} height={32} />} title="Bateria Inteligente" description="Gerencie o uso da bateria nos momentos certos e garanta energia mesmo quando o clima não ajuda." model="on description" />
                        <BenefitBase icon={<MoreVertical width={32} height={32} />} title="E muito mais" model="no description" />
                    </div>
                </div>
                <div className="w-full flex flex-col items-start gap-1.5 pt-1.5 pb-2.5">
                    <div className="flex flex-col gap-2.5">
                        <p className="text-justify text-coal/90 font-Poppins text-sm">
                            Esse aplicativo é apenas uma parte de algo maior: um sistema completo de
                            controle e aproveitamento de energia sustentável, pensado para tornar o consumo
                            mais consciente, acessível e moderno.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
