import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CardNavigationProps {
  currentCard: number;
  totalCards: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToCard: (cardIndex: number) => void;
  isVisible: boolean;
}

export function CardNavigation({ 
  currentCard, 
  totalCards, 
  onPrevious, 
  onNext, 
  onGoToCard,
  isVisible 
}: CardNavigationProps) {
  if (!isVisible) return null;

  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onPrevious();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onNext();
  };

  const handleDotClick = (cardIndex: number) => {
    onGoToCard(cardIndex);
  };

  return (
    <motion.div
      className="flex items-center gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <motion.button
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-500/30 cursor-pointer"
        onClick={handlePrevious}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        type="button"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      
      <div className="flex gap-3">
        {Array.from({ length: totalCards }, (_, index) => (
          <motion.button
            key={index}
            className={`transition-all duration-300 rounded-full cursor-pointer border-0 p-0 ${
              index === currentCard 
                ? 'w-8 h-3 bg-gradient-to-r from-amber-500 to-amber-600 shadow-md' 
                : 'w-3 h-3 bg-amber-200 hover:bg-amber-300'
            }`}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: index === currentCard ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
            type="button"
          />
        ))}
      </div>
      
      <motion.button
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-500/30 cursor-pointer"
        onClick={handleNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        type="button"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
}