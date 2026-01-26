import React, { useState } from 'react'
import { navbarLinks } from '../data/data'
import { CiSearch } from "react-icons/ci"
import { FaSkullCrossbones, FaGhost } from "react-icons/fa"
import { MdMenu } from "react-icons/md"
import { PiShoppingCartLight } from "react-icons/pi"
/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
/* eslint-enable no-unused-vars */
import MenuResponsivo from './MenuResponsivo'

const Navbar = () => {
  const [abierto, setAbierto] = useState(false)

  return (
    <>
      <nav className="bg-gray-900 border-b border-red-900">
        <div className="container flex justify-between font-bold items-center py-8">
          
          {/* Sección Logo Grimm */}
          <div className="text-2xl flex items-center gap-2 uppercase">
            <br />
            <FaSkullCrossbones className="text-red-500 text-3xl" />
            <p className="text-white">MUNDO</p>
            <p className="text-red-500">GRIMM</p>
            <FaGhost className="text-blue-400 text-2xl ml-2" />
          </div>

          {/* Sección Menú (Desktop) */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-7 text-gray-300">
              {navbarLinks.map((item) => (
                <motion.li 
                  key={item.id}
                  whileHover={{ scale: 1.1, color: "#ef4444" }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  <a 
                    href={item.url} 
                    className="inline-block py-1 px-3 hover:text-red-500 font-semibold"
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Sección Iconos */}
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-300 hover:text-white hover:bg-red-700 rounded-full p-2 duration-300"
            >
              <CiSearch />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-300 hover:text-white hover:bg-red-700 rounded-full p-2 duration-300"
            >
              <PiShoppingCartLight />
            </motion.button>
            
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
                backgroundColor: "#dc2626"
              }}
              whileTap={{ scale: 0.95 }}
              className="hover:bg-red-800 font-semibold rounded-md text-white bg-red-700 px-6 py-2 duration-300 hidden md:block"
            >
              Acceso Grimm
            </motion.button>
            <br />
            
            {/* Botón menú móvil */}
            <div className="md:hidden">
              <motion.div
                whileTap={{ rotate: 90 }}
                whileHover={{ scale: 1.1 }}
              >
                <MdMenu 
                  onClick={() => setAbierto(!abierto)} 
                  className="text-4xl cursor-pointer text-red-500"
                />
              </motion.div>
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