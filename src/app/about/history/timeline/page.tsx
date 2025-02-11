import React from "react";

const timelineData = [
  { year: "2024", events: ["Prueba 1", "Prueba 2"] },
  { year: "2023", events: ["Prueba 1", "Preba 2"] },
  { year: "2022", events: ["Prueba 1", "Prueba 2"] },
];

const Timeline = () => {
  return (
    <div className="bg-secondary relative w-full mt-12 h-screen flex flex-col items-center overflow-y-auto py-12 px-6">
      {/* Línea central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gray-400 h-full"></div>
      
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`relative flex flex-col md:flex-row items-center w-full max-w-4xl mb-12 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Año */}
          <div className="md:w-1/2 text-center md:text-right px-6 flex justify-end">
            <span className="text-2xl font-bold text-black">{item.year}</span>
          </div>
          
          {/* Punto en la línea */}
          <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg absolute left-1/2 transform -translate-x-1/2"></div>
          
          {/* Eventos */}
          <div className="md:w-1/2 px-6 text-center md:text-left flex justify-start">
            {item.events.map((event, idx) => (
              <p key={idx} className="text-lg text-gray-700">{event}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
