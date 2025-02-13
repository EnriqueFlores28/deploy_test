"use client";

import React, { useState, useEffect } from "react";

// Definir los tipos de datos
interface Project {
  year: number;
  name: string;
  location?: string;
}

interface Milestone {
  year: number;
  event: string;
}

const filters = [
  { id: "all", label: "Todos los proyectos" },
  { id: "elflorido", label: "El Florido" },
  { id: "milestones", label: "Hitos importantes" },
];

const groupByLustro = (data: (Project | Milestone)[]) => {
  const grouped: Record<number, (Project | Milestone)[]> = {};
  data.forEach((item) => {
    const lustro = Math.floor(item.year / 5) * 5;
    if (!grouped[lustro]) grouped[lustro] = [];
    grouped[lustro].push(item);
  });
  return grouped;
};

const Timeline: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [milestonesData, setMilestonesData] = useState<Milestone[]>([]);
  const [expandedYears, setExpandedYears] = useState<Record<number, boolean>>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/timeline_projects.json")
      .then((response) => {
        if (!response.ok) throw new Error("No se pudo cargar timeline_projects.json");
        return response.json();
      })
      .then((data: Project[]) => setProjectsData(data))
      .catch((err) => setError(err.message));

    fetch("/data/milestones.json")
      .then((response) => {
        if (!response.ok) throw new Error("No se pudo cargar milestones.json");
        return response.json();
      })
      .then((data: Milestone[]) => setMilestonesData(data))
      .catch((err) => setError(err.message));
  }, []);

  const filteredData = () => {
    if (filter === "all") return projectsData;
    if (filter === "elflorido") return projectsData.filter((p) => p.location?.toLowerCase().includes("florido"));
    if (filter === "milestones") return milestonesData;
    return [];
  };

  const groupedData = groupByLustro(filteredData());

  return (
    <div className="bg-secondary relative w-full min-h-screen flex flex-col items-center py-12 px-6 pt-24">
      {/* Filtros con margen ajustado respecto al header */}
      <div className="relative w-full max-w-4xl mt-6 mb-6 flex justify-center z-10 space-x-4">
        {filters.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setFilter(id)}
            className={`px-4 py-2 rounded-lg font-semibold ${filter === id ? "bg-primary text-white shadow-md" : "bg-gray-300 text-black"}`}
          >
            {label}
          </button>
        ))}
      </div>
      
      {/* Mostrar error si ocurre */}
      {error && <p className="text-red-500 mt-10">Error: {error}</p>}
      
      {/* Línea central sin h-full para evitar estiramiento innecesario */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gray-400 top-10 bottom-10 z-0"></div>
      
      {Object.entries(groupedData).map(([lustroString, events]) => {
        const lustro = Number(lustroString);
        return (
          <div key={lustro} className="relative w-full max-w-4xl mb-10 text-center">
            <button
              className="text-xl font-bold text-black bg-gray-200 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 relative z-10"
              onClick={() => setExpandedYears((prev) => ({ ...prev, [lustro]: !prev[lustro] }))}
            >
              {lustro}
            </button>
            {expandedYears[lustro] && (
              <div className="mt-4 space-y-4 relative z-10">
                {events.map((item, index) => (
                  <div key={index} className="relative flex md:flex-row items-center w-full max-w-4xl mb-6">
                    {/* Punto en la línea */}
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md absolute left-1/2 transform -translate-x-1/2 z-20"></div>
                    
                    {/* Contenedor del texto alineado a la derecha del punto */}
                    <div className="ml-[55%] w-1/2 text-left pl-6">
                      <span className="text-lg font-semibold text-black block">{item.year}</span>
                      <p className="text-lg text-gray-700">{"name" in item ? item.name : item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
