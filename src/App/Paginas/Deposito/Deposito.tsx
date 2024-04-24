import { useContext } from "react";
import "../Deposito/Deposito.css";
import { ApiContext } from "../../Context/api-context";
import HeaderGeral from "../Interface/headergeral";

export default function DepositPage() {
  const { name, account, agency, credito } = useContext(ApiContext);

  return (
    <main className="deposit_page">
      <HeaderGeral name={name} account={account} agency={agency} />
      <div className="deposit_top_box">
        <p className="top_text left">Saldo atual: R$ {credito}</p>
        <p className="top_text right">Quantidade sacada: R$ </p>
      </div>
      <div className="usage_position">
        <h1 className="usage_explanation">
          Selecione as cédulas e a quantidade que você deseja
        </h1>
      </div>
    </main>
  );
}
