/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
/* eslint-enable no-unused-vars */
import { FaUser, FaLock, FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa"
import { useState } from 'react'

const Login = () => {
  const [mostrarPassword, setMostrarPassword] = useState(false)
  const [esRegistro, setEsRegistro] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (esRegistro) {
      console.log('Registro:', formData)
      alert(`¡Bienvenido cazador ${formData.nombre}! Tu cuenta Grimm ha sido creada.`)
    } else {
      console.log('Login:', { email: formData.email, password: formData.password })
      alert('¡Acceso concedido! Bienvenido de nuevo, Grimm.')
    }
  }

  return (
    <section id="login" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Acceso <span className="text-red-600">Grimm</span>
            </h2>
            <p className="text-gray-400">
              {esRegistro ? 'Únete a la comunidad Grimm' : 'Ingresa a tu cuenta de cazador'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl"
          >
            {/* Tabs Login/Registro */}
            <div className="flex mb-8">
              <button
                onClick={() => setEsRegistro(false)}
                className={`flex-1 py-3 font-bold rounded-l-lg transition-all ${!esRegistro ? 'bg-red-700 text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-800'}`}
              >
                Iniciar Sesión
              </button>
              <button
                onClick={() => setEsRegistro(true)}
                className={`flex-1 py-3 font-bold rounded-r-lg transition-all ${esRegistro ? 'bg-red-700 text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-800'}`}
              >
                Registrarse
              </button>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {esRegistro && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-gray-400 mb-2">Nombre completo</label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        name="nombre"
                        placeholder="Nick Burkhardt"
                        className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        value={formData.nombre}
                        onChange={handleChange}
                        required={esRegistro}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    placeholder="grimm@cazador.com"
                    className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Contraseña</label>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type={mostrarPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="6"
                  />
                  <button
                    type="button"
                    onClick={() => setMostrarPassword(!mostrarPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
                  >
                    {mostrarPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {!esRegistro && (
                <div className="flex justify-between items-center">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded bg-gray-700" />
                    <span className="text-gray-400 text-sm">Recordarme</span>
                  </label>
                  <a href="#" className="text-red-400 hover:text-red-300 text-sm">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 rounded-lg transition-all"
              >
                {esRegistro ? 'Crear Cuenta Grimm' : 'Acceder como Grimm'}
              </motion.button>
            </form>

            {/* Divisor */}
            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-gray-700"></div>
              <span className="px-4 text-gray-500 text-sm">O continuar con</span>
              <div className="flex-1 h-px bg-gray-700"></div>
            </div>

            {/* Botones sociales */}
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 py-3 rounded-lg transition-all"
              >
                <FaGoogle className="text-red-500" />
                <span>Google</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 py-3 rounded-lg transition-all"
              >
                <FaGithub className="text-gray-300" />
                <span>GitHub</span>
              </motion.button>
            </div>

            {/* Enlace cambiar */}
            <p className="text-center mt-8 text-gray-400">
              {esRegistro ? '¿Ya tienes cuenta? ' : '¿No tienes cuenta? '}
              <button
                onClick={() => setEsRegistro(!esRegistro)}
                className="text-red-400 hover:text-red-300 font-semibold ml-1"
              >
                {esRegistro ? 'Iniciar Sesión' : 'Regístrate aquí'}
              </button>
            </p>
          </motion.div>

          {/* Información adicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 text-center text-gray-500 text-sm"
          >
            <p>⚠️ Solo cazadores <span className="text-yellow-400">Grimm</span> autorizados pueden acceder</p>
            <p className="mt-2">Al acceder, aceptas las <a href="#" className="text-red-400 hover:text-red-300">leyes Wesen</a></p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Login