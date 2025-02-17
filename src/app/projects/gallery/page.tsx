'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = Array.from({ length: 30 }, (_, i) => `/final/Slide${i + 1}.JPG`);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const nextImage = () => {
    setSelectedImage((prev) => (prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : 0));
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : images.length - 1));
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-secondary px-6 sm:px-10 md:px-16 lg:px-24 pb-20">
      <h2 className="text-3xl text-center mt-24 text-black">25 years on our construction history</h2>
      <div className="flex-grow text-black grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {images.map((src, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="w-full h-full">
            <Image
              src={src}
              alt={`Proyecto ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg cursor-pointer w-full h-auto object-cover"
              onClick={() => setSelectedImage(index)}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-5 right-5 text-black text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <button className="absolute left-5 text-black" onClick={prevImage}>
              <ChevronLeft size={40} />
            </button>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
              <Image
                src={images[selectedImage]}
                alt="Imagen ampliada"
                width={1000}
                height={800}
                className="rounded-lg"
              />
            </motion.div>
            <button className="absolute right-5 text-black" onClick={nextImage}>
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
