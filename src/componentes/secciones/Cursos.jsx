/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
/* eslint-enable no-unused-vars */
import { FaPlay, FaCalendarAlt, FaStar, FaTv } from "react-icons/fa"

const Cursos = () => {
  const temporadas = [
    { 
      id: 1, 
      nombre: "Temporada 1", 
      episodios: 22, 
      año: 2011, 
      desc: "Nick Burkhardt descubre que es un Grimm después de ver a personas transformarse en criaturas.",
      destacado: "Estreno de la serie",
      color: "bg-red-900"
    },
    { 
      id: 2, 
      nombre: "Temporada 2", 
      episodios: 22, 
      año: 2012, 
      desc: "Nick enfrenta a los Verrat mientras aprende más sobre su herencia Grimm y el mundo Wesen.",
      destacado: "La amenaza Verrat",
      color: "bg-blue-900"
    },
    { 
      id: 3, 
      nombre: "Temporada 3", 
      episodios: 22, 
      año: 2013, 
      desc: "El regreso de la Realeza Wesen y el nacimiento del bebé real que todos quieren controlar.",
      destacado: "Realeza Wesen",
      color: "bg-purple-900"
    },
    { 
      id: 4, 
      nombre: "Temporada 4", 
      episodios: 22, 
      año: 2014, 
      desc: "Nick pierde sus poderes Grimm y el grupo busca desesperadamente una cura mientras lidian con nuevos enemigos.",
      destacado: "Nick sin poderes",
      color: "bg-green-900"
    },
    { 
      id: 5, 
      nombre: "Temporada 5", 
      episodios: 22, 
      año: 2015, 
      desc: "El grupo se enfrenta a Black Claw, una organización secreta que busca revelar la existencia de los Wesen al mundo.",
      destacado: "Conspiración Black Claw",
      color: "bg-yellow-900"
    },
    { 
      id: 6, 
      nombre: "Temporada 6", 
      episodios: 13, 
      año: 2017, 
      desc: "Batalla final contra Zerstörer mientras Nick y sus aliados luchan por salvar a Portland y al mundo.",
      destacado: "Batalla final",
      color: "bg-gray-800"
    },
  ]

  return (
    <section id="temporadas" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-red-600">Temporadas</span> de Grimm
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {temporadas.map((temp) => (
            <motion.div 
              key={temp.id}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-red-700 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-red-500">{temp.nombre}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <FaCalendarAlt className="text-gray-400" />
                    <span className="text-gray-400">{temp.año}</span>
                  </div>
                </div>
                <span className={`${temp.color} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                  {temp.id}
                </span>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <FaPlay className="text-green-500 mr-2" />
                  <span>{temp.episodios} episodios</span>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-2" />
                  <span>8.2/10</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{temp.desc}</p>
              
              <div className="mb-6">
                <span className="text-red-400 font-semibold">⭐ {temp.destacado}</span>
              </div>
              
              <button className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold">
                <FaTv /> Ver Temporada Completa
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            <span className="text-red-500 font-bold">6 temporadas</span> • 
            <span className="mx-2">|</span>
            <span className="text-yellow-400">123 episodios</span> • 
            <span className="mx-2">|</span>
            <span className="text-green-400">2011-2017</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cursos;