import { useState } from 'react';
import { motion } from 'motion/react';
import { Envelope } from './components/Envelope';
import { SingleCard } from './components/SingleCard';
import { CardNavigation } from './components/CardNavigation';
import { RSVPPage } from './components/RSVPPage';
import invitationCard1 from 'figma:asset/fe03530eb12a37eb466ef3492a044f350f71185d.png';
import invitationCard2 from 'figma:asset/f88fd3440f8e0f126fd3e03d749b2e376251497f.png';
import invitationCard3 from 'figma:asset/363f4640450b46c0e261299465711f72fd13a0fe.png';
import invitationCard4 from 'figma:asset/e28565e451f0d87365139e8dbfbc214afd3e7683.png';

// Wedding invitation cards data
const cardData = [
  { imageUrl: invitationCard1, title: 'Sangeet' },
  { imageUrl: invitationCard2, title: 'Haldi' },
  { imageUrl: invitationCard3, title: 'Wedding Ceremony' },
  { imageUrl: invitationCard4, title: 'Reception' }
];

type ViewState = 'envelope' | 'cards' | 'rsvp';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('envelope');
  const [currentCard, setCurrentCard] = useState(0);

  const handleEnvelopeOpen = () => {
    setCurrentView('cards');
    setCurrentCard(0);
  };

  const handleNextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cardData.length);
  };

  const handlePreviousCard = () => {
    setCurrentCard((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  const handleGoToCard = (cardIndex: number) => {
    setCurrentCard(cardIndex);
  };

  const handleGoToRSVP = () => {
    setCurrentView('rsvp');
  };

  const handleBackToCards = () => {
    setCurrentView('cards');
  };

  const handleRSVP = () => {
    window.open('https://www.zola.com/wedding/sahanaandkunal/rsvp', '_blank');
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-8 relative"
      style={{
        background: 'linear-gradient(135deg, #f8f6f0 0%, #f5f2e8 25%, #f2eedf 50%, #efe9d6 75%, #ebe5cd 100%)',
      }}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative flex flex-col items-center w-full h-full">
        {/* Envelope View */}
        {currentView === 'envelope' && (
          <motion.div
            className="flex items-center justify-center h-full"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <Envelope onOpen={handleEnvelopeOpen} />
          </motion.div>
        )}

        {/* Cards View */}
        {currentView === 'cards' && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center bg-black/10 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <SingleCard
                  imageUrl={cardData[currentCard].imageUrl}
                  title={cardData[currentCard].title}
                  index={currentCard}
                  total={cardData.length}
                />
              </motion.div>

              {/* Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <CardNavigation
                  currentCard={currentCard}
                  totalCards={cardData.length}
                  onPrevious={handlePreviousCard}
                  onNext={handleNextCard}
                  onGoToCard={handleGoToCard}
                  isVisible={true}
                />
              </motion.div>

              {/* RSVP Button */}
              <motion.button
                onClick={handleGoToRSVP}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-500/30 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Continue to RSVP
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* RSVP View */}
        {currentView === 'rsvp' && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <RSVPPage 
              onBack={handleBackToCards}
              onRSVP={handleRSVP}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}