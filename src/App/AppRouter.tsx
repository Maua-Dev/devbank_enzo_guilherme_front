import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPrincipal from "../App/Paginas/PaginaPrincial/PaginaPrincipal";
import PaginaConta from "./Paginas/PaginaConta/PaginaConta";
import Deposito from "./Paginas/Deposito/Deposito";
import Transações from "./Paginas/Transações/Transações"; 

export default function AppRouter() {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<PaginaPrincipal />} />
                <Route path="/PaginaConta" element={<PaginaConta />}/>
                <Route path="/PaginaConta/Deposito" element={<Deposito />}/>
                <Route path="/PaginaConta/Transações" element={<Transações />}/>
            </Routes>
        </BrowserRouter>
    )
}