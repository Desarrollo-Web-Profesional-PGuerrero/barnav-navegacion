/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
/* eslint-enable no-unused-vars */
import { FaSkull, FaBookDead, FaExclamationTriangle } from "react-icons/fa"

const Banner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-gray-900 via-red-900 to-black py-12 px-6 mt-8 rounded-xl mx-4 shadow-lg border border-red-800"
    >
      <div className="max-w-6xl mx-auto text-center">
        
        <div className="flex justify-center gap-4 mb-6">
          <FaSkull className="text-3xl text-red-500" />
          <FaBookDead className="text-3xl text-yellow-500" />
          <FaExclamationTriangle className="text-3xl text-orange-500" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ⚔️ ¡ADVERTENCIA GRIMM! ⚔️
        </h2>
        
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Las criaturas caminan entre nosotros. Solo un <span className="text-yellow-400 font-bold">Grimm</span> puede ver su verdadera forma.
          <span className="block mt-2 text-red-300 font-semibold">
            🔥 6 temporadas completas disponibles
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-700 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-800 transition-all flex items-center justify-center gap-2"
          >
            <FaBookDead /> Grimm Completo
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-red-600 text-red-400 font-bold px-8 py-3 rounded-lg hover:bg-red-900/30 transition-all"
          >
            Ver Wesen Database
          </motion.button>
        </div>
        
        <div className="mt-8">
          <p className="text-white/80 mb-2">Código de acceso Grimm:</p>
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotateY: [0, 180, 360]
            }}
            transition={{ 
              scale: { duration: 2, repeat: Infinity },
              rotateY: { duration: 4, repeat: Infinity }
            }}
            className="inline-block bg-red-900/50 backdrop-blur-sm px-6 py-2 rounded-lg border border-red-700"
          >
            <span className="text-2xl font-bold text-yellow-300 font-mono">GRIMM-2026</span>
          </motion.div>
          <p className="text-white/70 text-sm mt-4">
            Acceso exclusivo para cazadores Grimm
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Banner