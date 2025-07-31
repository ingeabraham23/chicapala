import React from "react";
import { format, addDays, parse } from "date-fns";
import { es } from "date-fns/locale";
import "./TablaRutas.css";

const rol = [
  
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
];

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

const Rol129 = () => {
  const hoy = new Date();
  const inicioRol = parse("2025-07-30", "yyyy-MM-dd", new Date());

  const generarRutas = () => {
    const dias = [];
    let fecha = new Date(inicioRol);
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

  const todasLasRutas = generarRutas();

  const rutasFiltradas = todasLasRutas.filter(({ fecha }) => {
    const diferencia = (fecha - hoy) / (1000 * 60 * 60 * 24);
    return diferencia >= -10 && diferencia <= 40;
  });

  const rutasPorMes = rutasFiltradas.reduce((acc, item) => {
    const mesClave = format(item.fecha, "MMMM yyyy", { locale: es });
    if (!acc[mesClave]) acc[mesClave] = [];
    acc[mesClave].push(item);
    return acc;
  }, {});

  return (
    <div className="rol-container">
      <h2 className="titulo-principal">Rol Gabriel - Ruta 01 - Unidad 129</h2>
      {Object.entries(rutasPorMes).map(([mes, items]) => {
        const mitad = Math.ceil(items.length / 2);
        const izquierda = items.slice(0, mitad);
        const derecha = items.slice(mitad);

        return (
          <div key={mes} className="mes-seccion">
            <h3 className="mes-titulo">{mes.charAt(0).toUpperCase() + mes.slice(1)}</h3>
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
                      const esHoy = format(fecha, "yyyy-MM-dd") === format(hoy, "yyyy-MM-dd");
                      return (
                        <tr
                          key={idx}
                          className={`${rutaClases[ruta] || ""} ${esHoy ? "hoy" : ""}`}
                        >
                          <td>{format(fecha, "EEEE d", { locale: es })}</td>
                          <td>{ruta}</td>
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
                      const esHoy = format(fecha, "yyyy-MM-dd") === format(hoy, "yyyy-MM-dd");
                      return (
                        <tr
                          key={idx}
                          className={`${rutaClases[ruta] || ""} ${esHoy ? "hoy" : ""}`}
                        >
                          <td>{format(fecha, "EEEE d", { locale: es })}</td>
                          <td>{ruta}</td>
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

export default Rol129;
