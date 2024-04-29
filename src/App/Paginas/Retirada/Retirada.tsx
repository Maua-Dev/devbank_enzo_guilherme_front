import { useContext, useState } from "react";
import "../Deposito/Deposito.css";
import { ApiContext } from "../../Context/api-context";
import HeaderGeral from "../Interface/headergeral";
import axios from "axios";

export default function DepositPage() {
  const { name, account, agency, credito, api, setCredito } =
    useContext(ApiContext);
  const [notas2, setnotas2] = useState(0);
  const [notas5, setnotas5] = useState(0);
  const [notas10, setnotas10] = useState(0);
  const [notas20, setnotas20] = useState(0);
  const [notas50, setnotas50] = useState(0);
  const [notas100, setnotas100] = useState(0);
  const [notas200, setnotas200] = useState(0);

  const requestapi = async () => {
    const response = await axios.post(api + "/withdraw", {
      "2": notas2,
      "5": notas5,
      "10": notas10,
      "20": notas20,
      "50": notas50,
      "100": notas100,
      "200": notas200,
    });
    console.log(response);
    setCredito(response.data.current_balance);
  };

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
        <button
          className="button2"
          onClick={notas2 > 0 ? () => setnotas2(notas2 - 1) : () => {}} //jogar nas outras linhas
        >
          -
        </button>
        <h1 className="button2_middle">{notas2}</h1>
        <button className="button2_1" onClick={() => setnotas2(notas2 + 1)}>
          +
        </button>

        <h1 className="box5">
          <span className="smaller">R$</span>5
        </h1>
        <button
          className="button5"
          onClick={notas5 > 0 ? () => setnotas5(notas5 - 1) : () => {}}
        >
          -
        </button>
        <h1 className="button5_middle">{notas5}</h1>
        <button className="button5_1" onClick={() => setnotas5(notas5 + 1)}>
          +
        </button>

        <h1 className="box10">
          <span className="smaller">R$</span>10
        </h1>
        <button
          className="button10"
          onClick={notas10 > 0 ? () => setnotas10(notas10 - 1) : () => {}}
        >
          -
        </button>
        <h1 className="button10_middle">{notas10}</h1>
        <button className="button10_1" onClick={() => setnotas10(notas10 + 1)}>
          +
        </button>

        <h1 className="box20">
          <span className="smaller">R$</span>20
        </h1>
        <button
          className="button20"
          onClick={notas20 > 0 ? () => setnotas20(notas20 - 1) : () => {}}
        >
          -
        </button>
        <h1 className="button20_middle">{notas20}</h1>
        <button className="button20_1" onClick={() => setnotas20(notas20 + 1)}>
          +
        </button>

        <h1 className="box50">
          <span className="smaller">R$</span>50
        </h1>
        <button
          className="button50"
          onClick={notas50 > 0 ? () => setnotas50(notas50 - 1) : () => {}}
        >
          -
        </button>
        <h1 className="button50_middle">{notas50}</h1>
        <button className="button50_1" onClick={() => setnotas50(notas50 + 1)}>
          +
        </button>

        <h1 className="box100">
          <span className="smaller">R$</span>100
        </h1>
        <button
          className="button100"
          onClick={notas100 > 0 ? () => setnotas100(notas100 - 1) : () => {}}
        >
          -
        </button>
        <h1 className="button100_middle">{notas100}</h1>
        <button
          className="button100_1"
          onClick={() => setnotas100(notas100 + 1)}
        >
          +
        </button>

        <h1 className="box200">
          <span className="smaller">R$</span>200
        </h1>
        <button
          className="button200"
          onClick={notas200 > 0 ? () => setnotas200(notas200 - 1) : () => {}}
        >
          -
        </button>
        <h1 className="button200_middle">{notas200}</h1>
        <button
          className="button200_1"
          onClick={() => setnotas200(notas200 + 1)}
        >
          +
        </button>
        <button className="Deposit_button" onClick={requestapi}>
          Depositar
        </button>
      </div>
    </main>
  );
}
