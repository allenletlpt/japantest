import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-b-[40px] bg-gradient-to-br from-blue-200 to-blue-100 shadow-xl pb-10 pt-8 px-6 text-center">
      <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-md bg-white">
        <img 
          src="logo.png" 
          alt="Logo" 
          className="h-full w-full object-cover" 
        />
      </div>
      <h1 className="mb-2 text-2xl font-bold tracking-widest text-gray-700 drop-shadow-sm font-sans">
        2026 東北雪見之旅
      </h1>
      <p className="text-sm font-medium text-blue-600 opacity-90">
        仙台・銀山溫泉・藏王樹冰
      </p>

      {/* Info Card */}
      <div className="absolute -bottom-16 left-1/2 w-11/12 max-w-md -translate-x-1/2 transform rounded-2xl bg-white p-4 shadow-lg flex flex-col items-center gap-2">
         <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>📅</span> <strong>2026/2/23 - 2/28</strong>
         </div>
         <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>🚙</span> <strong>全程包車 (D2-D6)</strong>
         </div>
         <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>👥</span> <strong>5人家族旅行 (含長輩)</strong>
         </div>
      </div>
    </div>
  );
};

export default Hero;