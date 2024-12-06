import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export function FilterDropdown({ options, selected, onSelect, placeholder }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    if (option.header) return; 
    onSelect(option);
    setShowDropdown(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 hover:text-gray-600 font-pixel"
      >
        <span>{selected ? selected.label : placeholder}</span>
        <IoIosArrowDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
      </button>
      
      {showDropdown && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-black shadow-lg z-50 min-w-[200px] font-pixel">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => !option.header && handleSelect(option)}
              className={`
                block w-full text-left px-4 py-2 text-sm font-pixel
                ${option.header 
                  ? 'bg-black text-white cursor-default' 
                  : 'hover:bg-gray-100 cursor-pointer'
                }
                ${selected?.value === option.value ? 'bg-gray-100' : ''}
              `}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
