// src/bitacoraDB.js
import Dexie from "dexie";

export const db = new Dexie("BitacoraDB");

db.version(2).stores({
  revisiones: "++id, categoria, elemento, estado, observaciones, fechaModificacion",
  datosUnidad: "id, unidad, modelo, operador, fechaModificacion"
});