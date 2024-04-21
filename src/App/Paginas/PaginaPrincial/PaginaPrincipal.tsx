// import { FormEvent } from "react";
import { useContext, useState } from "react";
import "../PaginaPrincial/PaginaPrincipal.css";
import { Link } from "react-router-dom";
import { ApiContext } from "../../Context/api-context";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");

  const { setApi, api } = useContext(ApiContext)

  console.log(api)
  

  const ButtonLink = () => {
    console.log(inputValue.trim())
    if (inputValue.trim() !== "") {
      setApi(inputValue);
      console.log(api)
      return (
        <Link className="link" to="/PaginaConta">
          <button className="btn" type="submit">
            Entrar
          </button>
        </Link>
      );
    } else {
      return <button className="btn">Entrar</button>;
    }
  };

  return (
    <main className="login_page">
      <div className="container">
        <img
          className="logo"
          src="https://lojaboradecora.com.br/wp-content/uploads/2021/09/por-que-os-cofrinhos-para-moedas-tem-formato-porco-1024x819.jpeg"
          alt="LOGO DO DEVBANK"
        ></img>
        <form className="form">
          <input
            className="input"
            type="string"
            required
            placeholder="Coloque aqui o endpoint da sua API"
            onChange={(event) => setInputValue(event.target.value)}
          ></input>
          <ButtonLink></ButtonLink>
        </form>
      </div>
    </main>
  );
}
