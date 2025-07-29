import { motion } from 'motion/react';
import { useState } from 'react';

interface EnvelopeProps {
  onOpen: () => void;
}

export function Envelope({ onOpen }: EnvelopeProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onOpen();
  };

  return (
    <div 
      className="relative cursor-pointer" 
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Envelope Body */}
      <motion.div
        className="relative w-96 h-64 shadow-2xl"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Main envelope rectangle */}
        <div 
          className="absolute inset-0 rounded-sm border border-stone-300/60"
          style={{
            background: 'linear-gradient(135deg, #faf8f2 0%, #f6f4ec 25%, #f2f0e4 50%, #eeebdc 75%, #eae7d4 100%)',
          }}
        >
          {/* Envelope interior content area */}
          <div className="absolute inset-4 flex flex-col justify-center items-center text-center">
            {/* Wedding names */}
            <div className="mb-6">
              <h1 className="text-3xl text-stone-700 mb-2" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Kunal & Sahana
              </h1>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto"></div>
            </div>
            
            {/* Wedding invitation text */}
            <div className="text-stone-600 space-y-2" style={{ fontFamily: 'Georgia, serif' }}>
              <p className="text-sm">Together with our families</p>
              <p className="text-sm">we invite you to celebrate</p>
              <p className="text-sm">our wedding</p>
            </div>
            
            {/* Small decorative element */}
            <div className="mt-6">
              <svg width="30" height="15" viewBox="0 0 30 15" className="text-stone-400/70">
                <path d="M3 7.5c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5-1.5 3.5-3.5 3.5S3 9.5 3 7.5zm10 0c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5-1.5 3.5-3.5 3.5-3.5-1.5-3.5-3.5zm10 0c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5-1.5 3.5-3.5 3.5-3.5-1.5-3.5-3.5z" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* Subtle paper texture */}
          <div className="absolute inset-0 opacity-5 rounded-sm" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M0 0h100v1H0zM0 20h100v1H0zM0 40h100v1H0zM0 60h100v1H0zM0 80h100v1H0z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Envelope Flap - Triangular top */}
        <motion.div
          className="absolute top-0 left-0 w-full h-32 origin-bottom overflow-hidden z-10"
          style={{
            background: 'linear-gradient(135deg, #f0ede2 0%, #ebe6d9 25%, #e6e1d4 50%, #ddd8cb 75%, #d4cfc2 100%)',
            clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
            borderLeft: '1px solid rgba(120, 113, 108, 0.3)',
            borderRight: '1px solid rgba(120, 113, 108, 0.3)',
            borderTop: '1px solid rgba(120, 113, 108, 0.3)',
          }}
          animate={{
            rotateX: isHovered ? -15 : 0,
            z: isHovered ? 20 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Flap interior shadow */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
          
          {/* Wax seal effect */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 rounded-full border border-amber-300/60 bg-gradient-to-br from-amber-100/60 to-amber-200/40 flex items-center justify-center shadow-md">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-200/70 to-amber-300/50 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Envelope back edge lines for depth */}
        <div className="absolute top-0 left-0 w-full h-px bg-stone-300/40"></div>
        <div className="absolute top-0 left-0 h-full w-px bg-stone-300/40"></div>
        <div className="absolute top-0 right-0 h-full w-px bg-stone-300/40"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-stone-300/40"></div>

        {/* Corner wear details */}
        <div className="absolute bottom-1 right-1 w-2 h-2 bg-stone-200/50 rounded-full"></div>
        <div className="absolute bottom-1 left-1 w-2 h-2 bg-stone-200/50 rounded-full"></div>
      </motion.div>

      {/* Drop shadow */}
      <div 
        className="absolute top-2 left-2 w-96 h-64 bg-black/20 rounded-sm -z-10"
        style={{
          filter: 'blur(8px)',
        }}
      ></div>
    </div>
  );
}