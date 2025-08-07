import React, { useState } from "react";
import { format, addDays, parse } from "date-fns";
import { es } from "date-fns/locale";
import "./TablaRutas.css";

// 🔹 Definición de roles por unidad (cada una con su fecha de inicio)
const rolesPorUnidad = {
  138: {
    inicio: "2025-07-25",
    rol: [
      { ruta: "Sección 23", dias: 4 },
      { ruta: "Atoluca", dias: 3 },
      { ruta: "San Salvador", dias: 2 },
      { ruta: "Ixtlahuaca", dias: 1 },
      { ruta: "Huehueymico", dias: 2 },
      { ruta: "Espíritu Santo", dias: 1 },
      { ruta: "San Miguel", dias: 2 },
      { ruta: "Ayotzingo", dias: 4 },
      { ruta: "Atoluca", dias: 1 },
      { ruta: "Cipreces", dias: 4 },
      { ruta: "Infonavit", dias: 3 },
    ],
  },
  129: {
    inicio: "2025-07-30", // 👈 ejemplo, unidad 139 arranca en otra fecha
    rol: [
      { ruta: "Ayotzingo", dias: 4 },
      { ruta: "Atoluca", dias: 1 },
      { ruta: "Cipreces", dias: 3 },
      { ruta: "Infonavit", dias: 3 },
      { ruta: "Sección 23", dias: 4 },
      { ruta: "Atoluca", dias: 3 },
      { ruta: "San Salvador", dias: 2 },
      { ruta: "Ixtlahuaca", dias: 2 },
      { ruta: "Huehueymico", dias: 2 },
      { ruta: "San Miguel", dias: 3 },
    ],
  },

  45: {
    inicio: "2025-08-02", // 👈 ejemplo, unidad 139 arranca en otra fecha
    rol: [
      
      { ruta: "Sección 23", dias: 5 },
      { ruta: "Atoluca", dias: 3 },
      { ruta: "San Salvador", dias: 2 },
      { ruta: "Ixtlahuaca", dias: 2 },
      { ruta: "Huehueymico", dias: 1 },
      { ruta: "Espíritu Santo", dias: 1 },
      { ruta: "San Miguel", dias: 2 },
      { ruta: "Ayotzingo", dias: 4 },
      { ruta: "Cipreces", dias: 3 },
      { ruta: "Infonavit", dias: 4 },
    ],
  },

  51: {
    inicio: "2025-08-03", // 👈 ejemplo, unidad 139 arranca en otra fecha
    rol: [
      { ruta: "Ayotzingo", dias: 4 },
      { ruta: "Cipreces", dias: 3 },
      { ruta: "Infonavit", dias: 4 },
      { ruta: "Sección 23", dias: 5 },
      { ruta: "Atoluca", dias: 3 },
      { ruta: "San Salvador", dias: 1 },
      { ruta: "Ixtlahuaca", dias: 2 },
      { ruta: "Huehueymico", dias: 2 },
      { ruta: "Espíritu Santo", dias: 1 },
      { ruta: "San Miguel", dias: 2 },
      
    ],
  },

  75: {
    inicio: "2025-08-07", // 👈 ejemplo, unidad 139 arranca en otra fecha
    rol: [
      { ruta: "Infonavit", dias: 4 },
      { ruta: "Sección 23", dias: 5 },
      { ruta: "Atoluca", dias: 3 },
      { ruta: "San Salvador", dias: 1 },
      { ruta: "Ixtlahuaca", dias: 2 },
      { ruta: "Huehueymico", dias: 2 },
      { ruta: "Espíritu Santo", dias: 1 },
      { ruta: "San Miguel", dias: 2 },
      { ruta: "Ayotzingo", dias: 4 },
      { ruta: "Cipreces", dias: 3 },
    ],
  },

  113: {
    inicio: "2025-08-02", // 👈 ejemplo, unidad 139 arranca en otra fecha
    rol: [
      { ruta: "San Salvador", dias: 2 },
      { ruta: "Ixtlahuaca", dias: 2 },
      { ruta: "Huehueymico", dias: 2 },
      { ruta: "San Miguel", dias: 3 },
      { ruta: "Ayotzingo", dias: 4 },
      { ruta: "Atoluca", dias: 1 },
      { ruta: "Cipreces", dias: 3 },
      { ruta: "Infonavit", dias: 3 },
      { ruta: "Sección 23", dias: 4 },
      { ruta: "Atoluca", dias: 3 },
    ],
  },

  93: {
    inicio: "2025-07-31", // 👈 ejemplo, unidad 139 arranca en otra fecha
    rol: [
      { ruta: "Ayotzingo", dias: 7 },
      { ruta: "Paraíso", dias: 10 },
    ],
  },

};

// Mapa ruta -> clase de color
const rutaClases = {
  "Sección 23": "ruta-seccion-23",
  "Atoluca": "ruta-atoluca",
  "San Salvador": "ruta-san-salvador",
  "Ixtlahuaca": "ruta-ixtlahuaca",
  "Huehueymico": "ruta-huehueymico",
  "Espíritu Santo": "ruta-espiritu",
  "San Miguel": "ruta-san-miguel",
  "Ayotzingo": "ruta-ayotzingo",
  "Cipreces": "ruta-cipreces",
  "Infonavit": "ruta-infonavit"
};

const TablaRutas = () => {
  const hoy = new Date();
  const [unidadSeleccionada, setUnidadSeleccionada] = useState("138");

  // 🔹 Generar calendario según unidad
  const generarRutas = (unidad) => {
    const { inicio, rol } = rolesPorUnidad[unidad];
    const fechaInicio = parse(inicio, "yyyy-MM-dd", new Date());

    const dias = [];
    let fecha = new Date(fechaInicio);
    let i = 0;

    while (dias.length < 100) {
      const { ruta, dias: cantidad } = rol[i % rol.length];
      for (let j = 0; j < cantidad; j++) {
        dias.push({ fecha: new Date(fecha), ruta });
        fecha = addDays(fecha, 1);
      }
      i++;
    }
    return dias;
  };

  const todasLasRutas = generarRutas(unidadSeleccionada);

  const rutasFiltradas = todasLasRutas.filter(({ fecha }) => {
    const diferencia = (fecha - hoy) / (1000 * 60 * 60 * 24);
    return diferencia >= -5 && diferencia <= 30;//poner cuantos dias muestre hacia atras de la fecha inicial y cuantos dias adelante
  });

  const rutasPorMes = rutasFiltradas.reduce((acc, item) => {
    const mesClave = format(item.fecha, "MMMM yyyy", { locale: es });
    if (!acc[mesClave]) acc[mesClave] = [];
    acc[mesClave].push(item);
    return acc;
  }, {});

  return (
    <div className="rol-container">
      <h2 className="titulo-principal">Rol de Rutas por Unidad</h2>
      {/* 🔹 Selector de unidad */}
      <div className="unidad-selector">
        <label>Seleccionar unidad: </label>
        <select
          value={unidadSeleccionada}
          onChange={(e) => setUnidadSeleccionada(e.target.value)}
        >
          {Object.keys(rolesPorUnidad).map((unidad) => (
            <option key={unidad} value={unidad}>
              Unidad {unidad}
            </option>
          ))}
        </select>
      </div>

      {/* 🔹 Renderizado de la tabla */}
      {Object.entries(rutasPorMes).map(([mes, items]) => {
        const mitad = Math.ceil(items.length / 2);
        const izquierda = items.slice(0, mitad);
        const derecha = items.slice(mitad);

        return (
          <div key={mes} className="mes-seccion">
            <h3 className="unidad-titulo">Unidad Numero: {unidadSeleccionada}</h3>
            <h3 className="mes-titulo">
              {mes.charAt(0).toUpperCase() + mes.slice(1)}
            </h3>
            <div className="columnas-container">
              <div className="columna">
                <table className="tabla-rutas">
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Ruta</th>
                    </tr>
                  </thead>
                  <tbody>
                    {izquierda.map(({ fecha, ruta }, idx) => {
                      const esHoy =
                        format(fecha, "yyyy-MM-dd") ===
                        format(hoy, "yyyy-MM-dd");
                      return (
                        <tr
                          key={idx}
                          className={`${rutaClases[ruta] || ""} ${esHoy ? "hoy" : ""
                            }`}
                        >
                          <td>{format(fecha, "EEE d", { locale: es })}</td>
                          <td className="celda-ruta">{ruta}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="columna">
                <table className="tabla-rutas">
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Ruta</th>
                    </tr>
                  </thead>
                  <tbody>
                    {derecha.map(({ fecha, ruta }, idx) => {
                      const esHoy =
                        format(fecha, "yyyy-MM-dd") ===
                        format(hoy, "yyyy-MM-dd");
                      return (
                        <tr
                          key={idx}
                          className={`${rutaClases[ruta] || ""} ${esHoy ? "hoy" : ""
                            }`}
                        >
                          <td>{format(fecha, "EEE d", { locale: es })}</td>
                          <td className="celda-ruta">{ruta}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TablaRutas;
