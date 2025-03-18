import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Mi Logo
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={`${
            isOpen ? "opacity-100" : "opacity-0 md:opacity-100 hidden md:flex"
          } md:flex gap-6 md:static md:flex-row flex-col items-center md:items-center absolute top-16 left-1/2 transform -translate-x-1/2 md:translate-x-0 bg-blue-600 md:bg-transparent transition-all duration-300 ease-in-out`}
        >
          <li>
            <Link to="/" className="hover:text-gray-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/nosotros" className="hover:text-gray-300">
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="hover:text-gray-300">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
