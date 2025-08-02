import Dexie from "dexie";

export const db = new Dexie("LetrerosDB");

db.version(1).stores({
  movimientos: "++id, tipo, cantidad, origen, destino, precio, fecha, estado, descripcion"
});
