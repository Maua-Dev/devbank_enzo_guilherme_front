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
      <div className="deposit_values">
        <h1 className="box2">
          <span className="smaller">R$</span>2
        </h1>
        <button className="button2">-</button>
        <button className="button2_1">+</button>

        <h1 className="box5">
          <span className="smaller">R$</span>5
        </h1>
        <button className="button5">-</button>
        <button className="button5_1">+</button>

        <h1 className="box10">
          <span className="smaller">R$</span>10
        </h1>
        <button className="button10">-</button>
        <button className="button10_1">+</button>

        <h1 className="box20">
          <span className="smaller">R$</span>20
        </h1>
        <button className="button20">-</button>
        <button className="button20_1">+</button>

        <h1 className="box50">
          <span className="smaller">R$</span>50
        </h1>
        <button className="button50">-</button>
        <button className="button50_1">+</button>

        <h1 className="box100">
          <span className="smaller">R$</span>100
        </h1>
        <button className="button100">-</button>
        <button className="button100_1">+</button>

        <h1 className="box200">
          <span className="smaller">R$</span>200
        </h1>
        <button className="button200">-</button>
        <button className="button200_1">+</button>
      </div>
    </main>
  );
}
