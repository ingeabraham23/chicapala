// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import db from "../db";
import "./Inventario.css";
import html2canvas from "html2canvas";

// Componente para Gestión de Inventario
function Inventario() {
  const [articulo, setArticulo] = useState({
    nombre: "",
    cantidad: "",
    precio: "",
    imagen: "",
  });
  const [inventario, setInventario] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [articuloEditado, setArticuloEditado] = useState(null);
  const [totalEfectivo, setTotalEfectivo] = useState(0);

  const tablaRef = useRef(null);

  useEffect(() => {
    const cargarInventario = async () => {
      const data = await db.inventario.toArray();
      setInventario(data);
      calcularTotalEfectivo(data);
    };
    cargarInventario();
  }, []);

  const calcularTotalEfectivo = (data) => {
    const total = data.reduce(
      (acc, item) => acc + item.cantidad * item.precio,
      0
    );
    setTotalEfectivo(total);
  };

  const agregarArticulo = async () => {
    if (modoEdicion) {
      await db.inventario.update(articuloEditado.id, {
        nombre: articulo.nombre,
        cantidad: parseInt(articulo.cantidad),
        precio: parseFloat(articulo.precio),
      });
      setModoEdicion(false);
      setArticuloEditado(null);
    } else {
      await db.inventario.add({
        nombre: articulo.nombre,
        cantidad: parseInt(articulo.cantidad),
        precio: parseFloat(articulo.precio),
        imagen: articulo.imagen,
      });
    }
    const data = await db.inventario.toArray();
    setInventario(data);
    calcularTotalEfectivo(data);
    setArticulo({ nombre: "", cantidad: "", precio: "" });
  };

  const editarArticulo = (articulo) => {
    setModoEdicion(true);
    setArticuloEditado(articulo);
    setArticulo({
      nombre: articulo.nombre,
      cantidad: articulo.cantidad,
      precio: articulo.precio,
    });
  };

  const eliminarArticulo = async (id) => {
    await db.inventario.delete(id);
    const data = await db.inventario.toArray();
    setInventario(data);
    calcularTotalEfectivo(data);
  };

  function obtenerFechaFormateada() {
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];

    const diasSemana = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ];

    const obtenerFormato12Horas = (hora) => {
      const ampm = hora >= 12 ? "pm" : "am";
      const horas = hora % 12 || 12;
      return `${horas}:${new Date().getMinutes()} ${ampm}`;
    };

    const fecha = new Date();
    const diaSemana = diasSemana[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
    const horaFormateada = obtenerFormato12Horas(fecha.getHours());

    return `${diaSemana} ${dia} de ${mes} de ${año} ${horaFormateada}`;
  }

  function capturarTabla(tabla) {
    const fechaFormateada = obtenerFechaFormateada();

    html2canvas(tabla).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `Inventario_${fechaFormateada}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  const fechaFormateada = obtenerFechaFormateada();

  return (
    <div className="inventario-container">
      <input
        className="inventario-input"
        type="text"
        placeholder="Nombre del artículo"
        value={articulo.nombre}
        onChange={(e) => setArticulo({ ...articulo, nombre: e.target.value })}
      />
      <input
        className="inventario-input"
        type="number"
        placeholder="Cantidad"
        value={articulo.cantidad}
        onChange={(e) => setArticulo({ ...articulo, cantidad: e.target.value })}
      />
      <input
        className="inventario-input"
        type="number"
        placeholder="Precio"
        value={articulo.precio}
        onChange={(e) => setArticulo({ ...articulo, precio: e.target.value })}
      />
      <input
        className="inventario-input"
        type="text"
        placeholder="URL de la imagen"
        value={articulo.imagen}
        onChange={(e) => setArticulo({ ...articulo, imagen: e.target.value })}
      />
      <button className="inventario-button" onClick={agregarArticulo}>
        {modoEdicion ? "Guardar Cambios" : "➕ Agregar Artículo"}
      </button>

      <table className="tabla-inventario-joyvolt" ref={tablaRef}>
        <thead>
          <tr>
            <th colSpan={4} className="celda-titulo-joyvolt">
              Inventario {fechaFormateada}
            </th>
          </tr>
          <tr>
            <th className="celda-encabezado-joyvolt">Foto</th>
            <th className="celda-encabezado-joyvolt">Articulo</th>
            <th className="celda-encabezado-joyvolt">Cant.</th>
            <th className="celda-encabezado-joyvolt">$</th>
          </tr>
        </thead>
        <tbody>
          {inventario.map((inv) => (
            <tr key={inv.id}>
              <td className="celda-imagen-joyvolt">
                <img
                  src={inv.imagen}
                  width="50"
                  height="50"
                  align="center"
                />
              </td>
              <td className="celda-nombre-joyvolt">{inv.nombre}</td>
              <td className="celda-cantidad-joyvolt">{inv.cantidad}</td>
              <td className="celda-precio-joyvolt">${inv.precio}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="celda-pie-joyvolt" colSpan={4}>
              Total en Efectivo en Almacén: ${totalEfectivo.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
      <button
        className="boton-capturar-joyvolt"
        onClick={() => capturarTabla(tablaRef.current)}
      >
        📸 Capturar inventario
      </button>

      <h2>editar</h2>

      <table className="tabla-inventario-joyvolt" border="1">
        <thead>
          <tr>
            <th colSpan={5}>Inventario</th>
          </tr>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>#</th>
            <th>$</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {inventario.map((inv) => (
            <tr key={inv.id}>
              <td className="celda-imagen-joyvolt">
                <img
                  src={inv.imagen}
                  alt={inv.nombre}
                  width="40"
                  height="40"
                  align="center"
                />
              </td>
              <td className="celda-nombre-joyvolt">{inv.nombre}</td>
              <td className="celda-cantidad-joyvolt">{inv.cantidad}</td>
              <td className="celda-precio-joyvolt">{inv.precio}</td>
              <td className="celda-precio-joyvolt">{inv.imagen}</td>
              <td className="celda-acciones-joyvolt">
                <button onClick={() => editarArticulo(inv)}>Editar</button>
                <button onClick={() => eliminarArticulo(inv.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              Total en Efectivo en Almacén: ${totalEfectivo.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Inventario;
