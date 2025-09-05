import { UserCheck, UserPlus, Users, UserX } from "lucide-react"
import { GeneralUserStatistic } from "../components/GeneralUserStatistic"
import { LastAccount } from "../components/LastAccount"
import { Notifications } from "../components/Notifications"

export const Dashboard = () => {
  return (
    <div className=" text-white w-full h-full flex justify-center items-start">
      <div className=" w-[90%] flex flex-col gap-3.5">
        <div className="w-full h-fit flex gap-2.5 flex-wrap justify-center">
          <GeneralUserStatistic icon={<Users />} title="Total de usuários" value={200} />
          <GeneralUserStatistic icon={<UserCheck />} title="Ativos" value={120} />
          <GeneralUserStatistic icon={<UserX />} title="Inativos" value={80} />
          <GeneralUserStatistic icon={<UserPlus />} title="Novos" value={10} />
        </div>
        <LastAccount />
        <Notifications />
      </div>
    </div>
  )
}
