import React, { useState } from "react";
import { db } from "../bitacoraDB";
import { useLiveQuery } from "dexie-react-hooks";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./BitacoraTransporte.css";

// Logo (guárdalo en public/logo.png o en src/logo.png)
import logo from "/chicapala/logopdf.png";

// Todas las categorías y elementos
const categorias = {
    "Fluidos": [
        "Aceite de motor", "Aceite dirección hidráulica", "Aceite transmisión", "Aceite diferencial",
        "Agua / Anticongelante", "Refrigerante", "Líquido de frenos",
        "Nivel líquido de batería", "Nivel líquido chisgueteros"
    ],
    "Frenos y Neumáticos": [
        "Desgaste de llantas", "Presión de llantas", "Rines", "Birlos", "Tuercas",
        "Tuberías/mangueras frenos fugas", "Pedal freno", "Bomba frenos", "Llanta auxiliar"
    ],
    "Dirección": [
        "Volante", "Caja de dirección (sinfin)", "Bisletas", "Depósito aceite dirección hidráulica"
    ],
    "Suspensión": [
        "Muelles",
        "Amortiguador delantero izquierdo", "Amortiguador delantero derecho",
        "Amortiguador trasero izquierdo", "Amortiguador trasero derecho",
        "Barra de torsión", "Resortes",
        "Horquilla delantera izquierda", "Horquilla delantera derecha",
        "Horquilla trasera izquierda", "Horquilla trasera derecha",
        "Topes de goma",
        "Rótula delantera izquierda", "Rótula delantera derecha",
        "Rótula trasera izquierda", "Rótula trasera derecha"
    ],
    "Sistema Eléctrico": [
        "Batería terminales", "Alternador", "Marcha", "Switch",
        "Luz blanca baja", "Luz blanca alta", "Luces cuartos",
        "Direccionales", "Intermitentes", "Luz freno", "Claxon",
        "Luces tablero", "Luces interiores", "Luces estribo",
        "Fusibles", "Limpiaparabrisas"
    ],
    "Transmisión": [
        "Caja de velocidades", "Pedal clutch", "Cardán", "Crucetas",
        "Diferencial", "Flechas", "Palanca de velocidades"
    ],
    "Sistema Mecánico": [
        "Tapa de balancines", "Culata (fugas)", "Múltiple de admisión", "Múltiple de escape",
        "Retén cigüeñal", "Tapón del cárter", "Tapones de fundición",
        "Bomba de agua", "Radiador", "Mangueras", "Ventilador", "Bandas"
    ],
    "Carrocería y Chasis": [
        "Parabrisas", "Medallón", "Ventanas", "Estribo", "Piso", "Lienzos",
        "Carrocería", "Molduras", "Muelles", "Abrazaderas chasis",
        "Asientos", "Asiento conductor", "Cinturón seguridad",
        "Tubo de escape", "Escape", "Cofre", "Defensa delantera",
        "Defensa trasera", "Cajuela", "Chasis"
    ],
    "Tablero": [
        "Medidor gasolina/diesel", "Medidor presión aceite", "Medidor temperatura", "Medidor carga",
        "Tacómetro", "Velocímetro", "Odómetro",
        "Luz direccional izquierda", "Luz direccional derecha", "Luz intermitentes",
        "Luz testigo motor", "Luz altas", "Luz bajas", "Luz cinturón seguridad",
        "Botón luces interiores", "Botón luces cabina", "Botón limpiaparabrisas"
    ]
};

export default function BitacoraTransporte() {
    const [orden, setOrden] = useState("elemento");

    // LiveQuery para obtener revisiones y datos de unidad
    const revisiones = useLiveQuery(async () => {
        return await db.revisiones.orderBy(orden).toArray();
    }, [orden]);

    const datosUnidad = useLiveQuery(() => db.datosUnidad.get(1));

    // Inicializar BD
    const inicializar = async () => {
        for (const [categoria, items] of Object.entries(categorias)) {
            for (const elemento of items) {
                const existe = await db.revisiones.where({ categoria, elemento }).first();
                if (!existe) {
                    await db.revisiones.add({
                        categoria,
                        elemento,
                        estado: false,
                        observaciones: "",
                        fechaModificacion: new Date().toISOString()
                    });
                }
            }
        }
        if (!datosUnidad) {
            await db.datosUnidad.put({
                id: 1,
                unidad: "",
                modelo: "",
                operador: "",
                fechaModificacion: new Date().toISOString()
            });
        }
    };

    // Actualizar revisión
    const actualizarRevision = async (id, cambios) => {
        await db.revisiones.update(id, {
            ...cambios,
            fechaModificacion: new Date().toISOString()
        });
    };

    // Actualizar datos unidad
    const actualizarUnidad = async (cambios) => {
        await db.datosUnidad.put({
            id: 1,
            unidad: cambios.unidad ?? datosUnidad?.unidad ?? "",
            modelo: cambios.modelo ?? datosUnidad?.modelo ?? "",
            operador: cambios.operador ?? datosUnidad?.operador ?? "",
            fechaModificacion: new Date().toISOString()
        });
    };

    // Exportar PDF en tamaño carta con logo y colores
    const exportarPDF = () => {
        const doc = new jsPDF({
            format: "letter", // 📄 tamaño carta
            unit: "pt"
        });

        // Logo en esquina superior izquierda
        if (logo) {
            doc.addImage(logo, "PNG", 40, 40, 60, 60);
        }

        // Encabezado
        doc.setFontSize(18);
        doc.text("Bitácora de Revisión - Transporte Público", 120, 50);

        doc.setFontSize(11);
        doc.text(`Unidad: ${datosUnidad?.unidad || ""}`, 120, 70);
        doc.text(`Modelo: ${datosUnidad?.modelo || ""}`, 120, 85);
        doc.text(`Operador: ${datosUnidad?.operador || ""}`, 120, 100);

        // Colores por categoría
        const colores = {
            "Fluidos": [0, 123, 255],
            "Frenos y Neumáticos": [40, 167, 69],
            "Dirección": [23, 162, 184],
            "Suspensión": [111, 66, 193],
            "Sistema Eléctrico": [253, 126, 20],
            "Transmisión": [32, 201, 151],
            "Sistema Mecánico": [232, 62, 140],
            "Carrocería y Chasis": [52, 58, 64],
            "Tablero": [255, 193, 7]
        };

        Object.keys(categorias).forEach((cat, idx) => {
            const datos = revisiones?.filter(r => r.categoria === cat) || [];
            if (datos.length > 0) {
                // Calcular posición Y inicial
                let startY = idx === 0 ? 130 : (doc.lastAutoTable?.finalY || 130) + 40;

                // Título de categoría ANTES de la tabla
                doc.setFontSize(13);
                doc.setTextColor(...(colores[cat] || [0, 0, 0]));
                doc.text(String(cat), 40, startY - 10);
                doc.setTextColor(0, 0, 0);

                // Ahora la tabla
                autoTable(doc, {
                    startY: startY,
                    head: [["Elemento", "Estado", "Observaciones", "Última modificación"]],
                    body: datos.map(r => [
                        r.elemento,
                        r.estado ? "Bien" : "x",
                        r.observaciones || "",
                        new Date(r.fechaModificacion).toLocaleString()
                    ]),
                    theme: "grid",
                    headStyles: {
                        fillColor: colores[cat] || [0, 102, 204],
                        textColor: cat === "Tablero" ? [0, 0, 0] : 255,
                        fontStyle: "bold"
                    },
                    alternateRowStyles: { fillColor: [245, 245, 245] },
                    margin: { left: 40, right: 40 }
                });
            }
        });


        doc.save("bitacora.pdf");
    };

    return (
        <div className="contenedor-bitacora">
            <h1>Bitácora de Revisión - Transporte Público</h1>

            {/* Encabezado unidad */}
            <div className="unidad-info">
                <label>
                    Unidad:
                    <input
                        type="text"
                        value={datosUnidad?.unidad || ""}
                        onChange={e => actualizarUnidad({ unidad: e.target.value })}
                    />
                </label>
                <label>
                    Modelo:
                    <input
                        type="text"
                        value={datosUnidad?.modelo || ""}
                        onChange={e => actualizarUnidad({ modelo: e.target.value })}
                    />
                </label>
                <label>
                    Operador:
                    <input
                        type="text"
                        value={datosUnidad?.operador || ""}
                        onChange={e => actualizarUnidad({ operador: e.target.value })}
                    />
                </label>
            </div>

            {/* Botones */}
            <div className="acciones">
                <button onClick={inicializar}>Inicializar</button>
                <button onClick={() => setOrden("elemento")}>Ordenar por nombre</button>
                <button onClick={() => setOrden("fechaModificacion")}>Ordenar por fecha</button>
                <button onClick={exportarPDF}>Exportar PDF</button>
            </div>

            {/* Tablas */}
            {Object.keys(categorias).map(cat => {
                // Asignar clase CSS según categoría
                const claseCategoria = {
                    "Fluidos": "fluids",
                    "Frenos y Neumáticos": "brakes",
                    "Dirección": "steering",
                    "Suspensión": "suspension",
                    "Sistema Eléctrico": "electric",
                    "Transmisión": "transmission",
                    "Sistema Mecánico": "mechanic",
                    "Carrocería y Chasis": "body",
                    "Tablero": "dashboard"
                }[cat];

                return (
                    <div key={cat}>
                        <h2 className={claseCategoria}>{cat}</h2>
                        <table className={`tabla-bitacora tabla-${claseCategoria}`}>
                            <thead>
                                <tr>
                                    <th>Elemento</th>
                                    <th>Estado</th>
                                    <th>Observaciones</th>
                                    <th>Última modificación</th>
                                </tr>
                            </thead>
                            <tbody>
                                {revisiones
                                    ?.filter(r => r.categoria === cat)
                                    .map(r => (
                                        <tr key={r.id}>
                                            <td>{r.elemento}</td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    checked={r.estado}
                                                    onChange={e =>
                                                        actualizarRevision(r.id, { estado: e.target.checked })
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={r.observaciones}
                                                    onChange={e =>
                                                        actualizarRevision(r.id, { observaciones: e.target.value })
                                                    }
                                                />
                                            </td>
                                            <td>{new Date(r.fechaModificacion).toLocaleString()}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                );
            })}
        </div>
    );
}
