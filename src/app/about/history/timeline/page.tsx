"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Importar Next Image

// Definir el tipo de datos unificado
interface TimelineItem {
  year: number;
  name: string;
  location?: string;
  image?: string;
}

const groupByLustro = (data: TimelineItem[]) => {
  const grouped: Record<number, TimelineItem[]> = {};
  data.forEach((item) => {
    const lustro = Math.floor(item.year / 5) * 5;
    if (!grouped[lustro]) grouped[lustro] = [];
    grouped[lustro].push(item);
  });
  return grouped;
};

const Timeline: React.FC = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/cleaned_timeline.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load cleaned_timeline.json");
        return response.json();
      })
      .then((data: TimelineItem[]) => setTimelineData(data))
      .catch((err) => setError(err.message));
  }, []);

  const groupedData = groupByLustro(timelineData);
  let globalIndex = 0; // Contador global para alternar correctamente

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 pt-16 text-black bg-gradient-to-b from-blue-950 via-gray-800 to-gray-500">
      {/* Title and description */}
      <div className="relative z-10 w-full py-10 flex flex-col items-center">
        <div className="text-center max-w-3xl mb-10">
          <h1 className="text-4xl text-white animate-fade-in">
            Our History: Over 20 Years of Growth and Excellence
          </h1>
          <p className="text-lg text-gray-200 mt-4 animate-fade-in-slow">
            Since our beginnings, we have worked on key projects that have shaped our evolution. Explore our journey through the most important milestones of our company.
          </p>
        </div>
      </div>

      {/* Show error if any */}
      {error && <p className="text-red-500 mt-10">Error: {error}</p>}

      {/* Central timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gray-400 top-[20rem] bottom-10 z-0 hidden sm:block"></div>

      {Object.entries(groupedData).map(([lustroString, events]) => (
        <div key={lustroString} className="relative w-full max-w-4xl mb-10 text-center">
          <h2 className="text-2xl font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg relative z-10 inline-block">
            {lustroString}
          </h2>
          <div className="mt-4 space-y-6 relative z-10">
            {events.map((item) => {
              const isEven = globalIndex % 2 === 0;
              globalIndex++; // Incrementar el contador global

              return (
                <div
                  key={item.year + item.name} // Mejor clave
                  className={`relative flex flex-col sm:flex-row ${isEven ? "sm:flex-row-reverse" : "sm:flex-row"} items-center w-full max-w-4xl mb-6`}
                >
                  {/* Timeline point (only for larger screens) */}
                  <div className="hidden sm:block w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md absolute left-1/2 transform -translate-x-1/2 z-20"></div>

                  {/* Content box with image and text */}
                  <div className="w-full sm:w-[45%] flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg min-h-[150px]">
                    {/* Image with link to gallery */}
                    {item.image && (
                      <Link href={`/projects/gallery?image=${item.image}`} passHref>
                        <Image
                          src={item.image}
                          alt={item.name || "Timeline image"}
                          width={100}
                          height={100}
                          className="rounded-lg shadow-md cursor-pointer object-cover w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
                        />
                      </Link>
                    )}
                    <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
                      <span className="text-lg font-semibold block">{item.year}</span>
                      <p className="text-lg break-words">{item.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
