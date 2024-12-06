import { useState, useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { formatDate, formatSelectedDate, daysInMonth, firstDayOfMonth } from "../utils/dateUtils";

export function DatePicker({ selected, onSelect }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const calendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateSelect = (day) => {
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    onSelect(selectedDate);
    setShowCalendar(false);
  };

  const renderCalendar = () => {
    const days = daysInMonth(currentDate);
    const firstDay = firstDayOfMonth(currentDate);
    const weeks = [];
    let week = new Array(7).fill(null);
    let dayCount = 1;

    // Fill in the first week
    for (let i = firstDay; i < 7 && dayCount <= days; i++) {
      week[i] = dayCount++;
    }
    weeks.push(week);

    // Fill in remaining weeks
    while (dayCount <= days) {
      week = new Array(7).fill(null);
      for (let i = 0; i < 7 && dayCount <= days; i++) {
        week[i] = dayCount++;
      }
      weeks.push(week);
    }

    return weeks;
  };

  return (
    <div className="relative" ref={calendarRef}>
      <button
        onClick={() => setShowCalendar(!showCalendar)}
        className="flex items-center gap-2 hover:text-gray-600 font-pixel"
      >
        <span>{formatSelectedDate(selected)}</span>
      </button>

      {showCalendar && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-black shadow-lg z-50 min-w-[280px] font-pixel">
          <div className="flex justify-between items-center p-2 border-b border-black bg-black text-white">
            <button onClick={handlePrevMonth} className="p-1 hover:text-gray-300">
              <IoIosArrowBack className="w-4 h-4" />
            </button>
            <span className="text-sm">{formatDate(currentDate)}</span>
            <button onClick={handleNextMonth} className="p-1 hover:text-gray-300">
              <IoIosArrowForward className="w-4 h-4" />
            </button>
          </div>

          <div className="p-2">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                <div
                  key={index}
                  className="text-center text-xs bg-black text-white p-1"
                >
                  {day}
                </div>
              ))}
            </div>

            {renderCalendar().map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 gap-1">
                {week.map((day, dayIndex) => {
                  const isToday = day === new Date().getDate() && 
                    currentDate.getMonth() === new Date().getMonth() && 
                    currentDate.getFullYear() === new Date().getFullYear();
                  
                  return (
                    <button
                      key={dayIndex}
                      onClick={() => day && handleDateSelect(day)}
                      className={`
                        text-center p-1 text-sm
                        ${!day ? 'invisible' : 'hover:bg-gray-100'}
                        ${isToday ? 'bg-black text-white' : ''}
                        ${day === selected?.getDate() && 
                          currentDate.getMonth() === selected?.getMonth() && 
                          currentDate.getFullYear() === selected?.getFullYear() 
                          ? 'border-2 border-black' 
                          : ''}
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
