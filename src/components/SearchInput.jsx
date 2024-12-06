import { useState } from 'react';

export function SearchInput() {
  const [value, setValue] = useState('');

  return (
    <div className="relative">
      {!value && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span className="font-pixel">Search</span>
          <span className="font-sans ml-1">for events</span>
        </div>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full pl-3 pr-10 py-2 border border-black focus:outline-none font-sans"
        style={{ paddingLeft: value ? '12px' : '120px' }}
      />
    </div>
  );
}
