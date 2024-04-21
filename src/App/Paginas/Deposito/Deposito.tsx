import { useContext } from "react";
import "../Deposito/Deposito.css";
import { ApiContext } from "../../Context/api-context";
import HeaderGeral from "../Interface/headergeral";

export default function DepositPage() {
    const {
      name,
      account,
      agency,
      credito
    } = useContext(ApiContext);
  
  
  
    return (
      <main className="deposit_page">
        <HeaderGeral name={name} account={account} agency={agency}/>
        <div className="deposit_top_box">
          <div className="left_box">
            <p className="left_text">Saldo atual: R$ {credito}</p>
          </div>
          <p className="deposit_right_text">Quantidade sacada: R$ </p>
        </div>
      </main>
    );
}
