// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import db from "../db";
import "./Ventas.css";
import html2canvas from "html2canvas";

// Componente para Gestión de Ventas
function Ventas() {
  const [venta, setVenta] = useState({ nombreCliente: "", productos: [] });
  const [productoSeleccionado, setProductoSeleccionado] = useState({
    nombreArticulo: "",
    cantidad: "",
  });
  const [inventario, setInventario] = useState([]);
  const [ventas, setVentas] = useState([]);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState("");
  const [cambio, setCambio] = useState(0);

  const tablaRef = useRef(null);

  useEffect(() => {
    const cargarDatos = async () => {
      setInventario(await db.inventario.toArray());
      setVentas(await db.ventas.toArray());
    };
    cargarDatos();
  }, []);

  const agregarProducto = () => {
    const articulo = inventario.find(
      (item) => item.nombre === productoSeleccionado.nombreArticulo
    );
    if (!articulo) {
      alert("Artículo no encontrado en el inventario.");
      return;
    }
    if (articulo.cantidad < parseInt(productoSeleccionado.cantidad)) {
      alert("Cantidad insuficiente en el inventario.");
      return;
    }

    const subtotal = articulo.precio * parseInt(productoSeleccionado.cantidad);
    const nuevosProductos = [
      ...venta.productos,
      {
        ...productoSeleccionado,
        precio: articulo.precio,
        subtotal,
        imagen: articulo.imagen, // Añade la URL de la imagen
      },
    ];
    setVenta({ ...venta, productos: nuevosProductos });
    setTotal(nuevosProductos.reduce((acc, prod) => acc + prod.subtotal, 0));
    setProductoSeleccionado({ nombreArticulo: "", cantidad: "" });
  };

  const registrarVenta = async () => {
    if (pago < total) {
      alert("El pago es insuficiente.");
      return;
    }

    for (const producto of venta.productos) {
      const articulo = inventario.find(
        (item) => item.nombre === producto.nombreArticulo
      );
      await db.inventario.update(articulo.id, {
        cantidad: articulo.cantidad - parseInt(producto.cantidad),
      });
    }

    await db.ventas.add({
      nombreCliente: venta.nombreCliente,
      productos: venta.productos,
      precioTotal: total,
      fecha: new Date().toISOString(),
    });

    setVenta({ nombreCliente: "", productos: [] });
    setTotal(0);
    setPago("");
    setCambio(0);
    setInventario(await db.inventario.toArray());
    setVentas(await db.ventas.toArray());
  };

  const calcularCambio = () => {
    setCambio(pago - total);
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

  async function getEscPosRasterFormat(base64Image) {
    const image = new Image();
    image.src = base64Image;
    await new Promise((res) => (image.onload = res));

    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const width = canvas.width;
    const height = canvas.height;
    const bytesPerLine = Math.ceil(width / 8);
    const result = [];

    result.push(0x1b, 0x61, 0x01); // <-- CENTRAR la imagen

    result.push(0x1d, 0x76, 0x30, 0x00); // GS v 0 m
    result.push(bytesPerLine & 0xff, (bytesPerLine >> 8) & 0xff);
    result.push(height & 0xff, (height >> 8) & 0xff);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < bytesPerLine; x++) {
        let byte = 0x00;
        for (let bit = 0; bit < 8; bit++) {
          const i = (y * width + x * 8 + bit) * 4;
          if (x * 8 + bit < width) {
            const avg =
              (imageData.data[i] +
                imageData.data[i + 1] +
                imageData.data[i + 2]) /
              3;
            if (avg < 127) byte |= 1 << (7 - bit);
          }
        }
        result.push(byte);
      }
    }

    return new Uint8Array(result);
  }

  const imprimirTicketCompleto = async () => {
    try {
      // Cargar imagen del logo
      const response = await fetch(`${import.meta.env.BASE_URL}logo ticket.png`);
      const blob = await response.blob();
      const reader = new FileReader();
      const imageLoadPromise = new Promise((resolve) => {
        reader.onloadend = resolve;
      });
      reader.readAsDataURL(blob);
      await imageLoadPromise;

      // Convertir imagen a ESC/POS
      const logoEscPosBytes = await getEscPosRasterFormat(reader.result);
      const logoBase64 = btoa(String.fromCharCode(...logoEscPosBytes));

      // Construir texto del ticket
      const fecha = new Date().toLocaleString("es-MX");
      let ticket = "";
      ticket += "JoyVolt Auto Corporation\n";
      ticket += "Erika Anacleto Ramon\n";
      ticket += "Calle Aquiles Serdan #7 Yopi\n";
      ticket += "Chignautla puebla. C.P. 73950\n";
      ticket += "WhatsApp 231 159 1893\n";
      ticket += "-----------------------------\n";
      ticket += `Cliente: ${venta.nombreCliente || "Sin nombre"}\n`;
      ticket += `Fecha: ${fecha}\n`;
      ticket += "-----------------------------\n\n";

      venta.productos.forEach((prod) => {
        const nombre = prod.nombreArticulo;
        if (nombre.length > 14) {
          ticket += `${nombre}\n`;
          ticket += `              ${prod.cantidad
            .toString()
            .padStart(2)} ${prod.precio.toFixed(2).padStart(6)} ${prod.subtotal
            .toFixed(2)
            .padStart(7)}\n`;
        } else {
          ticket += `${nombre.padEnd(14)} ${prod.cantidad
            .toString()
            .padStart(2)} ${prod.precio.toFixed(2).padStart(6)} ${prod.subtotal
            .toFixed(2)
            .padStart(7)}\n`;
        }
      });

      ticket += "-----------------------------\n";
      const SIZE_DOUBLE = "\x1D\x21\x11";
      const SIZE_NORMAL = "\x1D\x21\x00";
      ticket += SIZE_DOUBLE + `TOTAL: $${total.toFixed(2)}\n`;
      ticket += SIZE_NORMAL; // Restaurar tamaño normal
      ticket += "-----------------------------\n";

      // Enviar al servidor Android
      const res = await fetch("http://localhost:8000/print", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: logoBase64,
          text: ticket,
        }),
      });

      if (!res.ok) throw new Error("Fallo en la impresión");

      alert("✅ Ticket enviado a impresión");
    } catch (error) {
      console.error("❌ Error al imprimir:", error);
      alert("No se pudo imprimir el ticket");
    }
  };

  return (
    <div className="ventas-container">
      <input
        className="ventas-input"
        type="text"
        placeholder="Nombre del cliente"
        value={venta.nombreCliente}
        onChange={(e) => setVenta({ ...venta, nombreCliente: e.target.value })}
      />
      <select
        className="ventas-input"
        value={productoSeleccionado.nombreArticulo}
        onChange={(e) =>
          setProductoSeleccionado({
            ...productoSeleccionado,
            nombreArticulo: e.target.value,
          })
        }
      >
        <option value="">Seleccionar artículo</option>
        {inventario.map((item) => (
          <option key={item.id} value={item.nombre}>
            {item.nombre}
          </option>
        ))}
      </select>
      <input
        className="ventas-input"
        type="number"
        placeholder="Cantidad"
        value={productoSeleccionado.cantidad}
        onChange={(e) =>
          setProductoSeleccionado({
            ...productoSeleccionado,
            cantidad: e.target.value,
          })
        }
      />
      <button className="ventas-button" onClick={agregarProducto}>
        Agregar Producto
      </button>

      <table className="tabla-ventas-joyvolt" ref={tablaRef}>
        <thead>
          <tr>
            <th className="celda-titulo-joyvolt" colSpan={5}>
              {fechaFormateada}
            </th>
          </tr>
          <tr>
            <th className="celda-titulo-joyvolt" colSpan={5}>
              {venta.nombreCliente}
            </th>
          </tr>
          <tr>
            <th className="celda-encabezado-joyvolt">Imagen</th>
            <th className="celda-encabezado-joyvolt">Artículo</th>
            <th className="celda-encabezado-joyvolt">Cant.</th>
            <th className="celda-encabezado-joyvolt">P.U.</th>
            <th className="celda-encabezado-joyvolt">Subt.</th>
          </tr>
        </thead>
        <tbody>
          {venta.productos.map((prod, index) => (
            <tr key={index}>
              <td className="celda-imagen-joyvolt">
                <img src={prod.imagen} width="50" height="50" />
              </td>
              <td className="celda-nombre-joyvolt">{prod.nombreArticulo}</td>
              <td className="celda-cantidad-joyvolt">{prod.cantidad}</td>
              <td className="celda-cantidad-joyvolt">{prod.precio}</td>
              <td className="celda-precio-joyvolt">
                ${prod.subtotal.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="celda-pie-joyvolt" colSpan={5}>
              Total: ${total.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>

      <button
        className="boton-capturar-joyvolt"
        onClick={() => capturarTabla(tablaRef.current)}
      >
        📸 Capturar venta
      </button>

      <button
        className="boton-capturar-joyvolt"
        onClick={imprimirTicketCompleto}
      >
        🖨 Imprimir ticket
      </button>

      <input
        className="ventas-input"
        type="number"
        placeholder="Pago"
        value={pago}
        onChange={(e) => setPago(parseFloat(e.target.value))}
      />
      <button className="boton-cambio-joyvolt" onClick={calcularCambio}>
        Calcular Cambio
      </button>
      <h4>Cambio: ${cambio.toFixed(2)}</h4>
      <button className="boton-pagar-joyvolt" onClick={registrarVenta}>
        Pagar
      </button>

      <h3>Historial de Ventas</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Productos</th>
            <th>Precio Total</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((v) => (
            <tr key={v.id}>
              <td>{v.nombreCliente}</td>
              <td>
                {v.productos.map((p, i) => (
                  <div key={i}>
                    {p.nombreArticulo} - {p.cantidad} uds - $
                    {p.subtotal.toFixed(2)}
                  </div>
                ))}
              </td>
              <td>${v.precioTotal.toFixed(2)}</td>
              <td>{new Date(v.fecha).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ventas;
