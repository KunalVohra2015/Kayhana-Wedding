import { motion } from 'framer-motion';
import { Heart, ExternalLink, ArrowLeft } from 'lucide-react';

interface RSVPPageProps {
  onBack: () => void;
  onRSVP: () => void;
}

export function RSVPPage({ onBack, onRSVP }: RSVPPageProps) {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-8 relative"
      style={{
        background: 'linear-gradient(135deg, #fefdf8 0%, #faf8f1 25%, #f5f2e8 50%, #f0ede2 75%, #ebe6d9 100%)',
      }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #d4af37 1px, transparent 1px),
                         radial-gradient(circle at 75% 75%, #d4af37 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 bg-white/80 text-amber-800 rounded-full border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Invitations</span>
      </motion.button>

      {/* Main RSVP Content */}
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 fill-current text-amber-600" />
            <h1 className="text-amber-800 text-4xl tracking-wide">Kunal & Sahana</h1>
            <Heart className="w-8 h-8 fill-current text-amber-600" />
          </div>
          
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
          
          <p className="text-amber-700/80 text-lg leading-relaxed">
            We would be honored to have you celebrate with us on our special day
          </p>
        </motion.div>

        {/* RSVP Card */}
        <motion.div
          className="bg-gradient-to-br from-white/90 to-amber-50/80 rounded-2xl shadow-2xl p-12 border-2 border-amber-200/30 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-amber-300/60 rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-amber-300/60 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-amber-300/60 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-amber-300/60 rounded-br-lg"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-amber-800 text-2xl mb-8 tracking-wide">Please Join Us</h2>
            
            <div className="space-y-6 mb-10 text-amber-700/90">
              <p className="text-center leading-relaxed text-lg">
                Your presence would make our celebration complete. Please let us know if you can join us for these special moments.
              </p>
            </div>
            
            <motion.button
              onClick={onRSVP}
              className="group relative px-12 py-4 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-amber-500/30 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button content */}
              <div className="relative flex items-center gap-3">
                <span className="tracking-wide text-lg">RSVP on Zola</span>
                <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-2 left-6 w-2 h-2 bg-amber-200/70 rounded-full"></div>
              <div className="absolute bottom-2 right-6 w-2 h-2 bg-amber-200/70 rounded-full"></div>
            </motion.button>

            <p className="text-amber-600/80 text-sm mt-6">
              Click to visit our wedding website and confirm your attendance
            </p>
          </motion.div>
        </motion.div>

        {/* Footer message */}
        <motion.p
          className="text-amber-700/60 text-sm mt-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          We can't wait to celebrate with you! ✨
        </motion.p>
      </motion.div>
    </div>
  );
}