/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
/* eslint-enable no-unused-vars */
import { FaSkullCrossbones, FaGhost, FaBookDead } from "react-icons/fa"
import Banner from "../Banner";

const Home = () => { 
  return (
    
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

            
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-red-600">GRIMM</span>
            <span className="text-gray-300">: El Mundo de los Wesen</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Descubre los secretos detrás de las criaturas mitológicas que acechan en Portland. 
            Nick Burkhardt, un <span className="text-yellow-400 font-semibold">Grimm</span>, protege a la humanidad.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaSkullCrossbones className="text-4xl text-red-500 mb-2" />
              <span className="text-lg">Wesen</span>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaGhost className="text-4xl text-blue-400 mb-2" />
              <span className="text-lg">Criaturas</span>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaBookDead className="text-4xl text-purple-500 mb-2" />
              <span className="text-lg">Grimm</span>
            </motion.div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-4 rounded-lg text-xl"
          >
            Entrar al Mundo Grimm
            
            
          </motion.button>
          <Banner/>
          <br />
        </motion.div>
      </div>
    </section>
    
  );
  
};


export default Home;