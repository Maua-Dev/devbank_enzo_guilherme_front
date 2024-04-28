import { TransactionContextType } from "../../Context/api-context";
import "./TransacoesC.css";

interface Props {
  transacao: TransactionContextType;
}

export default function TransacaoCard({ transacao }: Props) {
  const handleType = (type: string) => {
    if (type == "withdraw") {
      return "red";
    } else {
      return "green";
    }
  };

  console.log(transacao);
  const date = new Date(transacao.timestamp);
  return (
    <div className="transacao">
      <div
        className="tipo"
        style={{ "backgroundColor": handleType(transacao.type) }}
      >
        <p>{transacao.type == "deposit" ? 'Deposito': "Saque"}</p>
      </div>
      <div className="transacao2">
        <div className="transacao3">
          <p>VALOR:</p>
          <p>R$ {transacao.value}</p>
        </div>
        <div className="transacao4">
          <p>DATA:</p>
          <p>{date.toLocaleString()}</p>
        </div>
        <div className="transacao5">
            <p>Saldo:</p>
            <p>R$ {transacao.current_balance}</p>
        </div>
      </div>
    </div>
  );
}