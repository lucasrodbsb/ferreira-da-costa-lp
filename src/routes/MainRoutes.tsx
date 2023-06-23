import React from "react";
import { Routes, Route, Navigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop";
import AreaAtuacaoPage from "../pages/AreaAtuacaoPage";
import ClientesPage from "../pages/ClientesPage";
import ContatoPage from "../pages/ContatoPage";
import DetalhesPage from "../pages/DetalhesPage";
import Home from "../pages/Home";
import SobreMimPage from "../pages/SobreMimPage";

const MainRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/clientes" element={<ClientesPage/>} />
            <Route path="/area-atuacao" element={<AreaAtuacaoPage/>} />
            <Route path="/area-atuacao/detalhes/:id" element={<DetalhesPage/>}/>
            <Route path="/sobre-mim" element={<SobreMimPage/>} />
            <Route path="/contato" element={<ContatoPage/>} />
            <Route path="*" element={<Navigate to='/' replace/>}/>
        </Routes>
    )
}

export default MainRoutes