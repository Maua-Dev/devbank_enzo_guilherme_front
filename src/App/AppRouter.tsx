import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPrincipal from "../App/Paginas/PaginaPrincial/PaginaPrincipal";
import PaginaConta from "./Paginas/PaginaConta/PaginaConta";
import Deposito from "./Paginas/Deposito/Deposito"; 
// import Retirada from "./Paginas/PaginaConta/PaginaConta"; 

export default function AppRouter() {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<PaginaPrincipal />} />
                <Route path="/PaginaConta" element={<PaginaConta />}/>
                <Route path="/PaginaConta/Deposito" element={<Deposito />}/>
            </Routes>
        </BrowserRouter>
    )
}