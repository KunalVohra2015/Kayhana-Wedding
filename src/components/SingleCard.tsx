import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SingleCardProps {
  imageUrl: string;
  title: string;
  index: number;
  total: number;
}

export function SingleCard({ imageUrl, title, index, total }: SingleCardProps) {
  return (
    <motion.div
      key={index}
      className="relative"
      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Main Card - Made even bigger */}
      <div
        className="bg-gradient-to-br from-ivory-50 to-cream-100 rounded-xl shadow-2xl overflow-hidden border-2 border-gold-200/30 relative w-[28rem] h-[36rem]"
        style={{
          background: 'linear-gradient(135deg, #fefdf8 0%, #faf8f1 50%, #f5f2e8 100%)',
          borderColor: 'rgba(212, 175, 55, 0.2)',
        }}
      >
        {/* Elegant border frame */}
        <div className="absolute inset-3 border border-amber-300/40 rounded-lg"></div>
        <div className="absolute inset-5 border border-amber-200/30 rounded-md"></div>

        {/* Card content */}
        <div className="h-full w-full flex items-center justify-center p-6 relative">
          <div className="w-full h-full bg-white rounded-lg shadow-inner border border-amber-100/50 p-4 flex items-center justify-center">
            <ImageWithFallback
              src={imageUrl}
              alt={`${title} invitation`}
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-amber-300/60 rounded-tl-lg"></div>
        <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-amber-300/60 rounded-tr-lg"></div>
        <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-amber-300/60 rounded-bl-lg"></div>
        <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-amber-300/60 rounded-br-lg"></div>

        {/* Elegant gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-50/80 to-transparent rounded-b-xl"></div>
      </div>
    </motion.div>
  );
}