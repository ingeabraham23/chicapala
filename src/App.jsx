// eslint-disable-next-line no-unused-vars
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inventario from "./components/Inventario";
import Ventas from "./components/Ventas";
import Administracion from "./components/Administrar";
import Catalogo from "./components/Catalogo";
import Codigos from "./components/Codigos";
import Kit from "./components/Kit";
import Curso from "./components/Curso";
import TablaCodigos from "./components/TablaCodigos";
import Simbolos from "./components/Simbolos";
import 'react-perfect-scrollbar/dist/css/styles.css';
import GifGallery from "./components/GifGallery";
import TablaRutas from "./components/TablaRutas";
import BitacoraTransporte from "./components/BitacoraTransporte";

function App() {
  return (
    <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Inventario />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/administar" element={<Administracion />} />
            <Route path="/codigos" element={<Codigos />} />
            <Route path="/tabla" element={<TablaCodigos />} />
            <Route path="/simbolos" element={<Simbolos />} />
            <Route path="/kit" element={<Kit />} />
            <Route path="/curso" element={<Curso />} />
            <Route path="/gifs" element={<GifGallery />} />
            <Route path="/rol" element={<TablaRutas />} />
            <Route path="/bitacora" element={<BitacoraTransporte />} />
          </Routes>
        </div>
    </HashRouter>
  );
}

export default App;