import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Unacommpaid = () => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative
      dark:bg-black
      pt-[170px]
      px-[100px]"
    >
      <img className="p-5" src="assets/Subtract.png" alt="" />

      <div className="absolute
          text-center top-[200px] left-[160px] z-50
          text-shadow-2xs text-glow-white"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
          transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 100, damping: 20 }}
          className="text-black text-[70px] font-bold"
        >
          Unaccompaied
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
          transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 100, damping: 20 }}
          className="text-black text-[80px] font-bold"
        >
          Minors Loung
        </motion.h1>
      </div>

      <div className="absolute top-[550px] left-[730px] z-50 grid grid-cols-2 space-x-5 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
          transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 100, damping: 20 }}
          className=" text-start top-[400px] left-[160px] z-50 text-shadow-2xs "
        >
          <h3 className="text-black text-[20px] font-bold"> Help through the airport</h3>
          <p className="text-[#D3D3D3] text-[15px] w-[300px] font-medium">
           They’ll  stay with them all the way 
           through the airport  to help them at
            security and immigration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : undefined}
          transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 100, damping: 20 }}
          className=" text-start top-[400px] left-[160px] z-50 text-shadow-2xs "
        >
          <h3 className="text-black text-[20px] font-bold"> Priority boarding</h3>
          <p className="text-[#D3D3D3] text-[15px] w-[300px] font-medium">
            Families and young flyers always board the plane first.
             That gives them more time to get settled.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.8 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : undefined}
          transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 100, damping: 20 }}
          className=" text-start top-[400px] left-[160px] z-50 text-shadow-2xs "
        >
          <h3 className="text-black text-[20px] font-bold">Care on the fight</h3>
          <p className="text-[#D3D3D3] text-[15px] w-[300px] font-medium">
            Our cabin crew are an hand to make 
            sure your young flyer has a fun, comfurtable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
          transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 100, damping: 20 }}
          className=" text-start top-[400px] left-[160px] z-50 text-shadow-2xs "
        >
          <h3 className="text-black text-[20px] font-bold">Support when they land</h3>
          <p className="text-[#D3D3D3] text-[15px] w-[300px] font-medium">
            When your child arrives, a specialist member 
            of our team will be at the aircraft door.
          </p>
        </motion.div>
      </div>

      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 100, damping: 20 }}
        className="absolute top-[188px] left-[715px] w-[680px]"
        src="assets/E2.png"
        alt=""
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 100, damping: 20 }}
        className="absolute top-[470px] left-[130px] w-[512px]"
        src="assets/E1.png"
        alt=""
      />
    </section>
  )
}

export default Unacommpaid
