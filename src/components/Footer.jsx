import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <footer
      ref={ref}
      className="bg-[#dbf1ff] dark:dark:bg-[#292929] text-black py-4 text-center
        flex flex-col items-center justify-center"
    >
      <div className="mb-4">
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
          className="text-3xl font-bold mb-4 text-black dark:text-white
                text-shadow-lg shadow-black"
        >
          Subscribe newsletter <span className="text-[#477ED9]">&</span> Get Letest
          News
        </motion.h1>

        <div
          className=" flex items-center justify-between
                 bg-white rounded-3xl py-2 px-4
                 shadow-all-sides-black "
        >
          <input
            className="bg-white rounded-3xl py-2 px-4
                    outline-none "
            placeholder="Enter your E-mail address"
            type="email"
          />
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{
              duration: 1,
              delay: 1,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="bg-[#477ED9] text-white py-2 px-4 rounded-3xl
                    hover:bg-black hover:text-[#477ED9]"
          >
            Subscribe Now
          </motion.button>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center mt-4 space-x-22">
        {/* Column 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={
            inView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 50, scale: 0.8 }
          }
          transition={{
            duration: 1,
            delay: 1.2,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="flex flex-col items-start justify-center"
        >
          <h1 className="dark:text-white text-black font-medium">About Us</h1>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Careers</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Media Centre</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Our Planet</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Our People</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Our Communities</p>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={
            inView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: -50, scale: 0.8 }
          }
          transition={{
            duration: 1,
            delay: 1.3,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="flex flex-col items-start justify-center"
        >
          <h1 className="dark:text-white text-black font-medium">Experience</h1>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Cabin features</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Shop Emirates</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Dining</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Our Lounges</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Our Skies</p>
        </motion.div>

        {/* Column 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={
            inView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 50, scale: 0.8 }
          }
          transition={{
            duration: 1,
            delay: 1.4,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="flex flex-col items-start justify-center"
        >
          <h1 className="dark:text-white text-black font-medium">Where we fly</h1>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Route Map</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Asia and Pacific</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">The Americas</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Europe</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">The Middle East</p>
        </motion.div>

        {/* Column 4 */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={
            inView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: -50, scale: 0.8 }
          }
          transition={{
            duration: 1,
            delay: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="flex flex-col items-start justify-center"
        >
          <h1 className="dark:text-white text-black font-medium">Before you fly</h1>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Baggage</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Visa and Passport</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Travel Information</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Dubai International </p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">To and From Airport</p>
        </motion.div>

        {/* Column 5 */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={
            inView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 50, scale: 0.8 }
          }
          transition={{
            duration: 1,
            delay: 1.6,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="flex flex-col items-start justify-center"
        >
          <h1 className="dark:text-white text-black font-medium">Loyalty</h1>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">
            Log in to Emirates Skywords
          </p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">
            Join Emirates Skywords
          </p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">
            Business Rewords benifit
          </p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">Our Partners</p>
          <p className="text-[#767676]  dark:text-[#d2d2d2]">
            Register your company
          </p>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={
          inView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 10, scale: 0.8 }
        }
        transition={{
          duration: 1,
          delay: 0.9,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="text-[#515151]  dark:text-[#d2d2d2] mt-8"
      >
        &copy; 2025 Designed & Developed by Reem Farouq Hikmat . All rights
        reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
