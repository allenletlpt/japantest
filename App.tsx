import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import DayTabs from './components/DayTabs';
import EventCard from './components/EventCard';
import { ITINERARY_CONFIG, INITIAL_DATA } from './constants';
import { EditData } from './types';

function App() {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editData, setEditData] = useState<EditData>(INITIAL_DATA);
  const [showSaveToast, setShowSaveToast] = useState(false);

  // Load from local storage on mount (simple persistence)
  useEffect(() => {
    const saved = localStorage.getItem('tripData');
    if (saved) {
      try {
        setEditData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load local data");
      }
    }
  }, []);

  const handleUpdateData = (key: string, value: string) => {
    setEditData(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // Save to local storage
    localStorage.setItem('tripData', JSON.stringify(editData));
    
    // Simulate GitHub Sync UI (as per original functionality request)
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 3000);
    setIsEditMode(false);
  };

  const currentDaySchedule = ITINERARY_CONFIG.find(d => d.day === activeDay);

  return (
    <div className="min-h-screen pb-24 font-sans text-primary-text">
      
      <div className="mx-auto max-w-md bg-white min-h-screen shadow-2xl relative">
        <Hero />
        
        <DayTabs 
          days={ITINERARY_CONFIG} 
          activeDay={activeDay} 
          onSelectDay={setActiveDay} 
        />

        <div className="px-4 mt-6 animate-fadeIn">
          {/* Day Header Info */}
          {currentDaySchedule && (
              <div className="mb-6 flex items-center justify-between rounded-2xl bg-gradient-to-r from-blue-50 to-white p-4 border border-blue-100">
                <div className="flex items-center gap-3">
                    <span className="text-3xl filter drop-shadow-sm">{currentDaySchedule.weatherIcon}</span>
                    <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">Weather</div>
                        <div className="text-sm font-bold text-blue-600">{currentDaySchedule.weather}</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">Date</div>
                    <div className="text-sm font-bold text-gray-700">{currentDaySchedule.date}</div>
                </div>
              </div>
          )}

          {/* Events List */}
          {currentDaySchedule?.events.map(event => (
            <EventCard
              key={event.id}
              event={event}
              isEditMode={isEditMode}
              editData={editData}
              onUpdateData={handleUpdateData}
            />
          ))}
          
          <div className="h-10"></div> {/* Spacer */}
        </div>
        
        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
           {isEditMode ? (
               <button 
                onClick={handleSave}
                className="h-14 w-14 rounded-full bg-green-400 text-white shadow-lg flex items-center justify-center hover:bg-green-500 transition-colors"
               >
                 💾
               </button>
           ) : (
               <button 
                onClick={() => setIsEditMode(true)}
                className="h-14 w-14 rounded-full bg-primary-blue text-white shadow-lg flex items-center justify-center hover:bg-blue-400 transition-colors"
               >
                 ✏️
               </button>
           )}
        </div>

        {/* Toast Notification */}
        {showSaveToast && (
            <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-gray-800/90 text-white px-6 py-2 rounded-full shadow-xl text-sm z-[100] animate-bounce">
                ✅ 資料已儲存 (Simulated)
            </div>
        )}
      </div>
    </div>
  );
}

export default App;