import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../App/Paginas/PaginaPrincial/PaginaPrincipal";
import HomePage from "../App/Paginas/PaginasHome/PaginaHome";

export default function AppRouter() {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/HomePage" element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    )
}