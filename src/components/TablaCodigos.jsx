// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./TablaCodigos.css"; // Asegúrate de importar los estilos

const datos = {
  "OCTUBRE 2024": [
    { fecha: "11-10-2024", codigo: "SE-n12231344", color: "white" },
    { fecha: "28-10-2024", codigo: "SE-n8979088", color: "white" },
  ],
  "NOVIEMBRE 2024": [
    {
      fecha: "11-11-2024",
      codigo: "SE-n5971280",
      color: "#f94e4e",
      numero: "47",
      estado: "ok",
    }, //rojo
    {
      fecha: "11-11-2024",
      codigo: "SE-n6170660",
      color: "#29e8ff",
      numero: "111",
      estado: "ok",
    }, //azul ruta 01
    {
      fecha: "11-11-2024",
      codigo: "SE-n7822076",
      color: "#f94e4e",
      numero: "33",
      estado: "ok",
    }, //rojo
    {
      fecha: "11-11-2024",
      codigo: "SE-n12953232",
      color: "#f94e4e",
      numero: "15",
      estado: "ok",
    }, //rojo
    { fecha: "11-11-2024", codigo: "SE-n15023616", color: "#29e8ff" }, //azul ruta 01
    {
      fecha: "15-11-2024",
      codigo: "SE-n482720",
      color: "#f94e4e",
      numero: "18",
      estado: "ok",
    }, //rojo
    { fecha: "18-11-2024", codigo: "SE-n12259500", color: "#29e8ff" }, //azul
  ],
  "ENERO 2025": [
    { fecha: "13-01-2025", codigo: "SE-n4323804", color: "#29e8ff" }, //azul ruta 01
    {
      fecha: "13-01-2025",
      codigo: "SE-n4368628",
      color: "#f94e4e",
      numero: "28",
      estado: "ok",
    }, //rojo
    {
      fecha: "13-01-2025",
      codigo: "f4a8422a13d8",
      color: "#f94e4e",
      numero: "28",
      estado: "ok",
    }, //rojo
    { fecha: "13-01-2025", codigo: "SE-n4369196", color: "#9cf94e" }, //verde
    {
      fecha: "13-01-2025",
      codigo: "SE-n4545128",
      color: "#f94e4e",
      numero: "27",
      estado: "ok",
    }, //rojo
    { fecha: "21-01-2025", codigo: "SE-n4546448", color: "white" },
    { fecha: "21-01-2025", codigo: "SE-n4548580", color: "white" },
    {
      fecha: "21-01-2025",
      codigo: "SE-n4583552",
      color: "#f94e4e",
      numero: "21",
      estado: "ok",
    }, //rojo
    { fecha: "21-01-2025", codigo: "SE-n4586008", color: "white" },
    { fecha: "21-01-2025", codigo: "SE-n4601152", color: "white" },
  ],
  "FEBRERO 2025": [
    { fecha: "01-02-2025", codigo: "SE-n4381120", color: "#9cf94e" }, //verde
    { fecha: "04-02-2025", codigo: "SE-n4602144", color: "#9cf94e" }, //verde
    {
      fecha: "16-02-2025",
      codigo: "SE-n5533344",
      color: "#9cf94e",
      estado: "ok",
    }, //verde
    {
      fecha: "16-02-2025",
      codigo: "SE-n5557620",
      color: "#29e8ff",
      numero: "34",
      estado: "ok",
    }, //azul ruta 01
    { fecha: "16-02-2025", codigo: "SE-n5569684", color: "white" },
    {
      fecha: "16-02-2025",
      codigo: "SE-n5633544",
      color: "#9cf94e",
      numero: "119",
      estado: "ok",
    }, //verde
    {
      fecha: "16-02-2025",
      codigo: "SE-n5642500",
      color: "#f94e4e",
      numero: "39",
      estado: "ok",
    }, //rojo #39
    { fecha: "16-02-2025", codigo: "SE-n5648864", color: "white" },
    { fecha: "16-02-2025", codigo: "SE-n15216080", color: "white" },
    {
      fecha: "18-02-2025",
      codigo: "SE-n5571816",
      color: "linear-gradient(to bottom, red, white, green)",
      numero: "23",
      estado: "ok",
    }, //Ruta 03
    {
      fecha: "20-02-2025",
      codigo: "SE-n5638324",
      color: "#f94e4e",
      numero: "30",
      estado: "ok",
    }, //rojo
  ],
  "MARZO 2025": [
    { fecha: "11-03-2025", codigo: "SE-n5556232", color: "#29e8ff" }, //azul ruta 01
    { fecha: "12-03-2025", codigo: "SE-n4546408", color: "white" },
    { fecha: "12-03-2025", codigo: "SE-n4582240", color: "white" },
    { fecha: "12-03-2025", codigo: "SE-n4602448", color: "white" },
    {
      fecha: "12-03-2025",
      codigo: "SE-n5537304",
      color: "#f94e4e",
      numero: "20",
      estado: "0k",
    }, //rojo
    {
      fecha: "12-03-2025",
      codigo: "SE-n5628772",
      color: "linear-gradient(to bottom, #730202, white, #fff377)",
      numero: "88",
      estado: "HD",
    }, //Ruta 02 88
    { fecha: "17-03-2025", codigo: "SE-n5558608", color: "#9cf94e" }, //verde
    {
      fecha: "17-03-2025",
      codigo: "SE-n5595484",
      color: "#29e8ff",
      numero: "145",
      estado: "ok",
    }, //azul ruta 01
    {
      fecha: "17-03-2025",
      codigo: "SE-n5614692",
      color: "#f94e4e",
      numero: "46",
      estado: "ok",
    }, //rojo
    { fecha: "17-03-2025", codigo: "SE-n5638244", color: "#9cf94e" }, //verde
    { fecha: "17-03-2025", codigo: "SE-n5654852", color: "#9cf94e" }, //verde
    { fecha: "17-03-2025", codigo: "SE-n5658184", color: "#9cf94e" }, //verde
    {
      fecha: "25-03-2025",
      codigo: "SE-n5535508",
      color: "linear-gradient(to bottom, red, white, green)",
      numero: "C22",
      estado: "ok",
    }, //Ruta 03 C22
    { fecha: "25-03-2025", codigo: "SE-n5578236", color: "white" },
    { fecha: "25-03-2025", codigo: "SE-n5623036", color: "#9cf94e" }, //verde
    { fecha: "25-03-2025", codigo: "SE-n5637340", color: "white" },
    { fecha: "25-03-2025", codigo: "SE-n5657716", color: "white" },
  ],

  "ABRIL 2025": [
    { fecha: "11-04-2025", codigo: "SE-n4552956", color: "white" },
    { fecha: "11-04-2025", codigo: "SE-n4583752", color: "white" },
    { fecha: "11-04-2025", codigo: "SE-n4601216", color: "white" },
    { fecha: "11-04-2025", codigo: "SE-n5564844", color: "white" },
    { fecha: "11-04-2025", codigo: "SE-n5621068", color: "white" },
    {
      fecha: "11-04-2025",
      codigo: "SE-n5651885",
      color: "white",
      numero: "fer",
      estado: "ok",
    },
    { fecha: "29-04-2025", codigo: "SE-n4583360", color: "white" },
    {
      fecha: "29-04-2025",
      codigo: "SE-n5541544",
      color: "#9cf94e",
      numero: "209",
      estado: "ok",
    }, //verde 209
    { fecha: "29-04-2025", codigo: "SE-n5564124", color: "white" },
    { fecha: "29-04-2025", codigo: "SE-n6582384", color: "white" },
    { fecha: "29-04-2025", codigo: "SE-n6672384", color: "white" },
    { fecha: "29-04-2025", codigo: "SE-n13006992", color: "white" },
    {
      fecha: "29-04-2025",
      codigo: "SE-n14524944",
      color: "linear-gradient(to bottom, red, white, green)",
      numero: "62",
      estado: "ok",
    }, //Ruta 03 62
  ],

  "MAYO 2025": [
    { fecha: "13-05-2025", codigo: "4cf33c004f8c", color: "white" },
    { fecha: "13-05-2025", codigo: "6c5164a84320", color: "white" },
    {
      fecha: "13-05-2025",
      codigo: "40ab65a84320",
      color: "#29e8ff",
      numero: "138",
      estado: "ok",
    }, //azul ruta 01
    { fecha: "13-05-2025", codigo: "507f64a84320", color: "white" },
    { fecha: "13-05-2025", codigo: "a07f2765b7a0", color: "white" },
    { fecha: "13-05-2025", codigo: "b826550b65f4", color: "white" },
    { fecha: "13-05-2025", codigo: "d8d165a84320", color: "white" },

    { fecha: "27-05-2025", codigo: "1c0ac92f2b14", color: "white" },
    { fecha: "27-05-2025", codigo: "507365a84320", color: "white" },
    { fecha: "27-05-2025", codigo: "985565a84320", color: "white" },
    { fecha: "27-05-2025", codigo: "d4f364a84320", color: "white" },
    {
      fecha: "27-05-2025",
      codigo: "f870dd895dc0",
      color: "#f94e4e",
      numero: "47",
      estado: "ok",
    }, //rojo
  ],

  "JUNIO 2025": [
    {
      fecha: "09-06-2025", codigo: "2c6b2c65b7a0", color: "#9cf94e",
      estado: "ok",
    }, //verde
    { fecha: "09-06-2025", codigo: "2c7a64a84320", color: "white" },
    {
      fecha: "09-06-2025",
      codigo: "2cd864a84320",
      color: "#9cf94e",
      estado: "ok",
    }, //verde
    { fecha: "09-06-2025", codigo: "3ce02b65b7a0", color: "white" },
    { fecha: "09-06-2025", codigo: "4c6ddd895dc0", color: "orange" },
    {
      fecha: "09-06-2025",
      codigo: "585e45c3dc24",
      color: "linear-gradient(to bottom, red, white, green)",
      numero: "73",
      estado: "ok",
    }, //Ruta 03 C17
    { fecha: "09-06-2025", codigo: "089664a84320", color: "white" },
    { fecha: "13-06-2025", codigo: "209e65a84320", color: "white" }, //lO TIENE ABRAHAM VIERNES 20 DE JUNIO
    { fecha: "13-06-2025", codigo: "306c64a84320", color: "white" },
    { fecha: "13-06-2025", codigo: "084764a84320", color: "white" },
    {
      fecha: "13-06-2025",
      codigo: "b4b665a84320",
      color: "linear-gradient(to bottom, red, white, green)",
      numero: "C17",
      estado: "ok",
    }, //Ruta 03 C17
    { fecha: "13-06-2025", codigo: "bcaedc895dc0", color: "white" },
    {
      fecha: "13-06-2025",
      codigo: "c4c564a84320",
      color: "linear-gradient(to bottom, red, white, green)",
      numero: "53",
      estado: "ok",
    }, //Ruta 03 C17
    { fecha: "13-06-2025", codigo: "c83546c3dc24", color: "white" },
    {
      fecha: "16-06-2025",
      codigo: "5527248",
      color: "#29e8ff",
      numero: "51",
      estado: "ok",
    }, //azul ruta 01
    { fecha: "16-06-2025", codigo: "5607896", color: "#29e8ff", estado: "ok" }, //azul ruta 01
    { fecha: "19-06-2025", codigo: "4550136", color: "#9cf94e", estado: "ok" }, //verde

    { fecha: "25-06-2025", codigo: "8cddf6641d44", color: "white" },
    { fecha: "25-06-2025", codigo: "14b0bc641d44", color: "white" },
    { fecha: "25-06-2025", codigo: "40fcbd641d44", color: "white" },
    { fecha: "25-06-2025", codigo: "48c0f6641d44", color: "white" },
    { fecha: "25-06-2025", codigo: "0890bc641d44", color: "white" },
    { fecha: "25-06-2025", codigo: "6091bc641d44", color: "#9cf94e", estado: "ok" }, //verde
    { fecha: "25-06-2025", codigo: "8429bd641d44", color: "white" },
    { fecha: "25-06-2025", codigo: "dce5f6641d44", color: "white" },
    { fecha: "25-06-2025", codigo: "e8afbc641d44", color: "white" },
    { fecha: "25-06-2025", codigo: "fcb2f6641d44", color: "white" },
    {
      fecha: "25-06-2025",
      codigo: "34bc64a84320",
      color: "#29e8ff",
      estado: "ok",
    }, //azul ruta 01 Ferxxos #138
  ],

  "JULIO 2025": [
    { fecha: "01-07-2025", codigo: "ac10bb57ddc4", color: "#9cf94e", numero: "198", estado: "ok" }, //verde
    { fecha: "04-07-2025", codigo: "4549032", color: "#29e8ff", estado: "ok" }, //azul ruta 01 Gabriel bandala
    { fecha: "10-07-2025", codigo: "2ca4bc641d44", color: "white" },
    {
      fecha: "10-07-2025",
      codigo: "6c3e64a84320",
      color: "linear-gradient(to bottom, red, white, green)",
      numero: "60",
      estado: "ULTRA",
    }, //Ruta 03 60
    { fecha: "10-07-2025", codigo: "344ef6641d44", color: "white" },
    { fecha: "10-07-2025", codigo: "9095bc641d44", color: "white" },
    {
      fecha: "10-07-2025",
      codigo: "a85ef6641d44",
      color: "linear-gradient(to bottom, red, white, green)",
      numero: "22",
      estado: "ok",
    }, //Ruta 03 22
    { fecha: "10-07-2025", codigo: "d4f9bd641d44", color: "white" },
    { fecha: "10-07-2025", codigo: "d402be641d44", color: "white" },
    { fecha: "29-07-2025", codigo: "5586992", color: "white" },
  ],

  "AGOSTO 2025": [
    { fecha: "07-08-2025", codigo: "3cc11dab4c24", color: "white" },
    { fecha: "07-08-2025", codigo: "6c3e64a84320r", color: "white" },
    { fecha: "07-08-2025", codigo: "048ebc641d44", color: "white" },
    { fecha: "07-08-2025", codigo: "cce0540b65f4", color: "white" },
    { fecha: "07-08-2025", codigo: "dcf9412a13d8", color: "white" },

    {
      fecha: "15-08-2025", codigo: "0c390486e694", color: "linear-gradient(to bottom, red, white, green)",
      numero: "22",
      estado: "ok",
    }, //Ruta 03 65
    { fecha: "15-08-2025", codigo: "80ed540b65f4", color: "#29e8ff", estado: "ok" }, //Ruta 01 84
    {
      fecha: "15-08-2025", codigo: "fc5a77cd31e8", color: "#f94e4e",
      numero: "47",
      estado: "ok",
    }, //rojo 47
    {
      fecha: "19-08-2025", codigo: "10afbc641d44", color: "#f94e4e",
      numero: "30",
      estado: "ok", }, // ROJO 30
    { fecha: "19-08-2025", codigo: "18aabc641d44", color: "white", estado: "ok" }, //
  ],

  "SEPTIEMBRE 2025": [
    { fecha: "05-09-2025", codigo: "4545292", color: "#9cf94e", estado: "ok" }, //verde
    { fecha: "09-09-2025", codigo: "a810be641d44", color: "#f94e4e", numero: "20", estado: "ok" },

    { fecha: "23-09-2025", codigo: "ac7fbd641d44", color: "#29e8ff", numero: "153", estado: "ok" }, //Ruta 01 153

    { fecha: "23-09-2025", codigo: "c8b1bc641d44", color: "white" },

    { fecha: "23-09-2025", codigo: "e88cbc641d44", color: "#fbff00ff" }, //PASAJERA

    { fecha: "25-09-2025", codigo: "3806be641d44", color: "#ff0000ff", numero: "38", estado: "12832" },// ROJO

  ],

  "OCTUBRE 2025": [
    { fecha: "24-10-2025", codigo: "9423be641d44", color: "#9cf94e", estado: "ok" }, //verde
  ],

  "NOVIEMBRE 2025": [
    { fecha: "17-11-2025", codigo: "c880bd641d44", color: "#29e8ff", estado: "6416" },
    { fecha: "17-11-2025", codigo: "d0c9f6641d44", color: "white", estado: "6416" },
    { fecha: "17-11-2025", codigo: "e09dbd641d44", color: "#29e8ff", estado: "6416" },
    { fecha: "30-11-2025", codigo: "94e2f6641d44", color: "linear-gradient(to bottom, red, white, green)", numero: "99", estado: "12832" }, //RUTA 3
    { fecha: "30-11-2025", codigo: "5433be641d44", color: "#29e8ff", numero: "138", estado: "12832" }, //RUTA 01

  ],


};

const TablaCodigos = () => {
  const [filtroCodigo, setFiltroCodigo] = useState("");
  const [filtroFecha, setFiltroFecha] = useState("");
  let indexGlobal = 1;

  const filtrarDatos = (items) =>
    items.filter((item) => {
      const coincideCodigo = item.codigo
        .toLowerCase()
        .includes(filtroCodigo.toLowerCase());
      const coincideFecha = item.fecha.includes(filtroFecha);
      return coincideCodigo && coincideFecha;
    });

  return (
    <div className="tabla-container">
      <h2 className="tabla-titulo">Listado de Códigos</h2>

      <div className="filtros">
        <input
          type="text"
          placeholder="Filtrar por código"
          value={filtroCodigo}
          onChange={(e) => setFiltroCodigo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fecha (dd-mm-aaaa)"
          value={filtroFecha}
          onChange={(e) => setFiltroFecha(e.target.value)}
        />
      </div>

      {Object.keys(datos).map((mes) => {
        const datosFiltrados = filtrarDatos(datos[mes]);
        if (datosFiltrados.length === 0) return null;

        return (
          <div key={mes} className="mes-container">
            <h3 className="mes-titulo">{mes}</h3>
            <table className="tabla">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Fecha</th>
                  <th>Código</th>
                  <th>#</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {datosFiltrados.map((item) => (
                  <tr key={indexGlobal}>
                    <td className="celda-contador">{indexGlobal++}</td>
                    <td className="celda-fecha">{item.fecha}</td>
                    <td style={{ background: item.color }}>{item.codigo}</td>
                    <td style={{ background: item.color }}>{item.numero}</td>
                    <td style={{ background: item.color }}>{item.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default TablaCodigos;
