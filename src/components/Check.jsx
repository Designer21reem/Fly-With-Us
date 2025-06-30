import  { useState, useRef } from 'react'
import { GrLocation } from "react-icons/gr";
import { TbHandFinger,TbHandFingerDown } from "react-icons/tb";
import {LuCalendarClock }  from "react-icons/lu";
import { RiUserAddLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Check = () => {
     const classes = ["Economy", "Business", "First Class"];
     const [selectedClass, setSelectedClass] = useState("Economy");
    const [showModal, setShowModal] = useState(false);


  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
    // Form states
    const [location, setLocation] = useState("");
    const [travelers, setTravelers] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(false);

    // Refs for focus
    const locationRef = useRef();
    const travelersRef = useRef();
    const checkInRef = useRef();
    const checkOutRef = useRef();

  const handleSubmit = () => {
    if (!location) {
        setErrorMessage("Location is required.");
        setShowError(true);
        locationRef.current.focus();
        return;
    }
    if (!travelers) {
        setErrorMessage("Number of travelers is required.");
        setShowError(true);
        travelersRef.current.focus();
        return;
    }
    if (!checkIn) {
        setErrorMessage("Check-in date is required.");
        setShowError(true);
        checkInRef.current.focus();
        return;
    }
    if (!checkOut) {
        setErrorMessage("Check-out date is required.");
        setShowError(true);
        checkOutRef.current.focus();
        return;
    }

    // Clear error if all valid
    setShowError(false);
    setErrorMessage("");

    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
            setShowModal(false);
            setLocation("");
            setTravelers("");
            setCheckIn("");
            setCheckOut("");
        }, 3000);
    }, 1500);
};


    return (
        <section 
        ref={ref}
        className='flex flex-col items-center
        mt-[900px] z-50 dark:bg-black'>
           <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={
            inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
           transition={{ duration: 1, delay: 0.9, type: "spring" }}
           className="flex flex-row justify-evenly items-center 
           px-6 py-3 bg-[#F5F5F5] text-[#5E5E5E]
           mx-[550px] rounded-4xl gap-12
           shadow-xs shadow-black/50">{classes.map((classType) => (
        <h4
          key={classType}
          onClick={() => setSelectedClass(classType)}
          className={`w-[150px] text-center cursor-pointer px-4 py-2 rounded-4xl transition duration-200
            ease-in-out 
            ${selectedClass === classType
              ? "bg-black text-[#477ED9] border-2 border-[#477ED9] shadow-lg shadow-[#477ED9]/50"
              : "hover:text-[#477ED9]"}`}
        >
          {classType}
        </h4>
      ))}
           </motion.div>


{/* card */}
           <div className='flex flex-row justify-start items-start px-6 py-3
             text-[#5E5E5E] text-center
            w-[90%] mt-32 gap-30
            '>
                
             {/* left side */}
             <motion.div
             
             initial={{ opacity: 0, x: -50 }}
             animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
             transition={{ duration: 1, delay: 0.9, type: "spring" }}
             className='w-[40%] flex flex-col justify-between items-center
             bg-[#F5F5F5]
             rounded-3xl outline-2 outline-black/20
             shadow-xl shadow-[#5E5E5E]/40
             
             space-y-7 py-7 relative h-[350px]'
             style={{borderBottom: "4px solid #477ED9"}}
             >

                <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 1, delay: 0.9, type: "spring" }}
                className='flex flex-row items-center gap-4
                absolute left-0 pl-[40px]'>
                    {/* icon */}
                    <GrLocation className='text-[#477ED9] text-4xl bg-[#D9D9D9] px-2 py-2 h-[45px]
                    rounded-full shadow-xs shadow-black/40' />

                     <div className='flex flex-col text-start'>
                        <h4 className='font-bold text-xl'>Location</h4>
                        <p className='text-[#5E5E5E] text-sm'>Where are you going ?</p>
                     </div>
                     
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 1, delay: 0.9, type: "spring" }}
                className='flex flex-row items-center gap-4
                absolute left-0 pl-[40px] top-[100px]'>
                    {/* icon */}
                    <RiUserAddLine  className='text-[#477ED9] text-4xl bg-[#D9D9D9] px-2 py-2 h-[45px]
                    rounded-full shadow-xs shadow-black/40' />

                     <div className='flex flex-col text-start'>
                        <h4 className='font-bold text-xl'>Travelers</h4>
                        <p className='text-[#5E5E5E] text-sm'>Add guests</p>
                     </div>
                     
                </motion.div>

                <motion.div
                 initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 1, delay: 0.9, type: "spring" }}
                className='flex flex-row items-center gap-4
                absolute left-0 pl-[40px] top-[180px]'>
                    {/* icon */}
                    <LuCalendarClock  className='text-[#477ED9] text-4xl bg-[#D9D9D9] px-2 py-2 h-[45px]
                    rounded-full shadow-xs shadow-black/40' />

                     <div className='flex flex-col text-start'>
                        <h4 className='font-bold text-xl'>Check in</h4>
                        <p className='text-[#5E5E5E] text-sm'>Add date</p>
                     </div>
                     
                </motion.div>

                <motion.div
                 initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 1, delay: 0.9, type: "spring" }}
                className='flex flex-row items-center gap-4
                absolute left-0 pl-[40px] top-[260px]'>
                    {/* icon */}
                    <LuCalendarClock  className='text-[#477ED9] text-4xl bg-[#D9D9D9] px-2 py-2 h-[45px]
                    rounded-full shadow-xs shadow-black/40' />

                     <div className='flex flex-col text-start'>
                        <h4 className='font-bold text-xl'>Check out</h4>
                        <p className='text-[#5E5E5E] text-sm'>Add date</p>
                     </div>
                     
                </motion.div>

                {/* button */}
                <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1, delay: 1.2, type: "spring" }}

                onClick={() => setShowModal(!showModal)}
                className='text-white bg-black 
                    outline-5 outline-[#477ED9]
                    px-4 py-2 rounded-4xl
                    shadow-xl shadow-black/40
                    h-[60px] w-[60px]  absolute top-[320px]'>
                {showModal ? (
                    <TbHandFinger className='text-3xl text-center' />
                ) : (
                    <TbHandFingerDown className='text-3xl text-center' />
                )}
                </motion.button>

{showModal && (
  <div className="absolute top-[380px] left-0 w-full mt-4 p-6 pt-[40px] bg-white shadow-xl rounded-3xl z-50">
    <div className="flex flex-col gap-6">

      {/* Location */}
      <div className="flex items-center gap-4">
        <GrLocation className='text-[#477ED9] text-4xl bg-[#D9D9D9] px-2 py-2 h-[45px]
                    rounded-full shadow-xs shadow-black/40' />
        <input
          ref={locationRef}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Enter location"
          className="w-full p-3 outline-none bg-blue-100 text-[#5E5E5E] placeholder:text-gray-400 border-b-2 pb-1"
          style={{
            borderBottomColor: !location && showError ? '#f87171' : '#477ED9',
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        />
      </div>

      {/* Travelers */}
      <div className="flex items-center gap-4">
        <RiUserAddLine className='text-[#477ED9] text-4xl bg-[#D9D9D9] px-2 py-2 h-[45px]
                    rounded-full shadow-xs shadow-black/40' />
        <input
          ref={travelersRef}
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
          type="number"
          placeholder="Number of travelers"
          className="w-full p-3 outline-none bg-blue-100 text-[#5E5E5E] placeholder:text-gray-400 border-b-2 pb-1"
          style={{
            borderBottomColor: !travelers && showError ? '#f87171' : '#477ED9',
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        />
      </div>

      {/* Check In */}
      <div className="flex items-center gap-4">
        <LuCalendarClock className='text-[#477ED9] text-4xl bg-[#D9D9D9] px-2 py-2 h-[45px]
                    rounded-full shadow-xs shadow-black/40' />
        <input
          ref={checkInRef}
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          type="date"
          className="w-full p-3 outline-none bg-blue-100 text-[#5E5E5E] border-b-2 pb-1"
          style={{
            borderBottomColor: !checkIn && showError ? '#f87171' : '#477ED9',
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        />
      </div>

      {/* Check Out */}
      <div className="flex items-center gap-4">
        <LuCalendarClock className='text-[#477ED9] text-4xl bg-[#D9D9D9] px-2 py-2 h-[45px]
                    rounded-full shadow-xs shadow-black/40' />
        <input
          ref={checkOutRef}
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          type="date"
          className="w-full p-3 outline-none bg-blue-100 text-[#5E5E5E] border-b-2 pb-1"
          style={{
            borderBottomColor: !checkOut && showError ? '#f87171' : '#477ED9',
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        />
      </div>

      {/* Submit Button */}
      <button
        className="mt-4 self-center bg-[#477ED9] text-white px-6 py-2 rounded-xl shadow-md hover:bg-black hover:text-[#477ED9] transition-all"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? "جارٍ الإرسال..." : "Send"}
      </button>

      {/* Success Message */}
      {showSuccess && (
        <div className="flex items-center justify-center mt-4 p-4 bg-green-100 border border-green-500 text-green-700 rounded-lg shadow-md transition-all duration-300">
          <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>Submitted successfully!</span>
        </div>
      )}

      {/* Error Message */}
      {showError && (
        <div className="flex items-center justify-center mt-4 p-4 bg-red-100 border border-red-500 text-red-700 rounded-lg shadow-md transition-all duration-300">
          <svg className="w-6 h-6 mr-2 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  </div>
)}


             </motion.div>

             {/*right side  */}
             <motion.div 
             
             initial={{ opacity: 0, x: 50 }}
             animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
             transition={{ duration: 0.5, delay: 0.5 ,type: "spring" ,stiffness: 100,damping: 20 
             }}
             className='flex flex-col justify-between items-center
             w-[60%] py-12 px-8 
             rounded-3xl outline-2 outline-black/20
             bg-[#F5F5F5]
             shadow-lg shadow-black/25'>
                 
                   <motion.h5 
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={inView?{ opacity: 1, scale: 1 }:{ opacity: 0, scale: 0.8 }}
                   transition={{ duration: 0.5, delay: 0.9 }}
                   className='tracking-[11px] font-bold text-black'>TRAVEL SUPPORT</motion.h5>
                   <motion.h2 
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={inView?{ opacity: 1, scale: 1 }:{ opacity: 0, scale: 0.8 }}
                   transition={{ duration: 0.5, delay: 1 }}
                   className='text-3xl font-bold text-black'>Plan Your Travel With Confidence</motion.h2>
                   <motion.p
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={inView?{ opacity: 1, scale: 1 }:{ opacity: 0, scale: 0.8 }}
                   transition={{ duration: 0.5, delay: 1.2 }}
                   className='text-[#5E5E5E]'>Find help with your Bookings and Travel plan, and see what to expect along  your journey.</motion.p>

                   {/* images */}
                   <div className='
                   mt-20'>
                     <img src="./src/assets/airplain.png" alt="" />
                     
                   </div>

          <div className="relative px-12 py-8">
                {[
                    {
                    title: "Travel requirements for Dubai",
                    desc: "Find help with your Bookings and Travel plan, and see what to expect along your journey.",
                    },
                    {
                    title: "Multi-risk travel insurance",
                    desc: "Find help with your Bookings and Travel plan, and see what to expect along your journey.",
                    },
                    {
                    title: "Travel requirements by destinations",
                    desc: "Find help with your Bookings and Travel plan, and see what to expect along your journey.",
                    },
                ].map((item, index) => (
                    <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.5, delay: 1.2*index,type: "spring" ,stiffness: 100,damping: 20 }}
                    key={index}
                    className={` px-6 py-1 pt-3 rounded-xl w-[500px] mb-4 text-start `}
                    style={{ marginLeft: `${index * 120}px`, marginTop: `${index * 20}px` }}
                    >
                    <h3 className="text-lg font-semibold text-white mb-2
                    w-fit bg-[#477ED9] hover:bg-black hover:text-[#477ED9] rounded-2xl px-3">
                        {item.title}
                    </h3>
                    <p className="text-[#5E5E5E] w-[400px]
                    text-sm">{item.desc}</p>
                    </motion.div>
                ))}
                </div>

             </motion.div>


           </div>
        </section>
    );
}

export default Check