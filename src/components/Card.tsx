import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CardProps {
  imageUrl: string;
  isZoomed: boolean;
  onClick: () => void;
  index: number;
}

export function Card({ imageUrl, isZoomed, onClick, index }: CardProps) {
  return (
    <>
      {/* Regular card in gallery */}
      <motion.div
        className="bg-gradient-to-br from-ivory-50 to-cream-100 rounded-xl shadow-xl overflow-hidden cursor-pointer border-2 border-gold-200/30 relative"
        style={{
          background: 'linear-gradient(135deg, #fefdf8 0%, #faf8f1 50%, #f5f2e8 100%)',
          borderColor: 'rgba(212, 175, 55, 0.2)',
        }}
        initial={{ 
          width: 200,
          height: 280,
          x: index * 210,
          scale: 1,
          opacity: 1
        }}
        animate={{
          width: 200,
          height: 280,
          x: index * 210,
          scale: isZoomed ? 0.8 : 1,
          opacity: isZoomed ? 0.3 : 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        onClick={onClick}
        whileHover={{ scale: isZoomed ? 0.8 : 1.03 }}
        whileTap={{ scale: isZoomed ? 0.75 : 0.98 }}
      >
        {/* Elegant border frame */}
        <div className="absolute inset-3 border border-amber-300/40 rounded-lg"></div>
        <div className="absolute inset-5 border border-amber-200/30 rounded-md"></div>

        {/* Card content */}
        <div className="h-full w-full flex items-center justify-center p-5 relative">
          <div className="w-full h-full bg-white rounded-lg shadow-inner border border-amber-100/50 p-3 flex items-center justify-center">
            <ImageWithFallback
              src={imageUrl}
              alt="Wedding invitation"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-amber-300/60 rounded-tl-lg"></div>
        <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-amber-300/60 rounded-tr-lg"></div>
        <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-amber-300/60 rounded-bl-lg"></div>
        <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-amber-300/60 rounded-br-lg"></div>
        
        {/* Subtle hover overlay */}
        {!isZoomed && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-gold-200/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(212, 175, 55, 0.15) 100%)',
            }}
          >
            <div className="text-amber-800 text-sm bg-white/90 px-4 py-2 rounded-full shadow-md border border-amber-200/50 backdrop-blur-sm">
              View Details
            </div>
          </motion.div>
        )}

        {/* Elegant gradient overlay at bottom when not zoomed */}
        {!isZoomed && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-50/80 to-transparent rounded-b-xl"></div>
        )}
      </motion.div>

      {/* Zoomed card overlay */}
      {isZoomed && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-gradient-to-br from-ivory-50 to-cream-100 rounded-xl shadow-2xl overflow-hidden cursor-pointer border-2 border-gold-200/30 relative max-w-lg max-h-[80vh]"
            style={{
              background: 'linear-gradient(135deg, #fefdf8 0%, #faf8f1 50%, #f5f2e8 100%)',
              borderColor: 'rgba(212, 175, 55, 0.2)',
            }}
            initial={{ 
              scale: 0.5,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            onClick={onClick}
          >
            {/* Elegant border frame */}
            <div className="absolute inset-3 border border-amber-300/40 rounded-lg"></div>
            <div className="absolute inset-5 border border-amber-200/30 rounded-md"></div>

            {/* Card content */}
            <div className="w-full h-full flex items-center justify-center p-8 relative" style={{ minHeight: '500px', minWidth: '350px' }}>
              <div className="w-full h-full bg-white rounded-lg shadow-inner border border-amber-100/50 p-6 flex items-center justify-center">
                <ImageWithFallback
                  src={imageUrl}
                  alt="Wedding invitation"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-amber-300/60 rounded-tl-lg"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-amber-300/60 rounded-tr-lg"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-amber-300/60 rounded-bl-lg"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-amber-300/60 rounded-br-lg"></div>
            
            {/* Close indicator when zoomed */}
            <motion.div
              className="absolute top-6 right-6 w-10 h-10 bg-amber-800/80 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-900/90 transition-colors shadow-lg border-2 border-white/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              ×
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}