import React from "react";
import { Link } from "react-router-dom";
function Front() {
  return (
    <div className="h-[180px]  md:h-screen bg-gradient-to-b from-blue-100 to-transparent flex items-center justify-center relative mt-18 overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center w-full h-full ">
        <div className="relative w-full h-full lg:h-[90%] lg:mt-[-90px] ">
          <Link to="/mens">
          <img  loading=" lazy"
            src="/Assets/ShopBanner.png"
            alt="hero"
            className="w-full h-full  "
          />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Front;

// import React from "react";

// const front = () => {
//   return (
//     <div className="relative w-full h-auto md:h-[750px] lg:h-[850px] flex items-center justify-between px-4 md:px-12 mt-18">
//     {/* Background Image */}
//     <img src="/Assets/bg-img.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-90" />

//     {/* Main Content */}
//     <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
//       {/* Left Text Section */}
//       <div className="w-full md:w-1/2 text-center md:text-left lg:pl-10">
//         <h1 className="text-4xl md:text-6xl font-bold text-[#120C44] leading-tight">
//           Beat the heat in <br /> style!
//         </h1>
//         <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#1d118a] mt-4 leading-relaxed">
//           Dive into our Summer Collection – breezy fabrics, bold colors, and cool vibes.
//           Shop now and slay the season!
//         </p>
//         <button className="w-3/4 sm:w-1/2 md:w-1/3 mt-6 px-4 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-[#120C44] text-[#120C44] font-semibold rounded-md text-sm sm:text-lg transition-all duration-300 hover:bg-[#120C44] hover:text-white hover:border-transparent shadow-md">
//           EXPLORE NOW!
//         </button>
//       </div>

//       {/* Right Image Section (Ensuring Row Alignment) */}
//       <div className="flex flex-row justify-center items-center gap-3 md:gap-6 flex-wrap md:flex-nowrap">
//         {/* Image 1 */}
//         <div className="w-28 sm:w-36 md:w-48 lg:w-64 h-40 sm:h-48 md:h-64 lg:h-[450px] bg-white overflow-hidden rounded-xl transition-transform duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl" style={{ clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)" }}>
//           <img src="/Assets/men.png" alt="Men Fashion" className="w-full h-full object-cover" />
//         </div>

//         {/* Image 2 */}
//         <div className="w-28 sm:w-36 md:w-48 lg:w-64 h-40 sm:h-48 md:h-64 lg:h-[450px] bg-white overflow-hidden rounded-xl transition-transform duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl" style={{ clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)" }}>
//           <img src="/Assets/women.png" alt="Women Fashion" className="w-full h-full object-cover" />
//         </div>

//         {/* Image 3 */}
//         <div className="w-28 sm:w-36 md:w-48 lg:w-64 h-40 sm:h-48 md:h-64 lg:h-[450px] bg-white overflow-hidden rounded-xl transition-transform duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl" style={{ clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)" }}>
//           <img src="/Assets/kid.png" alt="Kids Fashion" className="w-full h-full object-cover" />
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default front;

