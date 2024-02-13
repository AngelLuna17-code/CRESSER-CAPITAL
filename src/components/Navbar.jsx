import React, { useState, useRef, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const closeMenuOnClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <section>
      <div className="flex items-center jusrify-center top-0 text-white fixed top-0 w-screen min-h-[70px] z-30" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
        <div className='container mx-auto py-3 px-[20px] lg:px-0'>
          <nav ref={menuRef} >
            <div className='flex justify-between items-center'>
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" onClick={closeMenuOnClick}>
                  <div className="flex items-center">
                    <img
                      className="w-20 h-auto"
                      src="logo.png"
                      alt="logo"
                      loading="lazy"
                    />
                  </div>
                </Link>
              </div>
              {/* Logo */}
              <div>
                {/* Burger button */}
                <div className="lg:hidden">
                  <button
                    onClick={toggleMenu}
                    className="text-white focus:outline-none focus:border-none"
                    aria-label="Toggle Menu"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                  </button>
                </div>
                {/* Burger button */}
                <div className='overflow-hidden hidden lg:flex items-center px-10'>
                  <ul className='list-none flex items-center space-x-12'>
                    <li>
                      <Link className="text-white hover:text-[#a18144]" to="/" onClick={closeMenuOnClick}>
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white hover:text-[#a18144]" smooth to="/#service">
                        Invierte
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white hover:text-[#a18144]" smooth to="/#portafolio">
                        Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white hover:text-[#a18144]" to="Facturas" onClick={closeMenuOnClick}>
                        Contacto
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Dropdown */}
            {isMenuOpen && (
              <div className="lg:hidden mt-2 p-2">
                <ul className='list-none space-y-2'>
                  <li>
                    <Link className="text-white hover:text-[#a18144]" to="/" onClick={closeMenuOnClick}>
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white hover:text-[#a18144]" smooth to="/#service">
                      Invierte
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white hover:text-[#a18144]" smooth to="/#portafolio">
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white hover:text-[#a18144]" to="Facturas" onClick={closeMenuOnClick}>
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {/* Dropdown */}
          </nav>
        </div>
      </div>
    </section>
  );
};
export default Navbar;