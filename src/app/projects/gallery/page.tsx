'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/project1.jpg',
  '/images/project2.jpg',
  '/images/project3.jpg',
  '/images/project4.jpg',
  '/images/project5.jpg',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    setSelectedImage((prev) => (prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : 0));
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : images.length - 1));
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Galería de Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Image
              src={src}
              alt={`Proyecto ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <button className="absolute left-5 text-white" onClick={prevImage}>
              <ChevronLeft size={40} />
            </button>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
              <Image
                src={images[selectedImage]}
                alt="Imagen ampliada"
                width={800}
                height={600}
                className="rounded-lg"
              />
            </motion.div>
            <button className="absolute right-5 text-white" onClick={nextImage}>
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
