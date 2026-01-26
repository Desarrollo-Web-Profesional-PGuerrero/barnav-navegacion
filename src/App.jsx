import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Banner from './componentes/Banner'
import Home from './componentes/secciones/Home'
import About from './componentes/secciones/About'
import Cursos from './componentes/secciones/Cursos'
import Bestias from './componentes/secciones/Bestias'
import Galeria from './componentes/secciones/Galeria'

const App = () => {
  return (
    <Router>
      <div className='overflow-x-hidden min-h-screen bg-gradient-to-b from-gray-900 to-black'>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/personajes" element={<About />} />
          <Route path="/temporadas" element={<Cursos />} />
          <Route path="/bestias" element={<Bestias />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App