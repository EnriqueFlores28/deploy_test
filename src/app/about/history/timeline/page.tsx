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

const Timeline: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [milestonesData, setMilestonesData] = useState<Milestone[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/timeline_projects.json")
      .then((response) => {
        if (!response.ok) throw new Error("No se pudo cargar timeline_projects.json");
        return response.json();
      })
      .then((data: Project[]) => {
        setProjectsData(data);
        console.log("Proyectos cargados:", data);
      })
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
    if (filter === "elflorido") {
      const elFloridoData = projectsData.filter((p) => p.location?.toLowerCase().includes("florido"));
      console.log("Datos filtrados para El Florido:", elFloridoData);
      return elFloridoData;
    }
    if (filter === "milestones") return milestonesData;
    return [];
  };

  return (
    <div className="bg-secondary relative w-full h-screen flex flex-col items-center overflow-y-auto py-12 px-6 pt-20">
      {/* Filtros con z-index y colores ajustados */}
      <div className="flex space-x-4 mb-8 mt-10 z-50 relative">
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
      {error && <p className="text-red-500">Error: {error}</p>}
      
      {/* Línea central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gray-400 h-full"></div>
      
      {filteredData()?.length === 0 && (
        <p className="text-gray-500 mt-10">No hay datos disponibles para esta categoría.</p>
      )}
      
      {filteredData()?.map((item, index) => (
        <div
          key={index}
          className={`relative flex flex-col md:flex-row items-center w-full max-w-4xl mb-12 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Año / Evento */}
          <div className="md:w-1/2 text-center md:text-right px-6 flex justify-end">
            <span className="text-2xl font-bold text-black">{item.year}</span>
          </div>
          
          {/* Punto en la línea */}
          <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg absolute left-1/2 transform -translate-x-1/2"></div>
          
          {/* Descripción */}
          <div className="md:w-1/2 px-6 text-center md:text-left flex justify-start">
            <p className="text-lg text-gray-700">{"name" in item ? item.name : item.event}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
