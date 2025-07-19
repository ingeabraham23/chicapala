// eslint-disable-next-line no-unused-vars
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Catalogo.css";

const Catalogo = () => {
  const images = [
    { src: "./catalogo/cable amarillo catalogo.png", alt: "Cable amarillo" },
    { src: "./catalogo/cable negro catalogo.png", alt: "Cable negro" },
    { src: "./catalogo/chupon gancho catalogo.png", alt: "Chupon gancho" },
    { src: "./catalogo/chupon n3 catalogo.png", alt: "Chupon #3" },
    { src: "./catalogo/cincho 30cm catalogo.png", alt: "Cincho 30cm" },
    { src: "./catalogo/conector 2p catalogo.png", alt: "Conector 2 puertos" },
    { src: "./catalogo/conector 3p catalogo.png", alt: "Conector 3 puertos" },
    { src: "./catalogo/conector 5p catalogo.png", alt: "Conector 5 puertos" },
    { src: "./catalogo/conector empalme catalogo.png", alt: "Conector empalme" },
    { src: "./catalogo/foco direccional trasero nv350 catalogo.png", alt: "Foco direccional trasero nv350" },
    { src: "./catalogo/foco stop nv350 catalogo.png", alt: "Foco stop nv350" },
    { src: "./catalogo/fusible mini bp catalogo.png", alt: "Fusible mini bajo perfil" },
    { src: "./catalogo/fusible mini catalogo.png", alt: "Fusible mini" },
    { src: "./catalogo/fusible normal catalogo.png", alt: "Fusible normal" },
    { src: "./catalogo/led 5mod blanco catalogo.png", alt: "Led 5 modulos blanco" },
    { src: "./catalogo/led 5mod rosa catalogo.png", alt: "Led 5 modulos rosa" },
    { src: "./catalogo/led 12mod blanco catalogo.png", alt: "Led 12 modulos blanco" },
    { src: "./catalogo/foco star h4 catalogo.png", alt: "Foco star h4" },
    { src: "./catalogo/relevador weischler catalogo.png", alt: "Relevador weischler" },
    { src: "./catalogo/arnes relevador 5 patas catalogo.png", alt: "Arnes relevador 5 patas" },
    { src: "./catalogo/cinta doble cara 3m vhb catalogo.png", alt: "Cinta doble cara 3m vhb" },
    { src: "./catalogo/foco hella h4 catalogo.png", alt: "Foco hella h4" },
    { src: "./catalogo/fusible vidrio catalogo.png", alt: "Fusible vidrio" },
    { src: "./catalogo/porta fusible de clavija catalogo.png", alt: "Porta fusible de clavija" },
    { src: "./catalogo/switch balancin amarillo catalogo.png", alt: "Switch balancin amarillo" },
    { src: "./catalogo/switch balancin rojo catalogo.png", alt: "Switch balancin rojo" },
    { src: "./catalogo/led pellizco t10 catalogo.png", alt: "Led pellizco t10" },
    { src: "./catalogo/cincho 40cm catalogo.png", alt: "Cincho 40cm" },
    { src: "./catalogo/concavo 3 catalogo.png", alt: "Concavo 3 pulgadas" },
    { src: "./catalogo/push button 3a catalogo.png", alt: "Push button 3a" },
  ];

  return (
    <div className="contenedor">
      <h2 className="titulo">Catálogo JotVolt</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="carrusel"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="slide">
            <img
              className="imagen"
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
            <p className="descripcion">{image.alt}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Catalogo;

