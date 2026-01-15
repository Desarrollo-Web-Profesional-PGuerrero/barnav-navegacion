import { AnimatePresence, motion as Motion } from "motion/react"

const MenuResponsivo = ({ open, navbarLinks }) => {
  const animacion = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.3 }
  }

  return (
    <AnimatePresence mode="wait">
      {open && (
        <Motion.div 
          {...animacion}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white rounded-b-md py-7 m-6">
            <ul className="flex flex-col justify-center items-center gap-10">
              {navbarLinks.map((item) => (
                <li key={item.id} className="hover:text-secondary cursor-pointer">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  )
}

export default MenuResponsivo