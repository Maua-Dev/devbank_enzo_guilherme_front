import { useContext, useEffect } from "react";
import "./PaginaConta.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Ficha from "../Interface/Ficha";
import { ApiContext } from "../../Context/api-context";
import HeaderGeral from "../Interface/headergeral";

export default function MainPage() {
  const {
    setName,
    setAccount,
    setAgency,
    setCredito,
    api,
    name,
    account,
    agency,
    credito,
  } = useContext(ApiContext);

  const requestApi = async () => {
    const response = await axios.get(api);
    setAgency(response.data.agency);
    setName(response.data.name);
    setAccount(response.data.account);
    setCredito(response.data.current_balance);
  };

  useEffect(() => {
    requestApi();
  }, []);

  return (
    <main className="home_page">
      <HeaderGeral name={name} account={account} agency={agency} />
      <div className="top_box">
        <p className="text">O que deseja fazer?</p>
        <div className="right_box">
          <p className="right_text">Saldo: R$ {credito}</p>
        </div>
      </div>
      <div className="middle">
        <Ficha Page="/PaginaConta/Deposito" text="Depositar"></Ficha>
        <Ficha Page="/PaginaConta/Retirada" text="Sacar"></Ficha>
        <Ficha Page="/PaginaConta/Transações" text="Transações"></Ficha>
      </div>
      <div>
        <Link to={"/"}>
          <button className="button">Inicio</button>
        </Link>
      </div>
    </main>
  );
}
