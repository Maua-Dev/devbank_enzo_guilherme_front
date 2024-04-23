// import { FormEvent } from "react";
import { useContext, useState } from "react";
import "../PaginaPrincial/PaginaPrincipal.css";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../../Context/api-context";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const { setApi, api } = useContext(ApiContext);

  console.log(api);

  const handleClick = () => {
    console.log(inputValue.trim());
    if (inputValue.trim() !== "") {
      setApi(inputValue);
      console.log(api);
      navigate("/PaginaConta");
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
          <button className="btn" type="submit" onClick={handleClick}>
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
