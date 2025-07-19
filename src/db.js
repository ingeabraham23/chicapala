import Dexie from "dexie";

// Inicializar la base de datos Dexie
const db = new Dexie('JoyVoltDB');
db.version(1).stores({
  inventario: '++id,nombre,cantidad,precio',
  ventas: '++id,nombreCliente,nombreArticulo,cantidad,precioTotal,fecha',
  clientes: '++id,nombre,correo,telefono',
});

export default db;