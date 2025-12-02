import React from 'react';
import { DaySchedule } from '../types';

interface DayTabsProps {
  days: DaySchedule[];
  activeDay: number;
  onSelectDay: (day: number) => void;
}

const DayTabs: React.FC<DayTabsProps> = ({ days, activeDay, onSelectDay }) => {
  return (
    <div className="sticky top-0 z-40 bg-[#fdfbf7]/90 backdrop-blur-sm py-4 mt-20">
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide snap-x">
        {days.map((day) => {
          const isActive = day.day === activeDay;
          return (
            <button
              key={day.day}
              onClick={() => onSelectDay(day.day)}
              className={`snap-center flex-shrink-0 flex flex-col items-center justify-center rounded-2xl px-5 py-2 transition-all duration-300 shadow-sm border ${
                isActive
                  ? 'bg-primary-blue text-white border-primary-blue scale-105 shadow-md'
                  : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50'
              }`}
            >
              <span className={`text-xs font-bold ${isActive ? 'text-blue-50' : 'text-gray-400'}`}>
                Day {day.day}
              </span>
              <span className="text-sm font-bold whitespace-nowrap">
                {day.date.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DayTabs;