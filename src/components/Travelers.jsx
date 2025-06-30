import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Travelers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="flex flex-col justify-between items-center px-12 pb-30 pt-[140px] dark:bg-black "
    >
      <motion.h1
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={
          inView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 50, scale: 0.8 }
        }
        transition={{
          duration: 1,
          delay: 0.9,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="text-3xl font-bold text-black dark:text-white text-glow-black"
      >
        Best Travelers Of The{" "}
        <span className="text-[#477ED9]">Month</span>
      </motion.h1>

      <div className="flex flex-row gap-[120px] mt-[50px]">
        {/* ====== CARD 1 ====== */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8, rotate: 10 }}
          animate={
            inView
              ? { opacity: 1, y: 0, scale: 1, rotate: 0 }
              : { opacity: 0, y: 50, scale: 0.8, rotate: 10 }
          }
          transition={{
            duration: 1,
            delay: 1.3,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="shadow-xl shadow-black/40 w-[319px] h-[453px] rounded-[120px]"
        >
          <div className="flex flex-col items-center relative">
            <img
              className="w-[319px] h-[448px] rounded-[120px] object-cover"
              src="./src/assets/p4.jpg"
              alt=""
            />
            <div className="relative w-[319px] h-[124px]">
              <svg className="absolute bottom-[120px]" width="100%" height="100%">
                <defs>
                  <mask
                    id="circle-cutout"
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                  >
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <circle cx="50%" cy="0" r="30" fill="black" />
                  </mask>
                </defs>
                <foreignObject
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  mask="url(#circle-cutout)"
                >
                  <div className="flex flex-col items-center justify-end bg-white py-1 px-3 pb-5 w-[319px] h-[124px] rounded-b-[120px]">
                    <h1 className="text-2xl font-bold text-black">John Doe</h1>
                    <h2 className="text-lg font-semibold text-black/40">@John Doe</h2>
                  </div>
                </foreignObject>
              </svg>
              <img
                className="w-[63px] h-[63px] absolute bottom-[208px] left-[128px]"
                src="./src/assets/pe1.png"
                alt=""
              />
            </div>
          </div>
        </motion.div>

        {/* ====== CARD 2 ====== */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8, rotate: -10 }}
          animate={
            inView
              ? { opacity: 1, y: 0, scale: 1, rotate: 0 }
              : { opacity: 0, y: 50, scale: 0.8, rotate: -10 }
          }
          transition={{
            duration: 1,
            delay: 1.3,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="shadow-xl shadow-black/40 w-[319px] h-[453px] rounded-[120px]"
        >
          <div className="flex flex-col items-center relative">
            <img
              className="w-[319px] h-[448px] rounded-[120px] object-cover"
              src="./src/assets/p1.jpg"
              alt=""
            />
            <div className="relative w-[319px] h-[124px]">
              <svg className="absolute bottom-[120px]" width="100%" height="100%">
                <defs>
                  <mask
                    id="circle-cutout"
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                  >
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <circle cx="50%" cy="0" r="30" fill="black" />
                  </mask>
                </defs>
                <foreignObject
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  mask="url(#circle-cutout)"
                >
                  <div className="flex flex-col items-center justify-end bg-white py-1 px-3 pb-5 w-[319px] h-[124px] rounded-b-[120px]">
                    <h1 className="text-2xl font-bold text-black">Chance klim</h1>
                    <h2 className="text-lg font-semibold text-black/40">@Chance-klim</h2>
                  </div>
                </foreignObject>
              </svg>
              <img
                className="w-[63px] h-[63px] absolute bottom-[208px] left-[128px]"
                src="./src/assets/pe2.png"
                alt=""
              />
            </div>
          </div>
        </motion.div>

        {/* ====== CARD 3 ====== */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8, rotate: 10 }}
          animate={
            inView
              ? { opacity: 1, y: 0, scale: 1, rotate: 0 }
              : { opacity: 0, y: 50, scale: 0.8, rotate: 10 }
          }
          transition={{
            duration: 1,
            delay: 1.3,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="shadow-xl shadow-black/40 w-[319px] h-[453px] rounded-[120px]"
        >
          <div className="flex flex-col items-center relative">
            <img
              className="w-[319px] h-[448px] rounded-[120px] object-cover"
              src="./src/assets/p3.avif"
              alt=""
            />
            <div className="relative w-[319px] h-[124px]">
              <svg className="absolute bottom-[120px]" width="100%" height="100%">
                <defs>
                  <mask
                    id="circle-cutout"
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                  >
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <circle cx="50%" cy="0" r="30" fill="black" />
                  </mask>
                </defs>
                <foreignObject
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  mask="url(#circle-cutout)"
                >
                  <div className="flex flex-col items-center justify-end bg-white py-1 px-3 pb-5 w-[319px] h-[124px] rounded-b-[120px]">
                    <h1 className="text-2xl font-bold text-black">Nolan Smith</h1>
                    <h2 className="text-lg font-semibold text-black/40">@Nolan-Smith</h2>
                  </div>
                </foreignObject>
              </svg>
              <img
                className="w-[63px] h-[63px] absolute bottom-[208px] left-[128px]"
                src="./src/assets/pe3.png"
                alt=""
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Travelers;
