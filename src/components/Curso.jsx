// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Curso.css";

const Curso = () => {
  return (
    <div className="contenedor-kit-joyvolt">
      <p>
        A continuación, me permito presentar una serie de videos alojados en la
        plataforma YouTube, que conforman un tutorial detallado sobre el uso y
        la programación de letreros LED destinados al transporte público. Estos
        materiales han sido seleccionados cuidadosamente para ofrecer una guía
        clara y práctica que facilite la correcta instalación, configuración y
        operación de estos dispositivos, con el fin de optimizar la comunicación
        visual y mejorar la experiencia tanto para los operadores como para los
        usuarios del servicio. Cada video aborda aspectos clave del proceso,
        desde la preparación inicial hasta la programación de rutas y mensajes
        personalizados, asegurando así un aprendizaje integral y accesible. Se
        recomienda prestar especial atención a cada módulo y seguir las
        instrucciones paso a paso para garantizar un funcionamiento óptimo y
        seguro de los letreros LED.
      </p>
      <p className="direccion-web">01 Primeros pasos</p>
      {/* Video embebido */}
      <div style={{ width: "50vw", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16 / 9" }}
          src="https://www.youtube.com/embed/2BxpvPTFkks"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="direccion-web">https://youtu.be/2BxpvPTFkks</p>
      <div className="link-container">
        <a
          href={"https://youtu.be/2BxpvPTFkks"}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-enlace"
        >
          Abrir Enlace
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("https://youtu.be/2BxpvPTFkks");
            alert("Enlace copiado al portapapeles");
          }}
          className="boton-copiar"
        >
          Copiar Enlace
        </button>
      </div>
      <div className="separador-kit-joyvolt"></div>

      <p className="direccion-web">
        02 Instalacion de la aplicacion iLED PRO y emparejar con el letrero
      </p>
      {/* Video embebido */}
      <div style={{ width: "50vw", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16 / 9" }}
          src="https://www.youtube.com/embed/uLHKvFVapsQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="direccion-web">https://youtu.be/uLHKvFVapsQ</p>
      <div className="link-container">
        <a
          href={"https://youtu.be/uLHKvFVapsQ"}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-enlace"
        >
          Abrir Enlace
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("https://youtu.be/uLHKvFVapsQ");
            alert("Enlace copiado al portapapeles");
          }}
          className="boton-copiar"
        >
          Copiar Enlace
        </button>
      </div>
      <div className="separador-kit-joyvolt"></div>

      <p className="direccion-web">
        03 Explicacion del monitor y botones de la parte de atras del letrero
      </p>
      {/* Video embebido */}
      <div style={{ width: "50vw", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16 / 9" }}
          src="https://www.youtube.com/embed/QjGX9QP6g2k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="direccion-web">https://youtu.be/QjGX9QP6g2k</p>
      <div className="link-container">
        <a
          href={"https://youtu.be/QjGX9QP6g2k"}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-enlace"
        >
          Abrir Enlace
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("https://youtu.be/QjGX9QP6g2k");
            alert("Enlace copiado al portapapeles");
          }}
          className="boton-copiar"
        >
          Copiar Enlace
        </button>
      </div>
      <div className="separador-kit-joyvolt"></div>

      <p className="direccion-web">
        04 Explicacion general de la aplicacion iLED PRO
      </p>
      {/* Video embebido */}
      <div style={{ width: "50vw", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16 / 9" }}
          src="https://www.youtube.com/embed/7BZuEW0-b8k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="direccion-web">https://youtu.be/7BZuEW0-b8k</p>
      <div className="link-container">
        <a
          href={"https://youtu.be/7BZuEW0-b8k"}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-enlace"
        >
          Abrir Enlace
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("https://youtu.be/7BZuEW0-b8k");
            alert("Enlace copiado al portapapeles");
          }}
          className="boton-copiar"
        >
          Copiar Enlace
        </button>
      </div>
      <div className="separador-kit-joyvolt"></div>

      <p className="direccion-web">
        05 Programando nuestra primera ruta con todas las opciones.
      </p>
      {/* Video embebido */}
      <div style={{ width: "50vw", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16 / 9" }}
          src="https://www.youtube.com/embed/0_hOeTQ4rmY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="direccion-web">https://youtu.be/0_hOeTQ4rmY</p>
      <div className="link-container">
        <a
          href={"https://youtu.be/0_hOeTQ4rmY"}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-enlace"
        >
          Abrir Enlace
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("https://youtu.be/0_hOeTQ4rmY");
            alert("Enlace copiado al portapapeles");
          }}
          className="boton-copiar"
        >
          Copiar Enlace
        </button>
      </div>
      <div className="separador-kit-joyvolt"></div>

      <p className="direccion-web">
        06 Programando rutas con 3 o mas textos, iconos y trucos.
      </p>
      {/* Video embebido */}
      <div style={{ width: "50vw", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16 / 9" }}
          src="https://www.youtube.com/embed/4HMaasNlEEQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="direccion-web">https://youtu.be/4HMaasNlEEQ</p>
      <div className="link-container">
        <a
          href={"https://youtu.be/4HMaasNlEEQ"}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-enlace"
        >
          Abrir Enlace
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("https://youtu.be/4HMaasNlEEQ");
            alert("Enlace copiado al portapapeles");
          }}
          className="boton-copiar"
        >
          Copiar Enlace
        </button>
      </div>
      <div className="separador-kit-joyvolt"></div>

      <h3>TUTORIAL JUNIO 2025 LETRERO 4.1 APLICACION 1.1.7</h3>


      <div className="separador-kit-joyvolt"></div>
      <p className="direccion-web">
        01 Uso de botones fisicos y monitor. Brillo, ruta y id.
      </p>
      {/* Video embebido */}
      <div style={{ width: "50vw", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16 / 9" }}
          src="https://www.youtube.com/embed/6UBIc115nAg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="direccion-web">https://youtu.be/6UBIc115nAg</p>
      <div className="link-container">
        <a
          href={"https://youtu.be/6UBIc115nAg"}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-enlace"
        >
          Abrir Enlace
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("https://youtu.be/6UBIc115nAg");
            alert("Enlace copiado al portapapeles");
          }}
          className="boton-copiar"
        >
          Copiar Enlace
        </button>
      </div>

      <div className="separador-kit-joyvolt"></div>
      <p className="direccion-web">
        02 Instalacion, configuración y uso de la aplicacion android.
      </p>
      {/* Video embebido */}
      <div style={{ width: "50vw", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16 / 9" }}
          src="https://www.youtube.com/embed/rT9ToAP6R_M"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="direccion-web">https://youtu.be/rT9ToAP6R_M</p>
      <div className="link-container">
        <a
          href={"https://youtu.be/rT9ToAP6R_M"}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-enlace"
        >
          Abrir Enlace
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("https://youtu.be/rT9ToAP6R_M");
            alert("Enlace copiado al portapapeles");
          }}
          className="boton-copiar"
        >
          Copiar Enlace
        </button>
      </div>

      <div className="separador-kit-joyvolt"></div>
      <p className="direccion-web">
        03 Creacion y configuración de rutas.
      </p>
      {/* Video embebido */}
      <div style={{ width: "50vw", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16 / 9" }}
          src="https://www.youtube.com/embed/RYLGYwPsYvs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="direccion-web">https://youtu.be/RYLGYwPsYvs</p>
      <div className="link-container">
        <a
          href={"https://youtu.be/RYLGYwPsYvs"}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-enlace"
        >
          Abrir Enlace
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("https://youtu.be/RYLGYwPsYvs");
            alert("Enlace copiado al portapapeles");
          }}
          className="boton-copiar"
        >
          Copiar Enlace
        </button>
      </div>

      <div className="separador-kit-joyvolt"></div>
      <p className="direccion-web">
        04 Efectos, fondo, marcos y reinicio de letrero.
      </p>
      {/* Video embebido */}
      <div style={{ width: "50vw", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16 / 9" }}
          src="https://www.youtube.com/embed/HO302fDoBN8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="direccion-web">https://youtu.be/HO302fDoBN8</p>
      <div className="link-container">
        <a
          href={"https://youtu.be/HO302fDoBN8"}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-enlace"
        >
          Abrir Enlace
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("https://youtu.be/HO302fDoBN8");
            alert("Enlace copiado al portapapeles");
          }}
          className="boton-copiar"
        >
          Copiar Enlace
        </button>
      </div>


      <div className="separador-kit-joyvolt"></div>
      <p className="direccion-web">
        Cargar Gifs desde la aplicacion.
      </p>
      {/* Video embebido */}
      <div style={{ width: "50vw", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16 / 9" }}
          src="https://www.youtube.com/embed/OGgi6S0Fsp8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="direccion-web">https://youtu.be/OGgi6S0Fsp8</p>
      <div className="link-container">
        <a
          href={"https://youtu.be/OGgi6S0Fsp8"}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-enlace"
        >
          Abrir Enlace
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("https://youtu.be/OGgi6S0Fsp8");
            alert("Enlace copiado al portapapeles");
          }}
          className="boton-copiar"
        >
          Copiar Enlace
        </button>
      </div>



      <div className="separador-kit-joyvolt"></div>
      <p className="direccion-web">
        Cargar Gifs desde URL.
      </p>
      {/* Video embebido */}
      <div style={{ width: "50vw", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16 / 9" }}
          src="https://www.youtube.com/embed/S7aObrVeni8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="direccion-web">https://youtu.be/S7aObrVeni8</p>
      <div className="link-container">
        <a
          href={"https://youtu.be/S7aObrVeni8"}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-enlace"
        >
          Abrir Enlace
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("https://youtu.be/S7aObrVeni8");
            alert("Enlace copiado al portapapeles");
          }}
          className="boton-copiar"
        >
          Copiar Enlace
        </button>
      </div>


    </div>
  );
};

export default Curso;
