/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
/* eslint-enable no-unused-vars */
import { FaImage, FaVideo, FaCamera, FaHeart, FaShare } from "react-icons/fa"

const Galeria = () => {
  const imagenes = [
    { 
      id: 1, 
      tipo: "Personajes", 
      desc: "Nick Burkhardt como Grimm", 
      likes: 2450,
      img: "https://i.pinimg.com/474x/33/24/b1/3324b1e1f1abf4f7aad18b73d79d060d.jpg"
    },
    { 
      id: 2, 
      tipo: "Bestias", 
      desc: "Blutbad en su forma Wesen", 
      likes: 1890,
      img: "data:image/jpeg;base64,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"
    },
    { 
      id: 3, 
      tipo: "Escenas", 
      desc: "Portland de noche", 
      likes: 1560,
      img: "https://thumbs.dreamstime.com/b/portland-oregon-en-la-noche-23172600.jpg"
    },
    { 
      id: 4, 
      tipo: "Personajes", 
      desc: "Monroe y Rosalee", 
      likes: 2100,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tpLBEq4gcwtuBJRDdJ27-bk2tmH4PlBtKg&s"
    },
    { 
      id: 5, 
      tipo: "Bestias", 
      desc: "Hexenbiest transformación", 
      likes: 1980,
      img: "https://m.media-amazon.com/images/I/91p0BnoaJjL.jpg"
    },
    { 
      id: 6, 
      tipo: "Escenas", 
      desc: "La tienda de especias", 
      likes: 1340,
      img: "https://ih1.redbubble.net/image.2160450835.5140/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg"
    },
    { 
      id: 7, 
      tipo: "Personajes", 
      desc: "Capt. Sean Renard", 
      likes: 1670,
      img: "https://www.formulatv.com/images/series/0000/505-f1.jpg"
    },
    { 
      id: 8, 
      tipo: "Bestias", 
      desc: "Zauberbiest poder", 
      likes: 1820,
      img: "https://i.pinimg.com/236x/1a/89/2a/1a892a2e878f8d312813123c72f8bf7b.jpg"
    },
    { 
      id: 9, 
      tipo: "Escenas", 
      desc: "Bosques de Oregon", 
      likes: 1230,
      img: "https://media.istockphoto.com/id/1206774534/es/foto/bosque-de-oreg%C3%B3n-bosque-nacional-willamette.jpg?s=170667a&w=0&k=20&c=o_r5cvahb-cvwj_J5ZcjihshGI_1VdN1TJicJh-8hZg="
    },
  ]

  return (
    <section id="galeria" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-red-600">Galería</span> Grimm
        </h2>
        
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-8">
            Imágenes exclusivas de <span className="text-red-400">personajes</span>, 
            <span className="text-blue-400 mx-2">bestias</span> y 
            <span className="text-green-400 mx-2">locaciones</span> de la serie.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-red-700 px-4 py-2 rounded-lg">Todas</button>
            <button className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">Personajes</button>
            <button className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">Bestias</button>
            <button className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">Escenas</button>
            <button className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">Detrás de cámaras</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagenes.map((img) => (
            <motion.div 
              key={img.id}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800"
            >
              {/* CONTENEDOR DE IMAGEN - AJUSTE PERFECTO */}
              <div className="h-48 w-full relative overflow-hidden bg-gray-800">
                {/* IMAGEN CENTRADA Y AJUSTADA */}
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <img 
                    src={img.img} 
                    alt={img.desc}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full flex flex-col items-center justify-center p-4';
                      fallback.innerHTML = `
                        <FaImage class="text-4xl text-gray-600 mb-3" />
                        <span class="text-gray-500 text-center text-sm">${img.desc}</span>
                        <span class="text-gray-600 text-xs mt-2">Imagen no disponible</span>
                      `;
                      e.target.parentNode.appendChild(fallback);
                    }}
                  />
                </div>
                
                {/* BADGE DEL TIPO */}
                <div className="absolute top-3 right-3 z-10">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold shadow-lg ${
                    img.tipo === 'Personajes' ? 'bg-red-900/90 text-red-200' :
                    img.tipo === 'Bestias' ? 'bg-blue-900/90 text-blue-200' :
                    'bg-green-900/90 text-green-200'
                  }`}>
                    {img.tipo}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{img.desc}</h3>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
                      <FaHeart /> {img.likes.toLocaleString()}
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors duration-200">
                      <FaShare /> Compartir
                    </button>
                  </div>
                  <button className="text-gray-400 hover:text-white transition-colors duration-200">
                    <FaCamera />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-4 rounded-lg flex items-center gap-3 transition-all duration-200"
            >
              <FaImage /> Ver Galería Completa
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold px-8 py-4 rounded-lg flex items-center gap-3 transition-all duration-200"
            >
              <FaVideo /> Videos Exclusivos
            </motion.button>
          </div>
          
          <p className="text-gray-500 mt-8">
            <span className="text-red-400 font-bold">9 de 250+</span> imágenes disponibles
          </p>
        </div>
      </div>
    </section>
  )
}

export default Galeria