import { BrainCircuit, CheckCircle, MousePointerClick, Stars } from "lucide-react";
import BenefitBase from "../components/BenefitBase.tsx";

export default function Advantages() {
    return (
        <section id="aboutApp" className="w-full flex flex-col gap-8 bg-White-80 items-start justify-start px-5 py-14">
            <header className="flex w-full text-start flex-col gap-2.5">
                <h1 className="text-4xl font-Poppins text-black font-medium">E quais são as vantagens?</h1>
            </header>
            <div className="sm:flex-row sm:justify-center sm:items-center flex flex-col gap-4 items-start font-Poppins text-graphite-shadow/70">
                <BenefitBase icon={<CheckCircle size={32}/>} title="Monitoramento em Tempo Real" description="Acompanhe em segundos a entrada e saída de energia, com gráficos claros e relatórios atualizados a todo momento." />
                <BenefitBase icon={<BrainCircuit size={32}/>} title="Bateria Inteligente" description="Gerencie os ciclos da sua bateria para garantir energia estável mesmo nos dias mais nublados." />
                <BenefitBase icon={<MousePointerClick size={32}/>} title="Facilidade de Uso" description="Design intuitivo, simples e inclusivo — qualquer pessoa consegue usar." />
                <BenefitBase icon={<Stars size={32}/>} title="E Muito Mais" description="Cada atualização traz novos recursos para você ter mais autonomia energética." />
            </div>
        </section>
    )
}
