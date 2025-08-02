import { Link } from 'react-router-dom';
import "./Navbar.css"
import {
    faDeleteLeft,
    faMoneyBill,
    faScrewdriverWrench,
    faTableCells,
    faTableList,
    faPlay,
    faImages,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from '@fortawesome/free-solid-svg-icons/faQrcode';

const navigationItems = [
  { path: '/', icon: faTableList, label: 'Inventario' },
  { path: '/ventas', icon: faMoneyBill, label: 'Ventas' },
  { path: '/catalogo', icon: faMoneyBill, label: 'Catalogo' },
  { path: '/administar', icon: faDeleteLeft, label: 'Administrar' },
  { path: '/codigos', icon: faQrcode, label: 'Codigos' },
  { path: '/tabla', icon: faTableCells, label: 'Tabla' },
  { path: '/simbolos', icon: faTableCells, label: 'Simbolos' },
  { path: '/kit', icon: faScrewdriverWrench, label: 'Kit' },
  { path: '/curso', icon: faPlay, label: 'Curso' },
  { path: '/gifs', icon: faImages, label: 'Gifs' },
  { path: '/rol', icon: faTableList, label: 'Rol' },
  { path: '/rol129', icon: faTableList, label: '129' },
  { path: '/bitacora', icon: faTableList, label: 'Bitacora' },

];

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {navigationItems.map((item) => (
          <li className="nav-item" key={item.path}>
            <Link to={item.path} className="nav-link">
              <FontAwesomeIcon icon={item.icon} size="2x" style={{ fontSize: '24px' }}/> {/* Renderiza el icono de Font Awesome */}
              <span className="nav-label">{item.label}</span> {/* Agrega el span para mostrar la etiqueta */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;