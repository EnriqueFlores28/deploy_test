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
  location?: string;
}

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
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [milestonesData, setMilestonesData] = useState<Milestone[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/timeline_projects.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load timeline_projects.json");
        return response.json();
      })
      .then((data: Project[]) => setProjectsData(data))
      .catch((err) => setError(err.message));

    fetch("/data/milestones_full_with_location.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load milestones_full_with_location.json");
        return response.json();
      })
      .then((data: Milestone[]) => setMilestonesData(data))
      .catch((err) => setError(err.message));
  }, []);

  const groupedData = groupByLustro([...projectsData, ...milestonesData]);

  return (
    <div className="bg-secondary relative w-full min-h-screen flex flex-col items-center py-12 px-6 pt-16 text-black">
      {/* Title and description inside a full-width container to cover the line */}
      <div className="relative z-10 bg-secondary w-full py-10 flex flex-col items-center">
        <div className="text-center max-w-3xl mb-10">
          <h1 className="text-4xl text-black animate-fade-in">Our History: Over 20 Years of Growth and Excellence</h1>
          <p className="text-lg text-gray-600 mt-4 animate-fade-in-slow">
            Since our beginnings, we have worked on key projects that have shaped our evolution. Explore our
            journey through the most important milestones of our company.
          </p>
        </div>
      </div>

      {/* Show error if any */}
      {error && <p className="text-red-500 mt-10">Error: {error}</p>}

      {/* Central line adjusted below the title */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gray-400 top-[20rem] bottom-10 z-0"></div>

      {Object.entries(groupedData).map(([lustroString, events]) => {
        return (
          <div key={lustroString} className="relative w-full max-w-4xl mb-10 text-center">
            <h2 className="text-2xl font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg relative z-10 inline-block">
              {lustroString}
            </h2>
            <div className="mt-4 space-y-6 relative z-10">
              {events.map((item, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"} items-center w-full max-w-4xl mb-6`}>
                  {/* Point on the timeline */}
                  <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md absolute left-1/2 transform -translate-x-1/2 z-20"></div>

                  {/* Text container properly aligned */}
                  <div className={`w-[45%] text-left p-6 bg-gray-100 rounded-lg shadow-lg ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                    <span className="text-lg font-semibold block">{item.year}</span>
                    <p className="text-lg">{"name" in item ? item.name : item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
