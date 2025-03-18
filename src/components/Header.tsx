import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
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
          className={md:flex gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent md:flex-row flex-col items-center md:items-center md:opacity-100 transition-all duration-300 ease-in-out ${
    isOpen ? "opacity-100" : "opacity-0 md:opacity-100 hidden md:flex"
  }}
        >
          <li>
            <Link to="/" className="hover:text-gray-300">Inicio</Link>
          </li>
          <li>
            <Link to="/nosotros" className="hover:text-gray-300">Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto" className="hover:text-gray-300">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;