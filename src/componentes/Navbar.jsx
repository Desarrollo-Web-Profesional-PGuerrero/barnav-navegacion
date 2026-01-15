import React, { useState } from 'react'
import { navbarLinks } from '../data/data'
import { CiSearch } from "react-icons/ci"
import { ImBooks } from "react-icons/im"
import { MdMenu } from "react-icons/md"
import { PiShoppingCartLight } from "react-icons/pi"
import MenuResponsivo from './MenuResponsivo'

const Navbar = () => {
  const [abierto, setAbierto] = useState(false)

  return (
    <>
      <nav>
        <div className="container flex justify-between font-bold items-center py-8">
          
          {/* Sección Logo */}
          <div className="text-2xl flex items-center gap-2 uppercase">
            <ImBooks />
            <p>El sitio de PRGS</p>
            <p className="text-secondary">Cursos</p>
          </div>

          {/* Sección Menú (Desktop) */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-7 text-gray-600">
              {navbarLinks.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.url} 
                    className="inline-block py-1 px-3 hover:text-primary"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sección Iconos */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
              <PiShoppingCartLight />
            </button>
            <button className="hover:bg-primary font-semibold rounded-md text-white bg-secondary px-4 py-2 duration-300 border-primary hidden md:block">
              Ingresar
            </button>
            
            {/* Botón menú móvil */}
            <div className="md:hidden">
              <MdMenu 
                onClick={() => setAbierto(!abierto)} 
                className="text-4xl"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Menú Responsivo */}
      <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
    </>
  )
}

export default Navbar