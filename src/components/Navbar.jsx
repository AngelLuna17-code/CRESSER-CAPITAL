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
                    <div>
                      <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                      </svg>
                      <p className='text-[20px]'>
                        CAPITAL
                      </p>
                    </div>
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
                {/* Links */}
                <div className='overflow-hidden hidden lg:flex items-center px-10'>
                  <ul className='list-none flex items-center space-x-12'>
                    <li>
                      <Link className="text-white hover:text-[#a18144]" to="/" onClick={closeMenuOnClick}>
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white hover:text-[#a18144]" smooth to="/#about">
                        Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white hover:text-[#a18144]" smooth to="/#cards">
                        Invierte
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white hover:text-[#a18144]" smooth to="/#contacto" onClick={closeMenuOnClick}>
                        Contacto
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Links */}
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
                    <Link className="text-white hover:text-[#a18144]" smooth to="/#about" onClick={closeMenuOnClick}>
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white hover:text-[#a18144]" smooth to="/#cards" onClick={closeMenuOnClick}>
                      Invierte
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white hover:text-[#a18144]" smooth to="/#contacto" onClick={closeMenuOnClick}>
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