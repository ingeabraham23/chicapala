import React, { useState } from "react";
import { db } from "../bitacoraDB";
import { useLiveQuery } from "dexie-react-hooks";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./BitacoraTransporte.css";

// Ruta correcta al archivo en /public
const logo = `${import.meta.env.BASE_URL}logopdf.png`;

// Función para convertir una imagen en base64
const cargarImagenBase64 = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
};

// Todas las categorías y elementos
const categorias = {
    "Fluidos": [
        "Aceite de motor", "Aceite dirección hidráulica", "Aceite transmisión", "Aceite diferencial",
        "Agua / Anticongelante", "Refrigerante", "Líquido de frenos",
        "Nivel líquido de batería", "Nivel líquido chisgueteros"
    ],
    "Carrocería y Chasis": [
        "Parabrisas", "Medallón", "Ventanas", "Estribo", "Piso", "Lienzos",
        "Carrocería", "Molduras", "Muelles", "Abrazaderas chasis",
        "Asientos", "Asiento conductor", "Cinturón seguridad",
        "Tubo de escape", "Escape", "Cofre", "Defensa delantera",
        "Defensa trasera", "Cajuela", "Chasis"
    ],
    "Sistema Eléctrico": [
        "Batería terminales", "Alternador", "Marcha", "Switch",
        "Luz blanca baja", "Luz blanca alta", "Luces cuartos",
        "Direccionales", "Intermitentes", "Luz freno", "Claxon",
        "Luces tablero", "Luces interiores", "Luces estribo",
        "Fusibles", "Limpiaparabrisas"
    ],
    "Frenos y Neumáticos": [
        "Desgaste de llantas", "Presión de llantas", "Rines", "Birlos", "Tuercas",
        "Tuberías/mangueras frenos fugas", "Pedal freno", "Bomba frenos", "Llanta auxiliar"
    ],
    "Dirección": [
        "Volante", "Caja de dirección (sinfin)", "Bieletas", "Depósito aceite de dirección hidraulica"
    ],

    "Transmisión": [
        "Caja de velocidades", "Pedal clutch", "Cardán", "Crucetas",
        "Diferencial", "Flechas", "Palanca de velocidades"
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
    "Tablero": [
        "Medidor gasolina/diesel", "Medidor presión aceite", "Medidor temperatura", "Medidor carga",
        "Tacómetro", "Velocímetro", "Odómetro",
        "Luz direccional izquierda", "Luz direccional derecha", "Luz intermitentes",
        "Luz testigo motor", "Luz altas", "Luz bajas", "Luz cinturón seguridad",
        "Botón luces interiores", "Botón luces cabina", "Botón limpiaparabrisas"
    ],
    "Sistema Mecánico": [
        "Tapa de balancines", "Culata (fugas)", "Múltiple de admisión", "Múltiple de escape",
        "Retén cigüeñal", "Tapón del cárter", "Tapones de fundición",
        "Bomba de agua", "Radiador", "Mangueras", "Ventilador", "Bandas"
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

    const limpiarDatos = async () => {
        await db.revisiones.clear();   // borra todas las revisiones
        await db.datosUnidad.clear();  // borra datos de unidad
    };

    // Exportar PDF en tamaño carta con logo y colores
    const exportarPDF = async () => {
        const doc = new jsPDF({
            format: "letter", // 📄 tamaño carta
            unit: "pt"
        });

        // Convertir el logo en base64
        const logoBase64 = await cargarImagenBase64(`${import.meta.env.BASE_URL}logopdf.png`);

        if (logoBase64) {
            doc.addImage(logoBase64, "PNG", 40, 40, 60, 60);
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

    // Exportar PDF en blanco y negro, 2 columnas por hoja
    const exportarFormatoPDF = async () => {
        const doc = new jsPDF({
            format: "letter",
            unit: "pt"
        });

        const pageWidth = doc.internal.pageSize.getWidth();

        // Cargar logo
        const logoBase64 = await cargarImagenBase64(`${import.meta.env.BASE_URL}logopdf.png`);

        // === Encabezado: Logo + Título ===
        if (logoBase64) {
            doc.addImage(logoBase64, "PNG", 40, 20, 60, 60); // logo arriba a la izquierda
        }

        const titulo = "BITÁCORA BÁSICA PARA REVISIÓN DE UNIDADES DEL SERVICIO DE TRANSPORTE PÚBLICO Y MERCANTIL";
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");

        // Dividir título en varias líneas si no cabe
        const tituloLineas = doc.splitTextToSize(titulo, pageWidth - 140);
        doc.text(tituloLineas, pageWidth / 2, 40, { align: "center" });

        // === Tabla de datos generales ===
        autoTable(doc, {
            startY: 70 + (tituloLineas.length - 1) * 14, // más abajo del título
            margin: { left: 40, right: 40 },
            theme: "grid",
            head: [["Número de Unidad", "Modelo", "Operador", "Fecha"]],
            body: [[" ", " ", " ", " "]],
            styles: {
                fontSize: 8,
                halign: "center",
                valign: "middle",
                lineColor: [0, 0, 0],
                lineWidth: 0.5,
                minCellHeight: 22, // espacio para escribir a mano
            },
            headStyles: {
                fontStyle: "bold",
                fillColor: [240, 240, 240],
                textColor: [0, 0, 0],
            },
            columnStyles: {
                0: { cellWidth: 120 },
                1: { cellWidth: 120 },
                2: { cellWidth: 180 },
                3: { cellWidth: 100 },
            },
        });

        // === Variables para las tablas de categorías ===
        let categoriasArray = Object.keys(categorias);
        let x = 40;
        let y = doc.lastAutoTable.finalY + 30; // más espacio entre la tabla de datos y las categorías
        let colWidth = 260;
        let maxY = 750;

        categoriasArray.forEach((cat) => {
            const body = categorias[cat].map(el => [el, " ", " ", " ", " "]);

            let estimatedHeight = body.length * 18 + 40;

            if (y + estimatedHeight > maxY) {
                if (x === 40) {
                    x = 320;
                    y = 158;
                } else {
                    doc.addPage();

                    // Repetir encabezado en cada página
                    if (logoBase64) {
                        doc.addImage(logoBase64, "PNG", 40, 20, 60, 60);
                    }
                    doc.setFontSize(12);
                    doc.setFont("helvetica", "bold");
                    const tituloLineas2 = doc.splitTextToSize(titulo, pageWidth - 140);
                    doc.text(tituloLineas2, pageWidth / 2, 40, { align: "center" });

                    x = 40;
                    y = 107 + (tituloLineas2.length - 1) * 14 + 40; //primera tabla de la segunda pagina
                }
            }

            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            doc.text(cat, x, y - 10);

            autoTable(doc, {
                startY: y,
                startX: x,
                tableWidth: colWidth,
                head: [["Aspecto", "Bueno", "Regular", "Malo", "Observaciones"]],
                body: body,
                theme: "plain",
                styles: {
                    fontSize: 7,
                    lineColor: [0, 0, 0],
                    lineWidth: 0.5,
                    cellPadding: 2,
                },
                headStyles: {
                    fontStyle: "bold",
                    fillColor: [255, 255, 255],
                    textColor: [0, 0, 0],
                    lineWidth: 0.5,
                },
                columnStyles: {
                    0: { cellWidth: 90 },
                    1: { cellWidth: 25 },
                    2: { cellWidth: 30 },
                    3: { cellWidth: 25 },
                    4: { cellWidth: 90 },
                },
                margin: { left: x },
                didDrawPage: (data) => {
                    const pageHeight = doc.internal.pageSize.getHeight();

                    // Pie de página
                    doc.setFontSize(9);
                    doc.setTextColor(100);
                    doc.text(
                        "© Derechos reservados 2025 JoyVolt Corporation",
                        pageWidth / 2,
                        pageHeight - 20,
                        { align: "center" }
                    );
                }
            });

            y = doc.lastAutoTable.finalY + 30;
        });

        doc.save("formato_bitacora_joyboy.pdf");
    };





    return (
        <div className="contenedor-bitacora">
            <h1>BITACORA BASICA PARA REVISION DE UNIDADES DEL SERVICIO DE TRANSPORTE PUBLICO Y MERCANTIL</h1>

            {/* Encabezado unidad */}
            <div className="unidad-info">
                <label>
                    <input
                        type="text"
                        value={datosUnidad?.unidad || ""}
                        onChange={e => actualizarUnidad({ unidad: e.target.value })}
                        placeholder="Numero de Unidad"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        value={datosUnidad?.modelo || ""}
                        onChange={e => actualizarUnidad({ modelo: e.target.value })}
                        placeholder="Modelo"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        value={datosUnidad?.operador || ""}
                        onChange={e => actualizarUnidad({ operador: e.target.value })}
                        placeholder="Nombre del operador"
                    />
                </label>
            </div>

            {/* Botones */}
            <div className="acciones">
                <button onClick={inicializar} className="btn-inicializar">Inicializar</button>
                <button onClick={() => setOrden("elemento")} className="btn-ordenar">Ordenar por nombre</button>
                <button onClick={() => setOrden("fechaModificacion")} className="btn-ordenar">Ordenar por fecha</button>
                <button onClick={exportarPDF} className="btn-exportar">Exportar PDF</button>
                <button onClick={exportarFormatoPDF} className="btn-formato">Exportar Formato PDF</button>
                <button onClick={limpiarDatos} className="btn-limpiar">Limpiar</button>
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
                                    <th>Aspecto</th>
                                    <th>Estado</th>
                                    <th>Observaciones</th>
                                    <th>modificación</th>
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
