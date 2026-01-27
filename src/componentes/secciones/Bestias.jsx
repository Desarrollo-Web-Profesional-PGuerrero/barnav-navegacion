/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
/* eslint-enable no-unused-vars */
import { FaSkull, FaPaw, FaFire, FaSnowflake, FaBolt, FaLeaf } from "react-icons/fa"

const Bestias = () => {
  const bestias = [
    {
      id: 1,
      nombre: "Blutbad",
      tipo: "Lobo",
      desc: "Creaturas similares a hombres lobo con un fuerte sentido del olfato y tendencias violentas.",
      debilidad: "Plata",
      peligro: "Alto",
      icono: <FaPaw className="text-red-500 text-3xl" />,
      color: "bg-red-900/30"
    },
    {
      id: 2,
      nombre: "Hexenbiest",
      tipo: "Bruja",
      desc: "Wesen con habilidades mágicas y de hechicería, a menudo manipuladoras y poderosas.",
      debilidad: "Hierro",
      peligro: "Muy Alto",
      icono: <FaFire className="text-purple-500 text-3xl" />,
      color: "bg-purple-900/30"
    },
    {
      id: 3,
      nombre: "Fuchsbau",
      tipo: "Zorro",
      desc: "Inteligentes y astutos, excelentes en el comercio y la negociación. Generalmente pacíficos.",
      debilidad: "Ninguna específica",
      peligro: "Bajo",
      icono: <FaLeaf className="text-orange-500 text-3xl" />,
      color: "bg-orange-900/30"
    },
    {
      id: 4,
      nombre: "Zauberbiest",
      tipo: "Hechicero",
      desc: "Versión masculina del Hexenbiest, igual de poderoso pero con diferentes habilidades.",
      debilidad: "Hierro forjado",
      peligro: "Alto",
      icono: <FaBolt className="text-blue-500 text-3xl" />,
      color: "bg-blue-900/30"
    },
    {
      id: 5,
      nombre: "Hundjäger",
      tipo: "Perro de caza",
      desc: "Cazadores leales y feroces, a menudo empleados como guardaespaldas o mercenarios.",
      debilidad: "Fuego",
      peligro: "Medio",
      icono: <FaSkull className="text-gray-400 text-3xl" />,
      color: "bg-gray-800/30"
    },
    {
      id: 6,
      nombre: "Eisbiber",
      tipo: "Castor",
      desc: "Pacíficos y trabajadores, excelentes constructores y generalmente evitaban conflictos.",
      debilidad: "Agua",
      peligro: "Muy Bajo",
      icono: <FaSnowflake className="text-cyan-400 text-3xl" />,
      color: "bg-cyan-900/30"
    }
  ]

  return (
    <section id="bestias" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-red-600">Bestias</span> Grimm (Wesen)
        </h2>
        
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-300">
            Los <span className="text-yellow-400 font-bold">Wesen</span> son criaturas sobrenaturales que pueden ocultar 
            su apariencia verdadera a los humanos, pero no a los <span className="text-red-400 font-bold">Grimm</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestias.map((bestia) => (
            <motion.div 
              key={bestia.id}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`${bestia.color} p-6 rounded-xl border border-gray-700`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {bestia.icono}
                  <div>
                    <h3 className="text-2xl font-bold">{bestia.nombre}</h3>
                    <p className="text-gray-400">Tipo: {bestia.tipo}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full ${
                  bestia.peligro === 'Muy Alto' ? 'bg-red-700 text-white' :
                  bestia.peligro === 'Alto' ? 'bg-orange-700 text-white' :
                  bestia.peligro === 'Medio' ? 'bg-yellow-700 text-white' :
                  'bg-green-700 text-white'
                }`}>
                  {bestia.peligro}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{bestia.desc}</p>
              
              <div className="bg-black/50 p-4 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <span className="text-gray-400">Debilidad:</span>
                    <p className="font-semibold text-red-300">{bestia.debilidad}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Nivel de amenaza:</span>
                    <p className="font-semibold text-yellow-300">{bestia.peligro}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-4 rounded-lg text-xl"
          >
            Explorar Todas las Bestias (150+ Wesen)
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Bestias