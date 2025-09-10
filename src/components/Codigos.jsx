/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Codigos.css";
import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";

const Codigos = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [activo, setActivo] = useState(null);
  // Estado para la imagen seleccionada
  const [imagenSeleccionada, setImagenSeleccionada] = useState("./codigos/sinimagen.png");

  const tabla12231344Ref = useRef(null);
  const tabla6170660Ref = useRef(null);
  const tabla15023616Ref = useRef(null);
  const tabla4323804Ref = useRef(null);
  const tabla4368628Ref = useRef(null);
  const tabla4381120Ref = useRef(null);
  const tabla5533344Ref = useRef(null);
  const tabla5557620Ref = useRef(null);
  const tabla5569684Ref = useRef(null);
  const tabla5642500Ref = useRef(null);
  const tabla5648864Ref = useRef(null);
  const tabla15216080Ref = useRef(null);
  const tabla5571816Ref = useRef(null);
  const tabla5638324Ref = useRef(null);
  const tabla5633544Ref = useRef(null);
  const tabla5537304Ref = useRef(null);
  const tabla5628772Ref = useRef(null);
  const tabla5556232Ref = useRef(null);
  const tabla8979088Ref = useRef(null);
  const tabla4548580Ref = useRef(null);
  const tabla4586008Ref = useRef(null);
  const tabla4601152Ref = useRef(null);
  const tabla5654852Ref = useRef(null);
  const tabla4582240Ref = useRef(null);
  const tabla4546408Ref = useRef(null);
  const tabla4602448Ref = useRef(null);
  const tabla12259500Ref = useRef(null);
  const tabla5558608Ref = useRef(null);
  const tabla5595484Ref = useRef(null);
  const tabla5614692Ref = useRef(null);
  const tabla5638244Ref = useRef(null);
  const tabla5658184Ref = useRef(null);
  const tabla5623036Ref = useRef(null);
  const tabla4546448Ref = useRef(null);
  const tabla5535508Ref = useRef(null);
  const tabla5578236Ref = useRef(null);
  const tabla5637340Ref = useRef(null);
  const tabla5657716Ref = useRef(null);
  const tabla5971280Ref = useRef(null); //hd 800
  const tabla12953232Ref = useRef(null); //hd 800
  const tabla7822076Ref = useRef(null); //hd 1000
  const tabla4369196Ref = useRef(null); // 1000
  const tabla4552956Ref = useRef(null); // 1000
  const tabla4583752Ref = useRef(null); // 1000
  const tabla4601216Ref = useRef(null); // 1000
  const tabla5564844Ref = useRef(null); // 1000
  const tabla5621068Ref = useRef(null); // 1000
  const tabla4583552Ref = useRef(null); // 1000
  const tabla482720Ref = useRef(null); // 1000
  const tabla4545128Ref = useRef(null); //1000
  const tabla5651884Ref = useRef(null); //1000
  const tabla4602144Ref = useRef(null); //1000
  const tabla14524944Ref = useRef(null); //1000
  const tabla5541544Ref = useRef(null); //1000
  const tabla5564124Ref = useRef(null); //1000
  const tabla4583360Ref = useRef(null); //1000
  const tabla6672384Ref = useRef(null); //1000
  const tabla13006992Ref = useRef(null); //1000
  const tabla6582384Ref = useRef(null); //1000
  const tabla4cf33c004f8cRef = useRef(null); //1000
  const tabla6c5164a84320Ref = useRef(null); //1000
  const tabla40ab65a84320Ref = useRef(null); //1000
  const tabla507f64a84320Ref = useRef(null); //1000
  const tablaa07f2765b7a0Ref = useRef(null); //1000
  const tablab826550b65f4Ref = useRef(null); //1000
  const tablad8d165a84320Ref = useRef(null); //1000
  const tablaf870dd895dc0Ref = useRef(null); //1000
  const tabla1c0ac92f2b14Ref = useRef(null); //1000
  const tabla507365a84320Ref = useRef(null); //1000
  const tabla985565a84320Ref = useRef(null); //1000
  const tablad4f364a84320Ref = useRef(null); //1000
  const tabla2c6b2c65b7a0Ref = useRef(null); //1000
  const tabla2c7a64a84320Ref = useRef(null); //1000
  const tabla2cd864a84320Ref = useRef(null); //1000
  const tabla3ce02b65b7a0Ref = useRef(null); //1000
  const tabla4c6ddd895dc0Ref = useRef(null); //1000
  const tabla585e45c3dc24Ref = useRef(null); //1000
  const tabla089664a84320Ref = useRef(null); //1000
  const tabla209e65a84320Ref = useRef(null); //1000
  const tabla306c64a84320Ref = useRef(null); //1000
  const tabla084764a84320Ref = useRef(null); //1000
  const tablab4b665a84320Ref = useRef(null); //1000
  const tablabcaedc895dc0Ref = useRef(null); //1000
  const tablac83546c3dc24Ref = useRef(null); //1000
  const tablac4c564a84320Ref = useRef(null); //1000
  const tabla5527248Ref = useRef(null); //1000
  const tabla5607896Ref = useRef(null); //1000
  const tabla4550136Ref = useRef(null); //1000
  const tablaf4a8422a13d8Ref = useRef(null); //1000 // Lobo rojo va en enero

  //25 JUNIO
  const tabla8cddf6641d44Ref = useRef(null); //1000
  const tabla14b0bc641d44Ref = useRef(null); //1000
  const tabla40fcbd641d44Ref = useRef(null); //1000
  const tabla48c0f6641d44Ref = useRef(null); //1000
  const tabla0890bc641d44Ref = useRef(null); //1000
  const tabla6091bc641d44Ref = useRef(null); //1000
  const tabla8429bd641d44Ref = useRef(null); //1000
  const tabladce5f6641d44Ref = useRef(null); //1000
  const tablae8afbc641d44Ref = useRef(null); //1000
  const tablafcb2f6641d44Ref = useRef(null); //1000
  const tabla34bc64a84320Ref = useRef(null); //1000

  //01 DE JULIO
  const tablaac10bb57ddc4Ref = useRef(null); //1000
  //04 DE JULIO
  const tabla4549032Ref = useRef(null); //1000
  //10 DE JULIO
  const tabla2ca4bc641d44Ref = useRef(null); //1000
  const tabla6c3e64a84320Ref = useRef(null); //1000
  const tabla344ef6641d44Ref = useRef(null); //1000
  const tabla9095bc641d44Ref = useRef(null); //1000
  const tablaa85ef6641d44Ref = useRef(null); //1000
  const tablad4f9bd641d44Ref = useRef(null); //1000
  const tablad402be641d44Ref = useRef(null); //1000
  const tabla5586992Ref = useRef(null); //1000

  //07 DE AGOSTO 2025
  const tabla3cc11dab4c24Ref = useRef(null); //1000
  const tabla4caabc641d44Ref = useRef(null); //1000
  const tabla6c3e64a84320rRef = useRef(null); //1000
  const tabla048ebc641d44Ref = useRef(null); //1000
  const tablacce0540b65f4Ref = useRef(null); //1000
  const tabladcf9412a13d8Ref = useRef(null); //1000

  //15 DE AGOSTO 2025
  const tabla0c390486e694Ref = useRef(null); //1000
  const tabla80ed540b65f4Ref = useRef(null); //1000
  const tablafc5a77cd31e8Ref = useRef(null); //1000

  //19 DE AGOSTO 2025
  const tabla10afbc641d44Ref = useRef(null); //1000
  const tabla4545292Ref = useRef(null); //1000
  // const tabla10afbc641d44Ref = useRef(null); //1000

  




  const capturarTabla = (tabla) => {
    if (!tabla) return;

    html2canvas(tabla).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const link = document.createElement("a");

      // Obtener el nombre desde la celda de la serie (por ejemplo)
      const nombreSerie =
        tabla.querySelector(".celda-codigos-serie")?.textContent.trim() ||
        "captura";

      link.download = `${nombreSerie}.png`;
      link.href = imgData;
      link.click();
    });
  };

  const capturarTablaLarga = (tabla) => {
    if (!tabla) return;

    html2canvas(tabla).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const link = document.createElement("a");

      // Obtener el nombre desde la celda de la serie (por ejemplo)
      const nombreSerie =
        tabla.querySelector(".celda-codigos-serie-largo")?.textContent.trim() ||
        "captura";

      link.download = `${nombreSerie}.png`;
      link.href = imgData;
      link.click();
    });
  };

  // Lista de opciones
  const opcionesImagen = [
    { label: "Sin imagen", value: "./codigos/sinimagen.png" },
    { label: "Urbano Verde", value: "./codigos/urbanosverdes.png" },
    { label: "Urbano Rojo", value: "./codigos/urbanosrojos.png" },
    { label: "Ruta 01", value: "./codigos/ruta01.png" },
    { label: "Ruta 03", value: "./codigos/ruta03.png" },
  ];

  const secciones = [
    { id: "octubre-2024", titulo: "Oct 2024" },
    { id: "noviembre-2024", titulo: "Nov 2024" },
    { id: "enero-2025", titulo: "Ene 2025" },
    { id: "febrero-2025", titulo: "Feb 2025" },
    { id: "marzo-2025", titulo: "Mar 2025" },
    { id: "abril-2025", titulo: "Abr 2025" },
    { id: "mayo-2025", titulo: "May 2025" },
    { id: "junio-2025", titulo: "Jun 2025" },
    { id: "julio-2025", titulo: "Jul 2025" },
    { id: "agosto-2025", titulo: "Ago 2025" },
  ];

  const refs = useRef(
    secciones.reduce((acc, sec) => {
      acc[sec.id] = React.createRef();
      return acc;
    }, {})
  );

  useEffect(() => {
    const handleScroll = () => {
      // eslint-disable-next-line no-unused-vars
      const scrollY = window.scrollY;

      for (const sec of secciones) {
        const el = refs.current[sec.id].current;
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top <= 100 && top >= -el.offsetHeight + 100) {
            setActivo(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [secciones]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActivo(id);
      //setMostrarMenu(false); // opcional: cierra el menú después del click
    }
  };

  return (
    <div className="contenedor-codigos-joyvolt">
      {/* Botón flotante en la esquina superior derecha */}
      <button
        className="toggle-boton"
        onClick={() => setMostrarMenu(!mostrarMenu)}
      >
        {mostrarMenu ? "✖" : "☰"}
      </button>

      {/* Menú flotante */}
      {mostrarMenu && (
        <div className="menu-flotante">
          {secciones.map((sec) => (
            <button
              key={sec.id}
              className={`boton-menu ${activo === sec.id ? "activo" : ""}`}
              onClick={() => scrollTo(sec.id)}
            >
              {sec.titulo}
            </button>
          ))}
        </div>
      )}

      <section
        id="octubre-2024"
        ref={refs.current["octubre-2024"]}
        className="seccion-codigos"
      >
        <h1 className="titulo-mes-codigos">OCTUBRE 2024</h1>
        <div className="separador-codigos-joyvolt"></div>

        <span>Fecha de entrega desconocida</span>
        <span>Nombre desconocido</span>
        <table ref={tabla12231344Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n12231344</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">11-10-2024</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src={`${import.meta.env.BASE_URL
                  }codigos/01-OCTUBRE-2024/11-10-2024-SE-n12231344.png`}
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla12231344Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span>Fecha de entrega desconocida</span>
        <span>Nombre desconocido</span>
        <table ref={tabla8979088Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n8979088</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">28-10-2024</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src={`${import.meta.env.BASE_URL
                  }codigos/01-OCTUBRE-2024/28-10-2024 SE-n8979088.png`}
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla8979088Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>
      </section>

      {/* NOVIEMBRE 2024 * NOVIEMBRE 2024 * NOVIEMBRE 2024 * NOVIEMBRE 2024 * NOVIEMBRE 2024 * NOVIEMBRE 2024*/}
      {/* NOVIEMBRE 2024 * NOVIEMBRE 2024 * NOVIEMBRE 2024 * NOVIEMBRE 2024 * NOVIEMBRE 2024 * NOVIEMBRE 2024*/}
      {/* NOVIEMBRE 2024 * NOVIEMBRE 2024 * NOVIEMBRE 2024 * NOVIEMBRE 2024 * NOVIEMBRE 2024 * NOVIEMBRE 2024*/}

      <section
        id="noviembre-2024"
        ref={refs.current["noviembre-2024"]}
        className="seccion-codigos"
      >
        <h1 className="titulo-mes-codigos">NOVIEMBRE 2024</h1>

        <div className="separador-codigos-joyvolt"></div>
        <span>Entregado sabado 16 de noviembre de 2024. Por abraham.</span>
        <span>El Tosko Rojo 47</span>
        <span>Version 3.0</span>
        <table ref={tabla5971280Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5971280</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">11-11-2024</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosrojos.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/02 NOVIEMBRE 2024/11-11-2024 SE-n5971280.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5971280Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span>Entregado martes 04 de marzo de 2025. Por abraham.</span>
        <span>Ruta 01 Unidad 111</span>
        <table ref={tabla6170660Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n6170660</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">11-11-2024</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta01.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/02 NOVIEMBRE 2024/11-11-2024 SE-n6170660.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla6170660Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span>Entregado sabado 16 de noviembre de 2024. Por abraham.</span>
        <span>Ramiro Rojo 33</span>
        <span>Version 3.0</span>
        <table ref={tabla7822076Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n7822076</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">11-11-2024</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosrojos.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/02 NOVIEMBRE 2024/11-11-2024 SE-n7822076.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla7822076Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span>Entregado sabado 16 de noviembre de 2024. Por abraham.</span>
        <span>Oscar Julian Rojo 15</span>
        <span>Version 3.0</span>
        <table ref={tabla12953232Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n12953232</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">11-11-2024</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosrojos.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/02 NOVIEMBRE 2024/11-11-2024 SE-n12953232.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla12953232Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
        <span className="detalle-codigos">
          Era de heriberto rojo 20 y Se le vendio a Gabriel Bandala
        </span>
        <table ref={tabla15023616Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n15023616</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">11-11-2024</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta01.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/02 NOVIEMBRE 2024/11-11-2024 SE-n15023616.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla15023616Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega desconocida. No lo vendimos nosotros, lo vendio
          Tadeo.)
        </span>
        <span className="detalle-codigos">Samuel Rojo 18</span>
        <table ref={tabla482720Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n482720</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">18-11-2024</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosrojos.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/02 NOVIEMBRE 2024/15-11-2024 SE-n482720.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla482720Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega 22 de noviembre de 2024)
        </span>
        <span className="detalle-codigos">
          Lo tenia la muerte, se lo vendio a Gabriel Bandala y Gabriel Bandala
          se lo vendio a uno de Ruta 01
        </span>
        <table ref={tabla12259500Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n12259500</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">18-11-2024</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta01.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/02 NOVIEMBRE 2024/18-11-2024 SE-n12259500.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla12259500Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>
      </section>

      {/*ENERO 2025 * ENERO 2025 * ENERO 2025 * ENERO 2025 * ENERO 2025 * ENERO 2025 * ENERO 2025 */}
      {/*ENERO 2025 * ENERO 2025 * ENERO 2025 * ENERO 2025 * ENERO 2025 * ENERO 2025 * ENERO 2025 */}
      {/*ENERO 2025 * ENERO 2025 * ENERO 2025 * ENERO 2025 * ENERO 2025 * ENERO 2025 * ENERO 2025 */}

      <section
        id="enero-2025"
        ref={refs.current["enero-2025"]}
        className="seccion-codigos"
      >
        <div className="separador-codigos-joyvolt"></div>
        <h1 className="titulo-mes-codigos">ENERO 2025</h1>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
        <span className="detalle-codigos">Lo trae uno de ruta 01</span>
        <table ref={tabla4323804Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4323804</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-01-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta01.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/03 ENERO 2025/13-01-2025 SE-n4323804.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4323804Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
        <span className="detalle-codigos">
          Originalmente de la muerte 46 y actualmente lo trae lobo 28
        </span>
        <table ref={tabla4368628Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4368628</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-01-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosrojos.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/03 ENERO 2025/13-01-2025 SE-n4368628.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4368628Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Martes 01 de julio 2025)</span>
        <span className="detalle-codigos">
          Originalmente de la muerte 46 y actualmente lo trae lobo 28, Se mando
          a actualizar a la version 4.1 y cambio de numero de serie. Pero sigue
          siendo el mismo de arriba.
        </span>
        <table ref={tablaf4a8422a13d8Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-nf4a8422a13d8</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-01-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosrojos.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/03 ENERO 2025/13-01-2025 SE-nf4a8422a13d8.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tablaf4a8422a13d8Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
        <span className="detalle-codigos">Verde</span>
        <table ref={tabla4369196Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4369196</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-01-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/03 ENERO 2025/13-01-2025 SE-n4369196.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4369196Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega viernes 17 de enero de 2025)
        </span>
        <span className="detalle-codigos">(Daniel Rojo 27)</span>
        <table ref={tabla4545128Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4545128</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-01-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosrojos.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/03 ENERO 2025/13-01-2025 SE-n4545128.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4545128Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <table ref={tabla4546448Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4546448</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">21-01-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/03 ENERO 2025/21-01-2025 SE-n4546448.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4546448Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
        <span className="detalle-codigos">Nombre Desconocido</span>
        <table ref={tabla4548580Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4548580</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">21-01-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/03 ENERO 2025/21-01-2025 SE-n4548580.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4548580Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 24 de enero de 2025)
        </span>
        <span className="detalle-codigos">Javier Rojo 21</span>
        <table ref={tabla4583552Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4583552</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">21-01-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosrojos.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/03 ENERO 2025/21-01-2025 SE-n4583552.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4583552Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
        <span className="detalle-codigos">Nombre Desconocido</span>
        <table ref={tabla4586008Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4586008</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">21-01-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/03 ENERO 2025/21-01-2025 SE-n4586008.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4586008Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
        <span className="detalle-codigos">Nombre Desconocido</span>
        <table ref={tabla4601152Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4601152</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">21-01-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/03 ENERO 2025/21-01-2025 SE-n4601152.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4601152Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>
      </section>

      {/* FEBRERO 2025 * FEBRERO 2025 * FEBRERO 2025 * FEBRERO 2025 * FEBRERO 2025 * FEBRERO 2025*/}
      {/* FEBRERO 2025 * FEBRERO 2025 * FEBRERO 2025 * FEBRERO 2025 * FEBRERO 2025 * FEBRERO 2025*/}
      {/* FEBRERO 2025 * FEBRERO 2025 * FEBRERO 2025 * FEBRERO 2025 * FEBRERO 2025 * FEBRERO 2025*/}

      <section
        id="febrero-2025"
        ref={refs.current["febrero-2025"]}
        className="seccion-codigos"
      >
        <div className="separador-codigos-joyvolt"></div>
        <h1 className="titulo-mes-codigos">FEBRERO 2025</h1>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Entregado sabado 08 de marzo de 2025. Por fernando.)
        </span>
        <span className="detalle-codigos">
          (Lo trae una camioneta de urbanos verdes)
        </span>
        <table ref={tabla4381120Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4381120</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">01-02-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/04 FEBRERO 2025/01-02-2025 SE-n4381120.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4381120Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega. Viernes 07 de febrero de 2025. Por Fernando)
        </span>
        <span className="detalle-codigos">
          (Lo trae una camioneta de urbanos verdes)
        </span>
        <span className="detalle-codigos">(Version 3.2)</span>
        <table ref={tabla4602144Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4602144</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">04-02-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/04 FEBRERO 2025/04-02-2025 SE-n4602144.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4602144Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">
          (Se mando a actualizar con cornejo, regreso con fecha del 29-04-2025.
          se actualizo a la version 3.7)
        </span>
        <table ref={tabla5533344Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5533344</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">16-02-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/04 FEBRERO 2025/16-02-2025 SE-n5533344.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5533344Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega viernes 21 de febrero)
        </span>
        <span className="detalle-codigos">(Ruta 01 Unidad 34)</span>
        <table ref={tabla5557620Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5557620</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">16-02-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta01.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/04 FEBRERO 2025/16-02-2025 SE-n5557620.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5557620Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <table ref={tabla5569684Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5569684</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">16-02-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/04 FEBRERO 2025/16-02-2025 SE-n5569684.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5569684Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Entregado sabado 08 de marzo 2025. Por fernando)
        </span>
        <span className="detalle-codigos">
          (Lo trae una camioneta de urbanos verdes)
        </span>
        <table ref={tabla5633544Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5633544</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">16-02-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/04 FEBRERO 2025/16-02-2025 SE-n5633544.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5633544Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
        <span className="detalle-codigos">(Luna. Urbano rojo 39.)</span>
        <table ref={tabla5642500Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5642500</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">16-02-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosrojos.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/04 FEBRERO 2025/16-02-2025 SE-n5642500.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5642500Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <table ref={tabla5648864Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5648864</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">16-02-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/04 FEBRERO 2025/16-02-2025 SE-n5648864.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5648864Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <table ref={tabla15216080Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n15216080</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">16-02-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/04 FEBRERO 2025/16-02-2025 SE-n15216080.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla15216080Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega jueves 27 de febrero)
        </span>
        <span className="detalle-codigos">(Ruta 03 Unidad 23)</span>
        <table ref={tabla5571816Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5571816</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">18-02-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta03.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/04 FEBRERO 2025/18-02-2025 SE-n5571816.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5571816Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega desconocida. Vendido por Tadeo.)</span>
        <span className="detalle-codigos">(Alejandro Rojo 30)</span>
        <table ref={tabla5638324Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5638324</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">20-02-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosrojos.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/04 FEBRERO 2025/20-02-2025 SE-n5638324.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5638324Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>
      </section>

      {/* MARZO 2025 * MARZO 2025 * MARZO 2025 * MARZO 2025 * MARZO 2025 * MARZO 2025 * MARZO 2025 */}
      {/* MARZO 2025 * MARZO 2025 * MARZO 2025 * MARZO 2025 * MARZO 2025 * MARZO 2025 * MARZO 2025 */}
      {/* MARZO 2025 * MARZO 2025 * MARZO 2025 * MARZO 2025 * MARZO 2025 * MARZO 2025 * MARZO 2025 */}

      <section
        id="marzo-2025"
        ref={refs.current["marzo-2025"]}
        className="seccion-codigos"
      >
        <h1 className="titulo-mes-codigos">MARZO 2025</h1>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocido)</span>
        <span className="detalle-codigos">(Ruta 01 #81)</span>
        <span className="detalle-codigos">(version 3.6)</span>
        <table ref={tabla5556232Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5556232</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">11-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta01.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/11-03-2025 SE-n5556232.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5556232Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Domingo 23 de marzo)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version Desconocida)</span>
        <table ref={tabla4546408Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4546408</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">12-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/12-03-2025 SE-n4546408.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4546408Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Domingo 23 de marzo)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version Desconocida)</span>
        <table ref={tabla4582240Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4582240</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">12-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/12-03-2025 SE-n4582240.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4582240Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Domingo 23 de marzo)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version desconocida)</span>
        <table ref={tabla4602448Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4602448</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">12-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/12-03-2025 SE-n4602448.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4602448Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega sabado 15 de marzo)
        </span>
        <span className="detalle-codigos">(Heriberto Rojo 20)</span>
        <span className="detalle-codigos">(version 3.6)</span>
        <table ref={tabla5537304Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5537304</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">12-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosrojos.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/12-03-2025 SE-n5537304.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5537304Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega sabado 15 de marzo)
        </span>
        <span className="detalle-codigos">
          (JoyBoy Rojo 36. Se le vendio a Ruta 02 Numero 88)
        </span>
        <span className="detalle-codigos">(Letrero grande version 3.6)</span>
        <table ref={tabla5628772Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5628772</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">12-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/12-03-2025 SE-n5628772.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5628772Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Domingo 23 de marzo)
        </span>
        <span className="detalle-codigos">(Urbano verde)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5558608Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5558608</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">17-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/17-03-2025 SE-n5558608.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5558608Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Domingo 23 de marzo)
        </span>
        <span className="detalle-codigos">(Ruta 01 Unidad 145)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5595484Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5595484</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">17-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta01.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/17-03-2025 SE-n5595484.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5595484Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Domingo 23 de marzo)
        </span>
        <span className="detalle-codigos">(Fausto Rojo 46)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5614692Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5614692</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">17-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosrojos.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/17-03-2025 SE-n5614692.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5614692Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Domingo 23 de marzo)
        </span>
        <span className="detalle-codigos">(Urbano verde)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5638244Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5638244</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">17-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/17-03-2025 SE-n5638244.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5638244Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Domingo 23 de marzo)
        </span>
        <span className="detalle-codigos">(Urbano verde)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5654852Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5654852</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">17-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/17-03-2025 SE-n5654852.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5654852Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Domingo 23 de marzo)
        </span>
        <span className="detalle-codigos">(Urbano verde)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5658184Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5658184</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">17-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/17-03-2025 SE-n5658184.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5658184Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 28 de marzo)
        </span>
        <span className="detalle-codigos">(Ruta 03 Numero C22)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5535508Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5535508</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">25-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta03.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/25-03-2025 SE-n5535508.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5535508Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 28 de marzo)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5578236Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5578236</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">25-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/25-03-2025 SE-n5578236.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5578236Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 28 de marzo)
        </span>
        <span className="detalle-codigos">(Urbano verde)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5623036Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5623036</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">25-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/25-03-2025 SE-n5623036.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5623036Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 28 de marzo)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5637340Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5637340</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">25-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/25-03-2025 SE-n5637340.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5637340Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 28 de marzo)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5657716Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5657716</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">25-03-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/05 MARZO 2025/25-03-2025 SE-n5657716.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5657716Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>
      </section>

      {/* ABRIL 2025 * ABRIL 2025 * ABRIL 2025 * ABRIL 2025 * ABRIL 2025 * ABRIL 2025 * ABRIL 2025*/}
      {/* ABRIL 2025 * ABRIL 2025 * ABRIL 2025 * ABRIL 2025 * ABRIL 2025 * ABRIL 2025 * ABRIL 2025*/}
      {/* ABRIL 2025 * ABRIL 2025 * ABRIL 2025 * ABRIL 2025 * ABRIL 2025 * ABRIL 2025 * ABRIL 2025*/}

      <section
        id="abril-2025"
        ref={refs.current["abril-2025"]}
        className="seccion-codigos"
      >
        <h1 className="titulo-mes-codigos">ABRIL 2025</h1>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 18 de abril)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla4552956Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4552956</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">11-04-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/06 ABRIL 2025/11-04-2025 SE-n4552956.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4552956Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 18 de abril)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla4583752Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4583752</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">11-04-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/06 ABRIL 2025/11-04-2025 SE-n4583752.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4583752Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 18 de abril)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla4601216Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4601216</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">11-04-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/06 ABRIL 2025/11-04-2025 SE-n4601216.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4601216Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 18 de abril)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5564844Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5564844</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">11-04-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/06 ABRIL 2025/11-04-2025 SE-n5564844.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5564844Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 18 de abril)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5621068Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5621068</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">11-04-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/06 ABRIL 2025/11-04-2025 SE-n5621068.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5621068Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 18 de abril)
        </span>
        <span className="detalle-codigos">
          (Fernando Dedotes. Lo va a vender en los proximos dias)
        </span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5651884Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5651884</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-05-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/06 ABRIL 2025/11-04-2025 SE-n5651884.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5651884Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Martes 06 de mayo)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla4583360Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n4583360</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">29-04-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/06 ABRIL 2025/29-04-2025 SE-n4583360.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla4583360Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Martes 06 de mayo)
        </span>
        <span className="detalle-codigos">(Urbano verde unidad 209)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5541544Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5541544</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">29-04-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/06 ABRIL 2025/29-04-2025 SE-n5541544.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5541544Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Martes 06 de mayo)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5564124Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n5564124</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">29-04-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/06 ABRIL 2025/29-04-2025 SE-n5564124.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla5564124Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Martes 06 de mayo)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla6582384Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n6582384</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">29-04-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/06 ABRIL 2025/29-04-2025 SE-n6582384.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla6582384Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Martes 06 de mayo)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla6672384Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n6672384</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">29-04-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/06 ABRIL 2025/29-04-2025 SE-n6672384.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla6672384Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Martes 06 de mayo)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla13006992Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n13006992</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">29-04-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/06 ABRIL 2025/29-04-2025 SE-n13006992.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla13006992Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Miercoles 07 de mayo. Por abraham y fernando)
        </span>
        <span className="detalle-codigos">
          (Lalo martinez ruta 3 unidad 62)
        </span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla14524944Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie">SE-n14524944</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">29-04-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta03.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/06 ABRIL 2025/29-04-2025 SE-n14524944.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTabla(tabla14524944Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>
      </section>

      {/* MAYO 2025 * MAYO 2025 * MAYO 2025 * MAYO 2025 * MAYO 2025 * MAYO 2025 * MAYO 2025 * MAYO 2025 */}
      {/* MAYO 2025 * MAYO 2025 * MAYO 2025 * MAYO 2025 * MAYO 2025 * MAYO 2025 * MAYO 2025 * MAYO 2025 */}
      {/* MAYO 2025 * MAYO 2025 * MAYO 2025 * MAYO 2025 * MAYO 2025 * MAYO 2025 * MAYO 2025 * MAYO 2025 */}

      <section
        id="mayo-2025"
        ref={refs.current["mayo-2025"]}
        className="seccion-codigos"
      >
        <h1 className="titulo-mes-codigos">MAYO 2025</h1>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Miercoles 21 de mayo.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.9)</span>
        <table ref={tabla4cf33c004f8cRef} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n4cf33c004f8c</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-05-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/07 MAYO 2025/13-05-2025 SE-n4cf33c004f8c.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla4cf33c004f8cRef.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Miercoles 21 de mayo.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.9)</span>
        <table ref={tabla6c5164a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n6c5164a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-05-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/07 MAYO 2025/13-05-2025 SE-n6c5164a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla6c5164a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Sabado 17 de mayo.)
        </span>
        <span className="detalle-codigos">
          (Ruta 01 Unidad 138. Fernando Hernandez)
        </span>
        <span className="detalle-codigos">(version 3.9)</span>
        <table ref={tabla40ab65a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n40ab65a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-05-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta01.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/07 MAYO 2025/13-05-2025 SE-n40ab65a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla40ab65a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Miercoles 21 de mayo.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.9)</span>
        <table ref={tabla507f64a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n507f64a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-05-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/07 MAYO 2025/13-05-2025 SE-n507f64a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla507f64a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Miercoles 21 de mayo.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.9)</span>
        <table ref={tablaa07f2765b7a0Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-na07f2765b7a0</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-05-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/07 MAYO 2025/13-05-2025 SE-na07f2765b7a0.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tablaa07f2765b7a0Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Miercoles 21 de mayo.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.9)</span>
        <table ref={tablab826550b65f4Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-nb826550b65f4</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-05-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/07 MAYO 2025/13-05-2025 SE-nb826550b65f4.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tablab826550b65f4Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Miercoles 21 de mayo.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 3.9)</span>
        <table ref={tablad8d165a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-nd8d165a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-05-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/07 MAYO 2025/13-05-2025 SE-nd8d165a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tablad8d165a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Sabado 31 de mayo. Fernando.)
        </span>
        <span className="detalle-codigos">(Desconocido)</span>
        <span className="detalle-codigos">(version 4.0)</span>
        <table ref={tabla1c0ac92f2b14Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n1c0ac92f2b14</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">27-05-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/07 MAYO 2025/27-05-2025 SE-n1c0ac92f2b14.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla1c0ac92f2b14Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Sabado 31 de mayo. Fernando.)
        </span>
        <span className="detalle-codigos">(Desconocido)</span>
        <span className="detalle-codigos">(version 4.0)</span>
        <table ref={tabla507365a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n507365a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">27-05-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/07 MAYO 2025/27-05-2025 SE-n507365a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla507365a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Sabado 31 de mayo. Fernando.)
        </span>
        <span className="detalle-codigos">(Desconocido)</span>
        <span className="detalle-codigos">(version 4.0)</span>
        <table ref={tabla985565a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n985565a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">27-05-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/07 MAYO 2025/27-05-2025 SE-n985565a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla985565a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Sabado 31 de mayo. Fernando.)
        </span>
        <span className="detalle-codigos">(Desconocido)</span>
        <span className="detalle-codigos">(version 4.0)</span>
        <table ref={tablad4f364a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-nd4f364a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">27-05-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/07 MAYO 2025/27-05-2025 SE-nd4f364a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tablad4f364a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Sabado 31 de mayo. Fernando.)
        </span>
        <span className="detalle-codigos">(Eloy Rojo 47)</span>
        <span className="detalle-codigos">(version 4.0)</span>
        <table ref={tablaf870dd895dc0Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-nf870dd895dc0</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">27-05-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosrojos.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/07 MAYO 2025/27-05-2025 SE-nf870dd895dc0.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tablaf870dd895dc0Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>
      </section>

      {/* JUNIO 2025 * JUNIO 2025 * JUNIO 2025 * JUNIO 2025 * JUNIO 2025 * JUNIO 2025 * JUNIO 2025 */}
      {/* JUNIO 2025 * JUNIO 2025 * JUNIO 2025 * JUNIO 2025 * JUNIO 2025 * JUNIO 2025 * JUNIO 2025 */}
      {/* JUNIO 2025 * JUNIO 2025 * JUNIO 2025 * JUNIO 2025 * JUNIO 2025 * JUNIO 2025 * JUNIO 2025 */}

      <section
        id="junio-2025"
        ref={refs.current["junio-2025"]}
        className="seccion-codigos"
      >
        <h1 className="titulo-mes-codigos">JUNIO 2025</h1>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega miercoles 20 de agosto. Por JoyBoy.)
        </span>
        <span className="detalle-codigos">(Urbano verde)</span>
        <span className="detalle-codigos-extra">
          (Se le cambio el diodo, ya que quemaba fusibles)
        </span>
        <span className="detalle-codigos-extra">
          (Su fecha original es de 09-06-2025 pero se le puso otra modificada
          para el usuario)
        </span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla2c6b2c65b7a0Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n2c6b2c65b7a0</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">20-08-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/09-06-2025 SE-n2c6b2c65b7a0.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla2c6b2c65b7a0Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega martes 17 de junio.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla2c7a64a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n2c7a64a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">09-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/09-06-2025 SE-n2c7a64a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla2c7a64a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega martes 17 de junio.)
        </span>
        <span className="detalle-codigos">(Urbano verde)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla2cd864a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n2cd864a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">09-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/09-06-2025 SE-n2cd864a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla2cd864a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega martes 17 de junio.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla3ce02b65b7a0Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n3ce02b65b7a0</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">09-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/09-06-2025 SE-n3ce02b65b7a0.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla3ce02b65b7a0Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega martes 17 de junio.)
        </span>
        <span className="detalle-codigos">(Pasajera Yaonahuac)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla4c6ddd895dc0Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n4c6ddd895dc0</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">09-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/09-06-2025 SE-n4c6ddd895dc0.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla4c6ddd895dc0Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega viernes 20 de junio.)
        </span>
        <span className="detalle-codigos">(Ruta 3 Unidad 73)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla585e45c3dc24Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n585e45c3dc24</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">09-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta03.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/09-06-2025 SE-n585e45c3dc24.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla585e45c3dc24Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega martes 17 de junio.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla089664a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n089664a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">09-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/09-06-2025 SE-n089664a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla089664a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega jueves 19 de junio.)
        </span>
        <span className="detalle-codigos">
          (Lo tiene abraham desde viernes 20 de junio)
        </span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla209e65a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n209e65a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/13-06-2025 SE-n209e65a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla209e65a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega jueves 19 de junio.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla306c64a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n306c64a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/13-06-2025 SE-n306c64a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla306c64a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega jueves 19 de junio.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla084764a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n084764a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/13-06-2025 SE-n084764a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla084764a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega jueves 19 de junio.)
        </span>
        <span className="detalle-codigos">(Ruta 3 Unidad C17)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tablab4b665a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-nb4b665a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta03.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/13-06-2025 SE-nb4b665a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tablab4b665a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega jueves 19 de junio.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tablabcaedc895dc0Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-nbcaedc895dc0</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/13-06-2025 SE-nbcaedc895dc0.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tablabcaedc895dc0Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega viernes 20 de junio.)
        </span>
        <span className="detalle-codigos">(Ruta 3 Unidad 53)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tablac4c564a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-nc4c564a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta03.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/13-06-2025 SE-nc4c564a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tablac4c564a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega jueves 19 de junio.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tablac83546c3dc24Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-nc83546c3dc24</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">13-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/13-06-2025 SE-nc83546c3dc24.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tablac83546c3dc24Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega jueves 19 de junio.)
        </span>
        <span className="detalle-codigos">(Gabriel Bandala Ruta 01)</span>
        <span className="detalle-codigos">(version 3.2)</span>
        <table ref={tabla5527248Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n5527248</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">16-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta01.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/16-06-2025 SE-n5527248.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla5527248Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega jueves 19 de junio.)
        </span>
        <span className="detalle-codigos">
          (Ruta 1. No es de JoyVolt se lo compraron al de ayotzingo)
        </span>
        <span className="detalle-codigos">(version 3.2)</span>
        <table ref={tabla5607896Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n5607896</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">16-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta01.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/16-06-2025 SE-n5607896.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla5607896Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega jueves 19 de junio.)
        </span>
        <span className="detalle-codigos">(Urbano verde)</span>
        <span className="detalle-codigos">(version 3.2)</span>
        <table ref={tabla4550136Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n4550136</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">19-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/19-06-2025 SE-n4550136.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla4550136Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 04 de julio.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla8cddf6641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n8cddf6641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">25-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/25-06-2025 SE-n8cddf6641d44.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla8cddf6641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          ((Fecha de entrega Viernes 04 de julio.))
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla14b0bc641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n14b0bc641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">25-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/25-06-2025 SE-n14b0bc641d44.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla14b0bc641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 04 de julio.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla40fcbd641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n40fcbd641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">25-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/25-06-2025 SE-n40fcbd641d44.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla40fcbd641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 04 de julio.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla48c0f6641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n48c0f6641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">25-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/25-06-2025 SE-n48c0f6641d44.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla48c0f6641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 04 de julio.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla0890bc641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n0890bc641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">25-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/25-06-2025 SE-n0890bc641d44.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla0890bc641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 08 de Agosto.)
        </span>
        <span className="detalle-codigos">(Dionisio)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla6091bc641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n6091bc641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">25-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/25-06-2025 SE-n6091bc641d44.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla6091bc641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 04 de julio.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla8429bd641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n8429bd641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">25-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/25-06-2025 SE-n8429bd641d44.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla8429bd641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 04 de julio.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabladce5f6641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-ndce5f6641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">25-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/25-06-2025 SE-ndce5f6641d44.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabladce5f6641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Miercoles 02 de julio.)
        </span>
        <span className="detalle-codigos-extra">
          (Llego en mayo pero estaba bloqueado y se regreso para refurbished. y
          llego en junio.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tablae8afbc641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-ne8afbc641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">25-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/25-06-2025 SE-ne8afbc641d44.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tablae8afbc641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 04 de julio.)
        </span>
        <span className="detalle-codigos">(Nombre desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tablafcb2f6641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-nfcb2f6641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">25-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/25-06-2025 SE-nfcb2f6641d44.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tablafcb2f6641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocida.)</span>
        <span className="detalle-codigos">(Ferxxos Ruta 1 #138 ULTRAHD)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla34bc64a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n34bc64a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">30-06-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta01.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/08 JUNIO 2025/30-06-2025 SE-n34bc64a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla34bc64a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>
      </section>

      {/* JULIO 2025 * JULIO 2025 * JULIO 2025 * JULIO 2025 * JULIO 2025 * JULIO 2025 * JULIO 2025 */}
      {/* JULIO 2025 * JULIO 2025 * JULIO 2025 * JULIO 2025 * JULIO 2025 * JULIO 2025 * JULIO 2025 */}
      {/* JULIO 2025 * JULIO 2025 * JULIO 2025 * JULIO 2025 * JULIO 2025 * JULIO 2025 * JULIO 2025 */}

      <section
        id="julio-2025"
        ref={refs.current["julio-2025"]}
        className="seccion-codigos"
      >
        <h1 className="titulo-mes-codigos">JULIO 2025</h1>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocida.)</span>
        <span className="detalle-codigos">(Urbano verde Numero 198.)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tablaac10bb57ddc4Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-nac10bb57ddc4</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">01-07-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/09 JULIO 2025/01-07-2025 SE-nac10bb57ddc4.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tablaac10bb57ddc4Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocida.)</span>
        <span className="detalle-codigos">
          (Gabriel bandala. Se lo compro a uno de verdes en $800. Su codigo
          generado es con fecha de julio de 2025, pero su fecha original es
          desconocida. Por su version parece ser de octubre de 2024.)
        </span>
        <span className="detalle-codigos">(version 3.0)</span>
        <table ref={tabla4549032Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n4549032</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">04-07-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta01.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/09 JULIO 2025/04-07-2025 SE-n4549032.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla4549032Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocida.)</span>
        <span className="detalle-codigos">(Nombre Desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla2ca4bc641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n2ca4bc641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">10-07-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src={imagenSeleccionada}
                alt="Imagen seleccionada"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/09 JULIO 2025/10-07-2025 SE-n2ca4bc641d44.png"
              />
            </td>
          </tr>
        </table>
        <select
          value={imagenSeleccionada}
          onChange={(e) => setImagenSeleccionada(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        >
          {opcionesImagen.map((opcion) => (
            <option key={opcion.value} value={opcion.value}>
              {opcion.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => capturarTablaLarga(tabla2ca4bc641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega Viernes 11 de julio.)
        </span>
        <span className="detalle-codigos">(Ruta 3 Unidad #60 ULTRAHD)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla6c3e64a84320Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n6c3e64a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">10-07-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta03.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/09 JULIO 2025/10-07-2025 SE-n6c3e64a84320.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla6c3e64a84320Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocida.)</span>
        <span className="detalle-codigos">(Nombre Desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla344ef6641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n344ef6641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">10-07-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src={imagenSeleccionada}
                alt="Imagen seleccionada"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/09 JULIO 2025/10-07-2025 SE-n344ef6641d44.png"
              />
            </td>
          </tr>
        </table>
        <select
          value={imagenSeleccionada}
          onChange={(e) => setImagenSeleccionada(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        >
          {opcionesImagen.map((opcion) => (
            <option key={opcion.value} value={opcion.value}>
              {opcion.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => capturarTablaLarga(tabla344ef6641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocida.)</span>
        <span className="detalle-codigos">(Nombre Desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla9095bc641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n9095bc641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">10-07-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src={imagenSeleccionada}
                alt="Imagen seleccionada"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/09 JULIO 2025/10-07-2025 SE-n9095bc641d44.png"
              />
            </td>
          </tr>
        </table>
        <select
          value={imagenSeleccionada}
          onChange={(e) => setImagenSeleccionada(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        >
          {opcionesImagen.map((opcion) => (
            <option key={opcion.value} value={opcion.value}>
              {opcion.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => capturarTablaLarga(tabla9095bc641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">
          (Fecha de entrega 14 de Agosto de 2025. Por JoyBoy.)
        </span>
        <span className="detalle-codigos">(Castro Ruta 03 Unidad 22)</span>
        <span className="ruta"></span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tablaa85ef6641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-na85ef6641d44</td>
          </tr>

          <tr>
            <td className="celda-codigos-fecha">10-07-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta03.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/09 JULIO 2025/10-07-2025 SE-na85ef6641d44.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tablaa85ef6641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocida.)</span>
        <span className="detalle-codigos">(Nombre Desconocido)</span>
        <span className="detalle-codigos-extra">
          (Se le cambio el diodo, ya que quemaba fusibles)
        </span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tablad4f9bd641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-nd4f9bd641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">10-07-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src={imagenSeleccionada}
                alt="Imagen seleccionada"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/09 JULIO 2025/10-07-2025 SE-nd4f9bd641d44.png"
              />
            </td>
          </tr>
        </table>
        <select
          value={imagenSeleccionada}
          onChange={(e) => setImagenSeleccionada(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        >
          {opcionesImagen.map((opcion) => (
            <option key={opcion.value} value={opcion.value}>
              {opcion.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => capturarTablaLarga(tablad4f9bd641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocida.)</span>
        <span className="detalle-codigos">(Nombre Desconocido)</span>
        <span className="detalle-codigos-extra">
          (Se le soldo una pieza en el display, ya que no encendia la
          retroilumincaion del LCD, anteriormente era de la ruta 03 unidad 22.)
        </span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tablad402be641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-nd402be641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">10-07-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src={imagenSeleccionada}
                alt="Imagen seleccionada"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/09 JULIO 2025/10-07-2025 SE-nd402be641d44.png"
              />
            </td>
          </tr>
        </table>
        <select
          value={imagenSeleccionada}
          onChange={(e) => setImagenSeleccionada(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        >
          {opcionesImagen.map((opcion) => (
            <option key={opcion.value} value={opcion.value}>
              {opcion.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => capturarTablaLarga(tablad402be641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocida.)</span>
        <span className="detalle-codigos">(Nombre Desconocido)</span>
        <span className="detalle-codigos">
          (Tiene fecha de julio porque se genero un nuevo codigo, pero su fecha
          es incierta, habra que guiarse por el numero de version.)
        </span>
        <span className="detalle-codigos">(version 3.7)</span>
        <table ref={tabla5586992Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n5586992</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">29-07-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/09 JULIO 2025/29-07-2025 SE-n5586992.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla5586992Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>
      </section>

      {/* AGOSTO 2025 * AGOSTO 2025 * AGOSTO 2025 * AGOSTO 2025 * AGOSTO 2025 * AGOSTO 2025 * AGOSTO 2025 */}
      {/* AGOSTO 2025 * AGOSTO 2025 * AGOSTO 2025 * AGOSTO 2025 * AGOSTO 2025 * AGOSTO 2025 * AGOSTO 2025 */}
      {/* AGOSTO 2025 * AGOSTO 2025 * AGOSTO 2025 * AGOSTO 2025 * AGOSTO 2025 * AGOSTO 2025 * AGOSTO 2025 */}

      <section
        id="agosto-2025"
        ref={refs.current["agosto-2025"]}
        className="seccion-codigos"
      >
        <h1 className="titulo-mes-codigos">AGOSTO 2025</h1>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocida.)</span>
        <span className="detalle-codigos">(Nombre Desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla3cc11dab4c24Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n3cc11dab4c24</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">07-08-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src={imagenSeleccionada}
                alt="Imagen seleccionada"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/10 AGOSTO 2025/07-08-2025 SE-n3cc11dab4c24.png"
              />
            </td>
          </tr>
        </table>
        <select
          value={imagenSeleccionada}
          onChange={(e) => setImagenSeleccionada(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        >
          {opcionesImagen.map((opcion) => (
            <option key={opcion.value} value={opcion.value}>
              {opcion.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => capturarTablaLarga(tabla3cc11dab4c24Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocida.)</span>
        <span className="detalle-codigos">(Nombre Desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla4caabc641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n4caabc641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">07-08-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/10 AGOSTO 2025/07-08-2025 SE-n4caabc641d44.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla4caabc641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>









        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocida.)</span>
        <span className="detalle-codigos">(Nombre Desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla6c3e64a84320rRef} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n6c3e64a84320</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">07-08-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src={imagenSeleccionada}
                alt="Imagen seleccionada"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/10 AGOSTO 2025/07-08-2025 SE-n6c3e64a84320.png"
              />
            </td>
          </tr>
        </table>
        <select
          value={imagenSeleccionada}
          onChange={(e) => setImagenSeleccionada(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        >
          {opcionesImagen.map((opcion) => (
            <option key={opcion.value} value={opcion.value}>
              {opcion.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => capturarTablaLarga(tabla6c3e64a84320rRef.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocida.)</span>
        <span className="detalle-codigos">(Nombre Desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla048ebc641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n048ebc641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">07-08-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src={imagenSeleccionada}
                alt="Imagen seleccionada"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/10 AGOSTO 2025/07-08-2025 SE-n048ebc641d44.png"
              />
            </td>
          </tr>
        </table>
        <select
          value={imagenSeleccionada}
          onChange={(e) => setImagenSeleccionada(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        >
          {opcionesImagen.map((opcion) => (
            <option key={opcion.value} value={opcion.value}>
              {opcion.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => capturarTablaLarga(tabla048ebc641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocida.)</span>
        <span className="detalle-codigos">(Nombre Desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tablacce0540b65f4Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-ncce0540b65f4</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">07-08-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src={imagenSeleccionada}
                alt="Imagen seleccionada"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/10 AGOSTO 2025/07-08-2025 SE-ncce0540b65f4.png"
              />
            </td>
          </tr>
        </table>
        <select
          value={imagenSeleccionada}
          onChange={(e) => setImagenSeleccionada(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        >
          {opcionesImagen.map((opcion) => (
            <option key={opcion.value} value={opcion.value}>
              {opcion.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => capturarTablaLarga(tablacce0540b65f4Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Desconocida.)</span>
        <span className="detalle-codigos">(Nombre Desconocido)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabladcf9412a13d8Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-ndcf9412a13d8</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">07-08-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src={imagenSeleccionada}
                alt="Imagen seleccionada"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/10 AGOSTO 2025/07-08-2025 SE-ndcf9412a13d8.png"
              />
            </td>
          </tr>
        </table>
        <select
          value={imagenSeleccionada}
          onChange={(e) => setImagenSeleccionada(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        >
          {opcionesImagen.map((opcion) => (
            <option key={opcion.value} value={opcion.value}>
              {opcion.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => capturarTablaLarga(tabladcf9412a13d8Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>



        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Lunes 25 de Agosto 2025.)</span>
        <span className="detalle-codigos">(Depredador)</span>
        <span className="detalle-codigos-extra">(Se mando a reparación, era de cesar 41, se lo vendio.)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla0c390486e694Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n0c390486e694</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">15-08-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta03.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/10 AGOSTO 2025/15-08-2025 SE-n0c390486e694.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla0c390486e694Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Lunes 25 de Agosto 2025.)</span>
        <span className="detalle-codigos">(Ruta 01 Unidad 84)</span>
        <span className="detalle-codigos-extra">(Se mando a actualizar.)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla80ed540b65f4Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n80ed540b65f4</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">15-08-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/ruta01.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/10 AGOSTO 2025/15-08-2025 SE-n80ed540b65f4.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla80ed540b65f4Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(No se entrego.)</span>
        <span className="detalle-codigos">(Pimpinela Urbano rojo Unidad 33)</span>
        <span className="detalle-codigos-extra">(Se mando a actualizar. Regreso con la misma falla. Se va a mandar a mexico por falla)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tablafc5a77cd31e8Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-nfc5a77cd31e8</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">15-08-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosrojos.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/10 AGOSTO 2025/15-08-2025 SE-nfc5a77cd31e8.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tablafc5a77cd31e8Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Fecha de entrega Lunes 25 de Agosto 2025.)</span>
        <span className="detalle-codigos">(Prestado a pimpinela)</span>
        <span className="detalle-codigos-extra">(Prestado a pimpinela)</span>
        <span className="detalle-codigos">(version 4.1)</span>
        <table ref={tabla10afbc641d44Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n10afbc641d44</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">19-08-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src={imagenSeleccionada}
                alt="Imagen seleccionada"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/10 AGOSTO 2025/19-08-2025 SE-n10afbc641d44.png"
              />
            </td>
          </tr>
        </table>
        <select
          value={imagenSeleccionada}
          onChange={(e) => setImagenSeleccionada(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        >
          {opcionesImagen.map((opcion) => (
            <option key={opcion.value} value={opcion.value}>
              {opcion.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => capturarTablaLarga(tabla10afbc641d44Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>

        <div className="separador-codigos-joyvolt"></div>
        <span className="detalle-codigos">(Dionisio.)</span>
        <span className="detalle-codigos">(Urbano verde)</span>
        <span className="detalle-codigos">(version 3.2)</span>
        <table ref={tabla4545292Ref} className="tabla-codigos">
          <tr>
            <td className="celda-codigos-serie-largo">SE-n4545292</td>
          </tr>
          <tr>
            <td className="celda-codigos-fecha">05-09-2025</td>
          </tr>
          <tr>
            <td className="celda-codigos-imagen">
              <img
                style={{ width: "auto", height: "50px" }}
                src="./codigos/urbanosverdes.png"
              />
            </td>
          </tr>
          <tr>
            <td className="celda-codigos-img">
              <img
                style={{ width: "95%", height: "auto" }}
                src="./codigos/10 AGOSTO 2025/05-09-2025 SE-n4545292.png"
              />
            </td>
          </tr>
        </table>
        <button
          onClick={() => capturarTablaLarga(tabla4545292Ref.current)}
          className="boton-descarga-codigos"
        >
          Descargar Imagen
        </button>
      </section>
    </div>
  );
};

export default Codigos;
