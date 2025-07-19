import { useEffect, useState } from "react";

export default function ScrollToTopBottom() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200); // mostrar botón al bajar 200px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    showButton && (
      <div style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 1000,
      }}>
        <button onClick={scrollToTop} style={btnStyle}>⬆ Subir</button>
        <button onClick={scrollToBottom} style={btnStyle}>⬇ Bajar</button>
      </div>
    )
  );
}

const btnStyle = {
  padding: "10px 15px",
  backgroundColor: "#1e40af",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
};
