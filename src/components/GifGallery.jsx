// eslint-disable-next-line no-unused-vars
import React from "react";
import "./GifGallery.css";

const gifList = [
  "corazon.gif",
  "cranky_01.gif",
  "cranky_02.gif",
  "donkey.gif",
  "feria.gif",
  "feria_1.gif",
  "feria_1_ultrahd.gif",
  "feria_2.gif",
  "feria_2_ultrahd.gif",
  "ghost_pacmanonda.gif",
  "honda.gif",
  "ken.gif",
  "kong_music.gif",
  "mario_bros.gif",
  "mario_chiquito.gif",
  "mario_long.gif",
  "mario_turtle.gif",
  "marios.gif",
  "matrix_codigo.gif",
  "matrix_joyboy.gif",
  "matrix_reloaded.gif",
  "matrix_reloaded_ultra.gif",
  "onda_cabeza.gif",
  "pacman.gif",
  "pacman_2.gif",
  "pacman_neon.gif",
  "ryu.gif",
  "ryu_cammy.gif",
  "status.gif",
  "status_b.gif",
  "yoshi.gif",
  "you_onda.gif",

  // Agrega aquí todos los nombres de tus GIFs
];

const formatearNombre = (nombre) => {
  return nombre
    .replace(/\.gif$/i, "") // quitar extensión .gif
    .replace(/_/g, " ") // reemplazar guiones bajos por espacios
    .replace(/\b\w/g, (l) => l.toUpperCase()); // poner mayúscula a cada palabra
};

const GifGallery = () => {
  return (
    <div className="galeria-container">
      <div className="galeria-grid">
        {gifList.map((gif, index) => (
          <div key={index} className="gif-card">
            <img
              src={`${import.meta.env.BASE_URL}gifs/${gif}`}
              alt={`GIF ${index}`}
              className="gif-imagen"
            />
            <p className="gif-nombre">{formatearNombre(gif)}</p>
            <a
              href={`${import.meta.env.BASE_URL}gifs/${gif}`}
              download
              className="boton-descargar"
            >
              Descargar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifGallery;
