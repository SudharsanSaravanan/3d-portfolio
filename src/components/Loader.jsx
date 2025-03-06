import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Html center>
      <div className="flex items-center justify-center flex-col">
        <div className="w-24 h-24 bg-sky-300 rounded-full relative flex items-center justify-center shadow-lg">
          {/* Circular progress indicator */}
          <div 
            className="w-24 h-24 absolute border-4 border-blue-500 rounded-full"
            style={{ 
              clipPath: `polygon(50% 50%, 50% 0%, ${progress <= 25 ? 50 + progress * 2 : 100}% 0%, ${
                progress <= 50 ? 100 : 100
              }% ${progress <= 50 ? progress * 2 - 50 : 100}%, ${
                progress <= 75 ? 100 : 150 - progress * 2
              }% ${progress <= 75 ? 100 : 100}%, ${
                progress <= 100 ? 50 : 50
              }% ${progress <= 100 ? 150 - progress * 2 : 50}%)`
            }}
          />
          
          {/* Percentage text */}
          <div className="text-xl font-bold text-white z-10">
            {progress}%
          </div>
        </div>
        
        {/* Loading text */}
        <div className="mt-2 text-blue-600 font-medium">
          Loading
          <span className="animate-pulse">.</span>
          <span className="animate-pulse delay-150">.</span>
          <span className="animate-pulse delay-300">.</span>
        </div>
      </div>
    </Html>
  );
};

export default Loader;