// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";

import "./Simbolos.css";

// Arreglo de caracteres
const caracteres = [
  "space",
  "!",
  "comillas",
  "#",
  "$",
  "%",
  "&",
  "comilla",
  "(",
  ")",
  "*",
  "+",
];

const caracteres2 = [
  "<",
  "=",
  ">",
  "?",
  "@",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
];

const caracteres3 = [
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
];

const caracteres4 = ["T", "U", "V", "W", "x", "y", "z"];
// Arreglo con los nombres de los archivos de imagen (sin ruta)
const imagenes = [
  "01.png",
  "02.png",
  "03.png",
  "04.png",
  "05.png",
  "06.png",
  "07.png",
  "08.png",
  "09.png",
  "10.png",
  "11.png",
  "12.png",
];
const imagenes2 = [
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23.png",
  "24.png",
];

const imagenes3 = [
  "25.png",
  "26.png",
  "27.png",
  "28.png",
  "29.png",
  "30.png",
  "31.png",
  "32.png",
  "33.png",
  "34.png",
  "35.png",
  "36.png",
];

const imagenes4 = [
  "37.png",
  "38.png",
  "39.png",
  "40.png",
  "41.png",
  "42.png",
  "43.png",
];

const pasos = [
  {
    paso: "Paso 1",
    descripcion: "Abre la Play Store en tu celular",
    imagen: `${import.meta.env.BASE_URL}guia/playstore-icon.png`,
  },
  {
    paso: "Paso 2",
    descripcion: 'Da click en buscar y escribe el nombre de la app: "iLED PRO"',
    imagen: `${import.meta.env.BASE_URL}guia/lupa.png`,
  },
  {
    paso: "Paso 3",
    descripcion: "Verifica que el ícono coincida",
    imagen: `${import.meta.env.BASE_URL}guia/iconoapp.png`,
  },
  {
    paso: "Paso 4",
    descripcion: "Presiona Instalar y espera que se descargue",
    imagen: `${import.meta.env.BASE_URL}guia/instalar.png`,
  },
];

function capturarTabla(tabla, nombre) {
  html2canvas(tabla, { scale: 8 }).then(function (canvas) {
    const pngUrl = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${nombre}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
}

const Simbolos = () => {
  const tabla01Ref = useRef(null);
  const tabla02Ref = useRef(null);
  const tabla03Ref = useRef(null);
  const tabla04Ref = useRef(null);
  const tablatiposRef = useRef(null);
  const tablaterminosRef = useRef(null);

  const tablaStandardRef = useRef(null);
  const tablaBotonRojoRef = useRef(null);
  const tablaBotonVerdeRef = useRef(null);
  const tablaAplicacionRef = useRef(null);

  return (
    <div>
      <div ref={tabla01Ref}>
        <div className="titulo-simbolos">Tabla 01</div>
        <div className="tabla-simbolos">
          {caracteres.map((char, index) => (
            <div className="celda-simbolo" key={index}>
              <div className="caracter">{char}</div>
              <img
                src={`${import.meta.env.BASE_URL}simbolos/${imagenes[index]}`}
                alt={`Símbolo`}
                className="imagen-simbolo"
              />
            </div>
          ))}
        </div>
        <div className="pie-copyright">© 2025 JoyBoy</div>
      </div>

      <button
        className="boton-capturar-simbolos"
        onClick={() => capturarTabla(tabla01Ref.current, "Tabla01")}
      >
        📸 Capturar Tabla 01
      </button>

      <div ref={tabla02Ref}>
        <div className="titulo-simbolos">Tabla 02</div>
        <div className="tabla-simbolos">
          {caracteres2.map((char, index) => (
            <div className="celda-simbolo" key={index}>
              <div className="caracter">{char}</div>
              <img
                src={`${import.meta.env.BASE_URL}simbolos/${imagenes2[index]}`}
                alt={`Símbolo ${char}`}
                className="imagen-simbolo"
              />
            </div>
          ))}
        </div>
        <div className="pie-copyright">© 2025 JoyBoy</div>
      </div>
      <button
        className="boton-capturar-simbolos"
        onClick={() => capturarTabla(tabla02Ref.current, "Tabla02")}
      >
        📸 Capturar Tabla 02
      </button>

      <div ref={tabla03Ref}>
        <div className="titulo-simbolos">Tabla 03</div>
        <div className="tabla-simbolos">
          {caracteres3.map((char, index) => (
            <div className="celda-simbolo" key={index}>
              <div className="caracter">{char}</div>
              <img
                src={`${import.meta.env.BASE_URL}simbolos/${imagenes3[index]}`}
                alt={`Símbolo ${char}`}
                className="imagen-simbolo"
              />
            </div>
          ))}
        </div>
        <div className="pie-copyright">© 2025 JoyBoy</div>
      </div>
      <button
        className="boton-capturar-simbolos"
        onClick={() => capturarTabla(tabla03Ref.current, "Tabla03")}
      >
        📸 Capturar Tabla 03
      </button>

      <div ref={tabla04Ref}>
        <div className="titulo-simbolos">Tabla 04</div>
        <div className="tabla-simbolos-grandes">
          {caracteres4.map((char, index) => (
            <div className="celda-simbolo" key={index}>
              <div className="caracter">{char}</div>
              <img
                src={`${import.meta.env.BASE_URL}simbolos/${imagenes4[index]}`}
                alt={`Símbolo ${char}`}
                className="imagen-simbolo-grande"
              />
            </div>
          ))}
        </div>
        <div className="pie-copyright">© 2025 JoyBoy</div>
      </div>
      <button
        className="boton-capturar-simbolos"
        onClick={() => capturarTabla(tabla04Ref.current, "Tabla04")}
      >
        📸 Capturar Tabla 04
      </button>

      <div>
        <table className="tabla-tipos" ref={tablatiposRef}>
          <thead>
            <tr>
              <th colSpan={2} className="celda-tipos-titulo">
                Precio de Letreros iLED PRO
              </th>
            </tr>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <td className="celda-vacia"></td>
            </tr>
            <tr>
              <td className="celda-tipos-encabezado" colSpan={2}>
                $ 1,800.00
              </td>
            </tr>
            <tr>
              <td className="celda-tipos">Dimensiones: </td>
              <td className="celda-tipos">51 cm. x 13 cm. x 3 cm.</td>
            </tr>
            <tr>
              <td className="celda-tipos">Resolucion: </td>
              <td className="celda-tipos">1024 Leds. 64 px x 16 px</td>
            </tr>
            <tr>
              <td className="celda-vacia"></td>
            </tr>
            <tr>
              <td className="celda-tipos-encabezado" colSpan={2}>
                $ 2,400.00
              </td>
            </tr>
            <tr>
              <td className="celda-tipos">Dimensiones: </td>
              <td className="celda-tipos">64 cm. x 16 cm. x 3 cm.</td>
            </tr>
            <tr>
              <td className="celda-tipos">Resolucion: </td>
              <td className="celda-tipos">1600 Leds. 80 px x 20 px.</td>
            </tr>
            <tr>
              <td className="celda-vacia"></td>
            </tr>
            <tr>
              <td className="celda-tipos-encabezado" colSpan={2}>
                $ 2,950.00
              </td>
            </tr>
            <tr>
              <td className="celda-tipos">Dimensiones: </td>
              <td className="celda-tipos">64 cm. x 16 cm. x 3 cm.</td>
            </tr>
            <tr>
              <td className="celda-tipos">Resolucion: </td>
              <td className="celda-tipos">4096 Leds. 128 px x 32 px.</td>
            </tr>
            <tr>
              <td className="celda-vacia"></td>
              <br></br>
            </tr>
            <tr>
              <td className="terminos" colSpan={2}>
                Pido un anticipo del 50%. Y al entregar pido el completo.
              </td>
            </tr>
            <tr>
              <td className="terminos" colSpan={2}>
                1 mes de garantía. A partir del dia de entrega del letrero.
              </td>
            </tr>
            <tr>
              <td className="terminos" colSpan={2}>
                Aplican terminos y condiciones.
              </td>
            </tr>
            <tr>
              <td className="terminos" colSpan={2}>
                Sigue las recomendaciones del videotutorial.
              </td>
            </tr>
            <tr>
              <td className="terminos" colSpan={2}>
                ☎ 231 159 1893. Solo Whatsapp.
              </td>
            </tr>
            <tr>
              <td className="terminos" colSpan={2}>
                ☎ 231 128 4412. Solo Whatsapp.
              </td>
            </tr>
            <tr>
              <td className="copyright" colSpan={2}>
                ©2025 JoyBoy & Ferxxo & JoyVolt Corporation.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        className="boton-capturar-simbolos"
        onClick={() => capturarTabla(tablatiposRef.current, "Tabla Precios")}
      >
        📸 Capturar Tabla Precios
      </button>
      <br></br>
      <br></br>

      <div>
        <table className="tabla-condiciones" ref={tablaterminosRef}> 
          <thead>
            <tr>
              <th colSpan={2} className="celda-condiciones-titulo">
                Términos y Condiciones de Garantía
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="celda-condiciones-subtitulo" colSpan={2}>
                Vigencia de Garantía
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="celda-condiciones">
                La garantía tiene una vigencia de <strong>un (1) mes</strong> a partir de la fecha de entrega del producto.
              </td>
            </tr>

            <tr>
              <td className="celda-condiciones-subtitulo" colSpan={2}>
                Cobertura
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="celda-condiciones">
                Cubre exclusivamente <strong>fallas de fabricación</strong> o <strong>defectos en los componentes internos</strong> del letrero iLED PRO.
              </td>
            </tr>

            <tr>
              <td className="celda-condiciones-subtitulo" colSpan={2}>
                Exclusiones
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="celda-condiciones">
                La garantía quedará anulada en los siguientes casos:
                <ul>
                  <li>Manipulación, apertura o modificación del letrero por personal no autorizado.</li>
                  <li>Daños por sobrecarga eléctrica, cortocircuito o instalación incorrecta.</li>
                  <li>Uso de fusible distinto al especificado (debe ser de <strong>5 amperios</strong>).</li>
                  <li>Golpes, caídas, quemaduras o cualquier daño físico evidente.</li>
                  <li>Uso inadecuado o en ambientes no recomendados (humedad, calor excesivo, exposición al agua).</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="celda-condiciones-subtitulo" colSpan={2}>
                Procedimiento para aplicar la garantía
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="celda-condiciones">
                El cliente deberá presentar el letrero junto con el <strong>comprobante de compra</strong>. Si el producto tiene una falla cubierta por la garantía y <strong>hay unidades en existencia</strong>, se entregará un reemplazo inmediato. Mientras tanto, el letrero original será enviado al fabricante para evaluación. <strong>El cliente no asumirá costos</strong> de envío o devolución, estos serán cubiertos por el proveedor.
              </td>
            </tr>

            <tr>
              <td className="celda-condiciones-subtitulo" colSpan={2}>
                Servicio posterior al periodo de garantía
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="celda-condiciones">
                Una vez vencido el periodo de garantía, cualquier reparación estará sujeta a evaluación técnica. <strong>Los costos de reparación, repuestos y gastos de envío</strong> (ida y vuelta por paquetería) deberán ser cubiertos por el cliente.
              </td>
            </tr>

            <tr>
              <td className="celda-condiciones-subtitulo" colSpan={2}>
                Recomendaciones de uso
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="celda-condiciones">
                Se recomienda seguir al pie de la letra las indicaciones del videotutorial entregado. Una instalación adecuada garantiza un funcionamiento seguro y óptimo.
              </td>
            </tr>

            <tr>
              <td className="celda-condiciones-subtitulo" colSpan={2}>
                Contacto
              </td>
            </tr>
            <tr>
              <td className="celda-contacto" colSpan={2}>
                Atención exclusivamente por WhatsApp:
                <ul>
                  <li>☎ 231 159 1893</li>
                  <li>☎ 231 128 4412</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="copyright" colSpan={2}>
                ©2025 JoyBoy & Ferxxo & JoyVolt Corporation. Todos los derechos reservados.
              </td>
            </tr>
          </tbody>
        </table>


      </div>
      <button
        className="boton-capturar-simbolos"
        onClick={() => capturarTabla(tablaterminosRef.current, "Tabla Terminos")}
      >
        📸 Capturar Tabla Terminos
      </button>
      <br></br>
      <br></br>


      <div ref={tablaStandardRef}>
        <div className="titulo-simbolos">Estandarizacion de caracteres</div>

        <div className="tabla-simbolos-rutas">
          <div className="caracter-titulo"> Uso</div>
          <div className="caracter-titulo"> Ruta</div>
          <div className="caracter-titulo"> Ejemplo</div>
        </div>

        <div className="tabla-simbolos-rutas">
          <div className="caracter-talzintan"> Punto antes</div>
          <div className="caracter-talzintan"> Parajes</div>
          <div className="caracter-talzintan"> .47</div>
        </div>
        <div className="tabla-simbolos-rutas">
          <div className="caracter-talzintan"> Punto despues</div>
          <div className="caracter-talzintan"> Humeros</div>
          <div className="caracter-talzintan"> 47.</div>
        </div>
        <div className="tabla-simbolos-rutas">
          <div className="caracter-sosa"> Punto antes</div>
          <div className="caracter-sosa"> Aguardientera</div>
          <div className="caracter-sosa"> .135</div>
        </div>
        <div className="tabla-simbolos-rutas">
          <div className="caracter-sosa"> Punto despues</div>
          <div className="caracter-sosa"> Huapaltepec</div>
          <div className="caracter-sosa"> 30.</div>
        </div>

        <div className="tabla-simbolos-rutas">
          <div className="caracter-tezo"> Punto antes</div>
          <div className="caracter-tezo"> Tenextepec</div>
          <div className="caracter-tezo"> .133</div>
        </div>

        <div className="tabla-simbolos-rutas">
          <div className="caracter-c"> Guion antes</div>
          <div className="caracter-c"> C25</div>
          <div className="caracter-c"> -25</div>
        </div>
        <div className="pie-copyright">© 2025 JoyBoy</div>
      </div>

      <button
        className="boton-capturar-simbolos"
        onClick={() =>
          capturarTabla(tablaStandardRef.current, "Tabla caracteres")
        }
      >
        📸 Capturar Tabla Caracteres
      </button>

      <br></br>

      <div className="contenedor-tabla">
        <table className="tabla-boton" ref={tablaBotonRojoRef}>
          <thead>
            <tr>
              <th colSpan="2">
                <div className="titulo-iled">
                  <span className="iled-pro">iLED PRO</span>
                </div>
              </th>
            </tr>
            <tr>
              <th colSpan={2} className="imagen-boton">
                <div className="paso-imagen-boton">
                  <img
                    src={`${import.meta.env.BASE_URL}guia/boton-rojo.png`}
                    alt={"Boton rojo"}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th colSpan="2" className="titulo-rojo">
                <span className="icono-boton rojo"></span> Botón Rojo - Ajuste
                de Brillo
              </th>
            </tr>
            <tr>
              <td colSpan="2" className="descripcion">
                Este botón permite modificar fácilmente el nivel de brillo de la
                pantalla LED para adaptarlo a distintas condiciones de luz.
              </td>
            </tr>
            <tr>
              <th>Acción</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Presionar una vez</td>
              <td>
                Aumenta el brillo en incrementos del 10%. Al llegar al 100%,
                vuelve a 0%.
              </td>
            </tr>
            <tr>
              <td>Presionar dos veces seguidas</td>
              <td>
                Disminuye el brillo en decrementos del 10%. Al llegar al 0%,
                vuelve a 100%.
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} className="pie">
                © JoyBoy & Ferxxo & JoyVolt Corporation
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <button
        className="boton-capturar-simbolos"
        onClick={() =>
          capturarTabla(tablaBotonRojoRef.current, "Tabla boton rojo")
        }
      >
        📸 Capturar Tabla Boton Rojo
      </button>

      <br></br>

      <div className="contenedor-tabla">
        <table className="tabla-boton" ref={tablaBotonVerdeRef}>
          <thead>
            <tr>
              <th colSpan="2">
                <div className="titulo-iled">
                  <span className="iled-pro">iLED PRO</span>
                </div>
              </th>
            </tr>
            <tr>
              <th colSpan={2} className="imagen-boton">
                <div className="paso-imagen-boton">
                  <img
                    src={`${import.meta.env.BASE_URL}guia/boton-verde.png`}
                    alt={"Boton verde"}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th colSpan="2" className="titulo-verde">
                <span className="icono-boton verde"></span> Botón Verde - Cambio
                de Ruta y Modo
              </th>
            </tr>
            <tr>
              <td colSpan="2" className="descripcion">
                Este botón permite cambiar de ruta y alternar entre la
                reproducción de GIFs animados y el modo de letrero LED.
              </td>
            </tr>
            <tr>
              <th>Acción</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Presionar una vez</td>
              <td>
                Cambia la ruta en orden ascendente (0 a 39). Si está en 39,
                vuelve a 0.
              </td>
            </tr>
            <tr>
              <td>Presionar dos veces seguidas</td>
              <td>
                Cambia la ruta en orden descendente (39 a 0). Si está en 0,
                vuelve a 39.
              </td>
            </tr>
            <tr>
              <td>Mantener presionado</td>
              <td>
                Alterna entre la reproducción de GIFs animados (Ojos 👀) y el
                modo de letrero LED.
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="pie" colSpan={2}>
                © JoyBoy & Ferxxo & JoyVolt Corporation
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <button
        className="boton-capturar-simbolos"
        onClick={() =>
          capturarTabla(tablaBotonVerdeRef.current, "Tabla boton verde")
        }
      >
        📸 Capturar Tabla Boton Verde
      </button>

      <br></br>

      <div className="guia-fondo">
        <table className="guia-tabla" ref={tablaAplicacionRef}>
          <tbody>
            <tr>
              <th>Guía rápida para instalar la aplicación iLED PRO</th>
            </tr>
            {pasos.map((item, index) => (
              <tr key={index} className={`guia-fila paso-color-${index + 1}`}>
                <td>
                  <div className="paso-contenido">
                    <div className="paso-numero">{item.paso}</div>
                    <div className="paso-descripcion">{item.descripcion}</div>
                    <div
                      className={
                        index === 2 || index === 3
                          ? "paso-imagen paso-imagen-grande"
                          : "paso-imagen"
                      }
                    >
                      <img src={item.imagen} alt={item.paso} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="pie">© JoyBoy & Ferxxo & JoyVolt Corporation</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <button
        className="boton-capturar-simbolos"
        onClick={() =>
          capturarTabla(tablaAplicacionRef.current, "Tabla aplicacion")
        }
      >
        📸 Capturar Tabla Aplicacion
      </button>

      <br></br>
      <br></br>

      <div className="imagen-guia">
        <img src={`${import.meta.env.BASE_URL}guia/botones_app.png`} alt={"Guia botones app"} />
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default Simbolos;
