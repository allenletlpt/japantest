import React, { useState } from 'react';
import { ItineraryEvent, EditData } from '../types';

interface EventCardProps {
  event: ItineraryEvent;
  isEditMode: boolean;
  editData: EditData;
  onUpdateData: (key: string, value: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, isEditMode, editData, onUpdateData }) => {
  const [showDetails, setShowDetails] = useState(false);

  const timeValue = editData[event.timeKey] || '';
  const noteValue = editData[event.noteKey] || '';

  return (
    <div className={`group relative mb-6 flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100 ${event.highlight ? 'ring-2 ring-pink-100' : ''}`}>
      
      {/* Image Section (if exists) */}
      {event.imageSrc && (
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <img 
            src={event.imageSrc} 
            alt={event.title} 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1" 
          />
          {event.highlight && (
             <div className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                必去 ✨
             </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between">
          <div className="flex flex-col gap-1 w-full">
            {/* Time Tag */}
            <div className="flex items-center">
                {isEditMode ? (
                  <input
                    type="text"
                    value={timeValue}
                    onChange={(e) => onUpdateData(event.timeKey, e.target.value)}
                    className="w-20 rounded border-2 border-dashed border-red-300 bg-red-50 px-2 py-1 text-center text-sm font-bold text-red-500 focus:outline-none"
                  />
                ) : (
                  <span className={`inline-block min-w-[60px] rounded-lg px-2 py-1 text-center text-xs font-bold text-white shadow-sm ${timeValue ? 'bg-gray-400' : 'bg-gray-200'}`}>
                    {timeValue || '--:--'}
                  </span>
                )}
                
                {/* Location Link */}
                {event.locationLink && (
                    <a 
                        href={event.locationLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="ml-2 flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-bold text-blue-500 hover:bg-blue-100"
                    >
                        📍 導航
                    </a>
                )}
            </div>

            {/* Title */}
            <h3 className={`mt-2 text-lg font-bold text-gray-700 ${event.highlight ? 'text-pink-600' : ''}`}>
              {event.title}
            </h3>
            
            {/* Description */}
            {event.description && (
                <p className="text-sm text-gray-500">{event.description}</p>
            )}

            {/* Badges */}
            {event.badges && (
                <div className="mt-2 flex flex-wrap gap-2">
                    {event.badges.map((badge, idx) => (
                        <span key={idx} className="rounded-md bg-blue-50 px-2 py-1 text-xs text-blue-600 border border-blue-100">
                            {badge.text}
                        </span>
                    ))}
                </div>
            )}
          </div>
        </div>

        {/* User Note (Editable) */}
        {(isEditMode || noteValue) && (
          <div className={`mt-3 rounded-lg border-l-4 border-purple-300 bg-purple-50 p-3 text-sm text-purple-700 ${isEditMode ? 'border-dashed border-2' : ''}`}>
             {isEditMode ? (
                 <textarea
                    value={noteValue}
                    onChange={(e) => onUpdateData(event.noteKey, e.target.value)}
                    placeholder="在此輸入筆記..."
                    className="w-full bg-transparent focus:outline-none resize-none"
                    rows={2}
                 />
             ) : (
                 <p>{noteValue}</p>
             )}
          </div>
        )}

        {/* Expandable Details */}
        {event.details && (
            <div className="mt-4">
                <button 
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full hover:bg-green-100 transition-colors w-fit"
                >
                    {showDetails ? '🔽 收起資訊' : '💡 查看詳情'}
                </button>
                
                {showDetails && (
                    <div className="mt-3 animate-fadeIn rounded-xl bg-gray-50 p-4 text-sm text-gray-600 border border-gray-100">
                        <h6 className="mb-2 font-bold text-blue-500">{event.details.title}</h6>
                        <ul className="list-inside list-disc space-y-1 text-xs leading-relaxed">
                            {event.details.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;