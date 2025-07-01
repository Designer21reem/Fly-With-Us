import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
const Hero = () => {
    return (
        <section className='flex flex-col items-center relative
        dark:bg-black'>
                <motion.h1
                initial={{ opacity: 0, y: 50, scale: 0.8}}
                animate={{ opacity: 1, y: 0,scale: 1 }}
                transition={{ duration: 1 , delay: 0.9,type: "spring" 
                    ,stiffness: 100,
                    damping: 20
                }}
                className='text-5xl font-bold
                text-center mt-7 dark:text-white'>
                    Find And Book <br />
                    A Great <span className='text-[#477ED9]'>Experience</span>
                </motion.h1>

                <div className='absolute dark:bg-black w-full h-[930px] top-[100px] -z-40'>

                </div>
                <img className='w-[1000px] h-[600px]
                object-cover absolute top-[200px]' src="assets/sky.png" alt="sky" />

                <div className=' absolute top-[200px] left-0
                 z-50'>
                     <Spline
                 className=''
                scene="https://prod.spline.design/FSPQFWsIA8dkaFVU/scene.splinecode" />
                </div>
 

        </section>
    );
}

export default Hero