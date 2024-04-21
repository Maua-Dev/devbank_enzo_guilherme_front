import "../Interface/headergeral.css"

interface Props {
    name : string;
    agency : string;
    account : string;
}

export default function Header({name, agency, account} : Props) {
    return (
        <div className="header">
        <div className="info">
          <p className="text_p">Nome: {name}</p>
          <p className="text_p">Agência: {agency}</p>
          <p className="text_p">Conta: {account}</p>
        </div>
      </div>
    )
}