import { useContext, useEffect, useState } from "react";
import Header from "../Interface/headergeral";
import { ApiContext, TransactionContextType } from "../../Context/api-context";
import "../Transações/Transações.css"
import axios from "axios";
import TransacoesC from "../Interface/TransacoesC";
import { Link } from "react-router-dom";

export default function Transacao() {

    const {name, agency, account, api} = useContext(ApiContext)
    const [transactionsArray, setTransactionsArray] = useState<TransactionContextType[]>([]);

    const requestApi = async () => {
        const response = await axios.get(`${api}/history`);
         setTransactionsArray(response.data.all_transactions);
         console.log(response.data)
         console.log(transactionsArray)
         
      };
      
    useEffect(() => {
        requestApi();
    }, []);

    return (
        <main className="transacaoPagina">
            <Header name={name} agency={agency} account={account}></Header>
            <div className="transacaoPagina2">
                <p>Histórico de transações</p>
            </div>
            <div className="transacaoPagina3">
                {
                    transactionsArray !== undefined ? transactionsArray.map((transacao) => {
                        console.log(transactionsArray)
                        return (
                            <TransacoesC transacao={transacao}></TransacoesC>
                        );
                     }) : null
                }
            </div>
            <div>
                <Link to= '/PaginaConta'>
                    <button className="transacaoPagina4">Voltar</button>
                </Link>
            </div>
        </main>
    )
}
