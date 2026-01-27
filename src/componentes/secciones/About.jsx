/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
/* eslint-enable no-unused-vars */
import { FaEye, FaShieldAlt, FaBook, FaFemale, FaUserSecret, FaCrosshairs } from "react-icons/fa"

const About = () => { 
  const personajes = [
    {
      id: 1,
      nombre: "Nick Burkhardt",
      actor: "David Giuntoli",
      desc: "Detective de Portland que descubre que es un Grimm, un cazador de criaturas sobrenaturales llamadas Wesen.",
      icono: <FaEye className="text-red-500 text-2xl" />,
      tipo: "Grimm",
      color: "border-red-600"
    },
    {
      id: 2,
      nombre: "Monroe",
      actor: "Silas Weir Mitchell",
      desc: "Wesen Blutbad reformado que se convierte en aliado y amigo de Nick, ayudándolo a entender el mundo Wesen.",
      icono: <FaShieldAlt className="text-blue-500 text-2xl" />,
      tipo: "Blutbad",
      color: "border-blue-600"
    },
    {
      id: 3,
      nombre: "Juliette Silverton",
      actor: "Bitsie Tulloch",
      desc: "Veterinaria y pareja de Nick, cuya vida cambia para siempre cuando descubre la verdad sobre las habilidades de Nick.",
      icono: <FaFemale className="text-purple-500 text-2xl" />,
      tipo: "Hexenbiest",
      color: "border-purple-600"
    },
    {
      id: 4,
      nombre: "Sgt. Drew Wu",
      actor: "Reggie Lee",
      desc: "Compañero de trabajo de Nick que gradualmente descubre la existencia de los Wesen y se convierte en aliado.",
      icono: <FaUserSecret className="text-green-500 text-2xl" />,
      tipo: "Humano",
      color: "border-green-600"
    },
    {
      id: 5,
      nombre: "Capt. Sean Renard",
      actor: "Sasha Roiz",
      desc: "Capitán de policía medio-Zauberbiest con sus propios planes y ambiciones dentro del mundo Wesen.",
      icono: <FaCrosshairs className="text-yellow-500 text-2xl" />,
      tipo: "Zauberbiest",
      color: "border-yellow-600"
    },
    {
      id: 6,
      nombre: "Rosalee Calvert",
      actor: "Bree Turner",
      desc: "Fuchsbau que toma el control de la tienda de especias de su hermano y se convierte en aliada clave del grupo.",
      icono: <FaBook className="text-orange-500 text-2xl" />,
      tipo: "Fuchsbau",
      color: "border-orange-600"
    }
  ]

  return (
    <section id="personajes" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-red-600">Personajes</span> de Grimm
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personajes.map((personaje) => (
            <motion.div 
              key={personaje.id}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-gray-800 p-6 rounded-xl border-l-4 ${personaje.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="mr-3">
                    {personaje.icono}
                  </div>
                  <h3 className="text-2xl font-bold">{personaje.nombre}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  personaje.tipo === 'Grimm' ? 'bg-red-900 text-red-300' :
                  personaje.tipo === 'Blutbad' ? 'bg-blue-900 text-blue-300' :
                  personaje.tipo === 'Hexenbiest' ? 'bg-purple-900 text-purple-300' :
                  'bg-gray-700 text-gray-300'
                }`}>
                  {personaje.tipo}
                </span>
              </div>
              
              <p className="text-gray-400 text-sm mb-2">Actor: {personaje.actor}</p>
              <p className="text-gray-300">{personaje.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;