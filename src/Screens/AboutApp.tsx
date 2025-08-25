import { Battery, Timer, User } from "lucide-react";
import BenefitBase from "../components/BenefitBase.tsx";

export default function AboutApp() {
    return (
        <div className="w-screen flex bg-White-80 items-center justify-center">
            <div className="w-[90%] flex flex-col gap-4 pt-2.5">
                <div className="w-full flex flex-col items-start gap-1.5 pt-1.5 pb-2.5">
                    <h1 className="text-4xl sm:text-5xl font-bold font-Inter">Geesh</h1>
                    <div className="flex flex-col gap-2.5">
                        <p className="flex flex-col text-justify text-coal/90 font-Poppins  text-sm sm:text-lg">
                            <span>
                                O Geesh é uma aplicação desenvolvida por alunos do 3º ano do curso
                                técnico em Mecatrônica do <a title="Centro Territorial de Educação Profissional da Região Metropolitana" target="_blank" href="https://share.google/JH9wYu5LDPvkThc5R" className="hover:text-black transition-colors underline">CETEP RM </a>,
                                com o objetivo de gerenciar de forma
                                simples e eficiente a energia proveniente de fontes renováveis.
                            </span>
                            <br />
                            <span>
                                Seu funcionamento integra diferentes soluções, como energia solar e eólica,
                                conectadas a dispositivos inteligentes criados por outras equipes do mesmo
                                projeto.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-col items-start gap-1.5 pt-1.5 pb-2.5">
                    <h1 className="text-2xl sm:text-3xl font-bold font-Inter">Principais vantagens</h1>
                    <div className="flex flex-col gap-6 py-2.5">
                        <BenefitBase icon={<Timer width={32} height={32} />} title="Monitoramento em Tempo Real" description="Veja quanto entra e sai de energia, em tempo real, com gráficos simples e dados atualizados a todo momento." model="complete" />
                        <BenefitBase icon={<User width={32} height={32} />} title="Acessibilidade Garantida" description="Interface simples, intuitiva e inclusiva. Qualquer pessoa consegue usar com facilidade." model="complete" />
                        <BenefitBase icon={<Battery width={32} height={32} />} title="Bateria Inteligente" description="Gerencie o uso da bateria nos momentos certos e garanta energia mesmo quando o clima não ajuda." model="complete" />
                        <BenefitBase title="E muito mais..." model="simple" />
                    </div>
                </div>
                <div className="w-full flex flex-col items-start gap-1.5 pt-1.5 pb-2.5">
                    <div className="flex flex-col gap-2.5">
                        <p className="text-justify text-coal/90 font-Poppins text-sm sm:text-lg">
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
