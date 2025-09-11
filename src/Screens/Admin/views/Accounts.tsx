import { Search } from "lucide-react";
import { PopAccount } from "../components/PopAccount";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { CreateAccountModal } from "@/components/modals/CreateAccountModal";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../FirebaseConfig"; // <-- importa o db certo!

type Account = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  type?: string;
};

export default function Accounts() {
  const [enable_modal, modal_state] = useState<"NewUser" | null>(null);
  const [accounts_in_db, update_accounts] = useState<Account[]>([]);

  useEffect(() => {
    async function getUsers() {
      const snapshot = await getDocs(collection(db, "accounts"));
      const data: Account[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Account, "id">),
      }));
      update_accounts(data);
    }

    getUsers();
  }, [accounts_in_db]);

  return (
    <div className="text-white w-full h-full flex justify-center items-start">
      <div className="w-[95%] justify-center flex items-end h-full">
        <div className="bg-phantom-night flex flex-col w-full p-2.5 gap-2 h-full border justify-center border-graphite-shadow rounded-md">
          <div className="flex items-center justify-center gap-1.5">
            <div className="flex rounded-md w-full gap-2 h-fit bg-black/30 items-center justify-start p-2.5">
              <Search size={32} />
              <input
                type="text"
                placeholder="Pesquisar Usuários: ID, Email, Nome..."
                className="outline-none w-full h-full"
              />
            </div>
            <Button
              onClick={() => modal_state("NewUser")}
              className="bg-abyssal-emerald hover:bg-abyssal-emerald/40 border hover:border-verdant-rite/40 hover:cursor-pointer border-verdant-rite h-full"
            >
              Cadastrar novo Usuário
            </Button>
          </div>

          <div className="flex items-center py-1.5 gap-1.5 justify-start">
            <h1 className="text-xl text-silver-dusk font-Poppins font-bold">
              Lista de Usuários
            </h1>
          </div>

          <div className="overflow-y-auto w-full border h-full border-silver-dusk rounded-md flex flex-col p-2.5 gap-2.5">
            {accounts_in_db.map((acc) => (
              <PopAccount
                key={acc.id}
                account_name={acc.name}
                account_email={acc.email}
                account_type='full'
              />
            ))}

            <CreateAccountModal
              open_modal={enable_modal === "NewUser"}
              on_close={() => modal_state(null)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
