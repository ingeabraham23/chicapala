import React, { useState } from "react";
import { db } from "../letrerosDB";
import { useLiveQuery } from "dexie-react-hooks";
import "./LetrerosAdmin.css";

export default function LetrerosAdmin() {
    const movimientos = useLiveQuery(() => db.movimientos.orderBy("fecha").reverse().toArray(), []);

    const [form, setForm] = useState({
        tipo: "entrada",        // entrada | salida
        cantidad: 1,
        destino: "bodega",      // en entrada siempre bodega
        precio: 1350,           // costo fijo
        precioVenta: "",        // si es salida por venta
        estado: "pagado",
        descripcion: ""
    });

    const [editando, setEditando] = useState(null); // id en edición

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const addMovimiento = async () => {
        let ganancia = 0;
        // Si es salida y ya viene como pagado, calcular ganancia desde el inicio
        if (form.tipo === "salida" && form.estado === "pagado" && form.precioVenta) {
            ganancia = (parseFloat(form.precioVenta) - 1350) * parseInt(form.cantidad);
        }

        if (editando) {
            await db.movimientos.update(editando, {
                ...form,
                cantidad: parseInt(form.cantidad),
                precio: parseFloat(form.precio),
                precioVenta: form.precioVenta ? parseFloat(form.precioVenta) : null,
                ganancia
            });
            setEditando(null);
        } else {
            // Cuando se agrega un movimiento tipo "entrada"
            await db.movimientos.add({
    tipo: form.tipo,                     
    cantidad: parseInt(form.cantidad),   
    destino: form.destino,               
    precio: 1350,                        
    precioVenta: form.precioVenta ? parseFloat(form.precioVenta) : null,
    estado: form.tipo === "entrada" ? "entrada" : form.estado,  
    descripcion: form.descripcion,
    fecha: new Date().toISOString(),
    ganancia: ganancia
  });
        }
        resetForm();
    };


    const resetForm = () => {
        setForm({
            tipo: "entrada",
            cantidad: 1,
            origen: "",
            destino: "bodega",
            precio: 1350,
            estado: "pagado",
            descripcion: ""
        });
    };

    const editarMovimiento = (mov) => {
        setForm(mov);
        setEditando(mov.id);
    };

    const borrarTodo = async () => {
        if (window.confirm("¿Seguro que quieres borrar todos los movimientos?")) {
            await db.movimientos.clear();
        }
    };

    // Totales
    const totalEntradas = movimientos?.filter(m => m.tipo === "entrada").reduce((a, b) => a + b.cantidad, 0) || 0;
    const totalSalidas = movimientos?.filter(m => m.tipo === "salida" && m.estado !== "cancelado")
        .reduce((a, b) => a + b.cantidad, 0) || 0;

    // En bodega
    const enBodega = totalEntradas - totalSalidas;
    const valorBodega = enBodega * 1350;  // 👈 valor del inventario actual

    // Entradas
    const entradas = movimientos?.filter(m => m.tipo === "entrada") || [];
    const valorEntradas = entradas.reduce((a, b) => a + (b.precio * b.cantidad), 0);

    // Pendientes
    const pendientes = movimientos?.filter(m => m.estado === "pendiente") || [];
    const totalPendientes = pendientes.reduce((a, b) => a + b.cantidad, 0);
    const valorPendientes = pendientes.reduce((a, b) => a + (b.precioVenta || b.precio) * b.cantidad, 0);

    // En deuda
    const enDeuda = movimientos?.filter(m => m.estado === "en deuda") || [];
    const totalEnDeuda = enDeuda.reduce((a, b) => a + b.cantidad, 0);
    const valorEnDeuda = enDeuda.reduce((a, b) => a + (b.precioVenta || b.precio) * b.cantidad, 0);

    // Pagados
    const pagados = movimientos?.filter(m => m.estado === "pagado") || [];
    const totalPagados = pagados.reduce((a, b) => a + b.cantidad, 0);
    const valorPagados = pagados.reduce((a, b) => a + (b.precioVenta || b.precio) * b.cantidad, 0);

    // Ganancia real solo en pagados
    const totalGanancia = pagados.reduce((a, b) => a + (b.ganancia || 0), 0);




    const formatearFecha = (fechaISO) => {
        return new Date(fechaISO).toLocaleDateString("es-ES", {
            weekday: "long",   // lunes, martes...
            day: "2-digit",    // 02
            month: "long",     // agosto
            year: "numeric"    // 2025
        });
    };

    const pagarMovimiento = async (mov) => {
        if (window.confirm(`¿Confirmas que el movimiento del ${formatearFecha(mov.fecha)} está pagado?`)) {
            let ganancia = 0;
            if (mov.tipo === "salida" && mov.precioVenta) {
                ganancia = (parseFloat(mov.precioVenta) - 1350) * parseInt(mov.cantidad);
            }
            await db.movimientos.update(mov.id, { estado: "pagado", ganancia });
        }
    };

    const regresarBodega = async (mov) => {
        if (window.confirm(`¿Quieres regresar ${mov.cantidad} letreros a bodega?`)) {
            // Marcamos la salida como cancelada, sin generar entrada
            await db.movimientos.update(mov.id, { estado: "cancelado" });
        }
    };



    return (
        <div className="letreros-container">
            <h1>📊 Administración de Letreros</h1>

            {/* Formulario */}
            <div className="formulario">
                <select name="tipo" value={form.tipo} onChange={handleChange}>
                    <option value="entrada">Entrada (Bodega)</option>
                    <option value="salida">Salida</option>
                </select>

                <input type="number" name="cantidad" value={form.cantidad} onChange={handleChange} placeholder="Cantidad" />

                {form.tipo === "salida" && (
                    <input type="text" name="destino" value={form.destino} onChange={handleChange} placeholder="Destino" />
                )}

                {form.tipo === "salida" ? (
                    <input type="number" name="precioVenta" value={form.precioVenta} onChange={handleChange} placeholder="Precio de venta (si aplica)" />
                ) : (
                    <input type="number" name="precio" value={form.precio} onChange={handleChange} placeholder="Costo (1350)" />
                )}

                <select
                    name="estado"
                    value={form.tipo === "entrada" ? "entrada" : form.estado}
                    onChange={handleChange}
                    disabled={form.tipo === "entrada"}  // deshabilitado en entrada
                >
                    {form.tipo === "entrada" ? (
                        <option value="entrada">Entrada</option>   // 👈 muestra texto fijo
                    ) : (
                        <>
                            <option value="pagado">Pagado</option>
                            <option value="pendiente">Pendiente</option>
                            <option value="en deuda">En deuda</option>
                        </>
                    )}
                </select>


                <input type="text" name="descripcion" value={form.descripcion} onChange={handleChange} placeholder="Descripción" />

                <button onClick={addMovimiento}>{editando ? "Guardar cambios" : "Agregar"}</button>
                {editando && <button onClick={resetForm}>Cancelar</button>}
            </div>


            {/* Tabla */}
            <table className="tabla-movimientos">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Tipo</th>
                        <th>Cant.</th>
                        <th>Origen</th>
                        <th>Destino</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th>Estado</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className="tabla-body">
                    {movimientos?.map(m => (
                        <tr key={m.id}
                            className={m.estado === "en deuda" ? "rojo" : m.tipo === "salida" && m.precioVenta ? "verde" : ""}>

                            {/* --- SOLO MÓVIL (tarjeta) --- */}
                            <td className="mobile-card" colSpan="10">
                                <div className={`card ${m.estado.replace(" ", "-")}`}>
                                    <div className="card-header">{formatearFecha(m.fecha)}</div>
                                    <div className="card-content">
                                        <div className="card-left">
                                            <p><strong>Tipo:</strong> {m.tipo}</p>
                                            <p><strong>Cantidad:</strong> {m.cantidad}</p>
                                            <p><strong>Destino:</strong> {m.destino}</p>
                                            <p><strong>Costo:</strong> ${m.precio.toLocaleString()}</p>
                                            <p><strong>Venta:</strong> {m.precioVenta ? `$${m.precioVenta.toLocaleString()}` : "-"}</p>
                                        </div>
                                        <div className="card-right">
                                            <p><strong>Ganancia:</strong>
                                                {m.estado === "pagado" && m.ganancia ? `$${m.ganancia.toLocaleString()}` : "-"}
                                            </p>
                                            <p><strong>Estado:</strong> {m.estado}</p>
                                            <p><strong>Descripción:</strong> {m.descripcion}</p>
                                            <p>
                                                <button onClick={() => editarMovimiento(m)}>✏️ Editar</button>
                                                {(m.estado === "pendiente" || m.estado === "en deuda") && (
                                                    <>
                                                        <button className="btn-pagar" onClick={() => pagarMovimiento(m)}>✔️ Pagar</button>
                                                        <button className="btn-bodega" onClick={() => regresarBodega(m)}>↩️ Bodega</button>
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>


            </table>

            {/* Resumen */}
            <div className="resumen">
                <h2>📊 Resumen Global</h2>
                <table className="tabla-resumen">
                    <thead>
                        <tr>
                            <th>Estado</th>
                            <th>Cantidad</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Entradas</td>
                            <td>{totalEntradas}</td>
                            <td>${valorEntradas.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>Salidas</td>
                            <td>{totalSalidas}</td>
                            <td>-</td>
                        </tr>
                        <tr className="fila-bodega">
                            <td>En bodega</td>
                            <td>{enBodega}</td>
                            <td>${valorBodega.toLocaleString()}</td>
                        </tr>
                        <tr className="fila-pendiente">
                            <td>Pendientes</td>
                            <td>{totalPendientes}</td>
                            <td>${valorPendientes.toLocaleString()}</td>
                        </tr>
                        <tr className="fila-en-deuda">
                            <td>En deuda</td>
                            <td>{totalEnDeuda}</td>
                            <td>${valorEnDeuda.toLocaleString()}</td>
                        </tr>
                        <tr className="fila-pagado">
                            <td>Pagados</td>
                            <td>{totalPagados}</td>
                            <td>${valorPagados.toLocaleString()}</td>
                        </tr>
                        <tr className="fila-ganancia">
                            <td>Ganancia total</td>
                            <td colSpan="2">${totalGanancia.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn-borrar" onClick={borrarTodo}>🧹 Limpiar todo</button>
            </div>



            {/* Timeline */}
            <div className="timeline">
                <h2>📜 Cronología de Movimientos</h2>
                <ul>
                    {movimientos?.map(m => (
                        <li key={m.id} className={m.estado.replace(" ", "-")}>
                            {m.estado === "cancelado" ? (
                                <>
                                    <strong>❌ CANCELADO (Devolución a bodega)</strong>
                                    <span className="fecha">[{formatearFecha(m.fecha)}]</span>
                                    {m.descripcion && <em> - {m.descripcion}</em>}
                                </>
                            ) : (
                                <>
                                    <strong>{m.tipo === "entrada" ? "📦 ENTRADA" : "📤 SALIDA"}</strong>
                                    ({m.cantidad} letreros → {m.destino})

                                    {m.estado === "pagado" && m.precioVenta && (
                                        <span className="ganancia">
                                            💰 Ganancia: ${m.ganancia.toLocaleString()}
                                        </span>
                                    )}

                                    <span className="fecha">[{formatearFecha(m.fecha)}]</span>
                                    {m.descripcion && <em> - {m.descripcion}</em>}
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
