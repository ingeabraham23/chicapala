// eslint-disable-next-line no-unused-vars
import React from 'react';
import db from "../db";

function Administracion() {
  const limpiarTabla = async (tabla) => {
    try {
      await db[tabla].clear();
      alert(`Tabla ${tabla} limpiada con éxito.`);
    } catch (error) {
      console.error(`Error al limpiar la tabla ${tabla}:`, error);
      alert(`Ocurrió un error al intentar limpiar la tabla ${tabla}.`);
    }
  };

  const reiniciarBaseDeDatos = async () => {
    try {
      await db.delete(); // Elimina la base de datos
      await db.open(); // Vuelve a crearla según la configuración
      alert("Base de datos reiniciada con éxito. IDs restablecidos.");
    } catch (error) {
      console.error("Error al reiniciar la base de datos:", error);
      alert("Ocurrió un error al intentar reiniciar la base de datos.");
    }
  };

  return (
    <div>
      <h2>Administración de la Base de Datos</h2>
      <button onClick={() => limpiarTabla("inventario")}>Limpiar Inventario</button>
      <button onClick={() => limpiarTabla("ventas")}>Limpiar Ventas</button>
      <button onClick={() => reiniciarBaseDeDatos()}>Reiniciar Base de Datos</button>
    </div>
  );
}

export default Administracion;
