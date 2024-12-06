import { IoClose } from 'react-icons/io5';
import { IoCalendarOutline } from 'react-icons/io5';
import { IoLocationOutline } from 'react-icons/io5';
import { IoBusinessOutline } from 'react-icons/io5';

export function EventCard({ image, date, location, venue, city, description }) {
  return (
    <div className="flex flex-col w-[320px] h-[600px] border-2 border-black m-auto font-pixel z-50 hover:scale-105 transition-transform duration-300">
      {/* Top Bar */}
      <div className="flex flex-row justify-between items-center py-[8px] w-full h-[40px] bg-black">
        <span className="text-[16px] leading-[16px] text-white flex-grow">{location}</span>
        <button className="w-7 h-7 bg-[#F2F2F2] flex items-center justify-center hover:bg-[#D3FB51] transition-colors duration-300">
          <IoClose className="w-5 h-5 text-black" />
        </button>
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col flex-1 bg-[#F2F2F2] p-4">
        {/* Image Container with Fixed Square Size */}
        <div className="w-[288px] h-[288px] flex items-center justify-center bg-black mb-4">
          <img
            src={image}
            alt={location}
            width={288}
            height={288}
            className="min-w-[288px] min-h-[288px] w-[288px] h-[288px] object-cover hover:opacity-90 transition-opacity duration-300"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col flex-1">
          {/* Date Information */}
          <div className="flex items-center gap-[14px] h-8 mb-2">
            <IoCalendarOutline className="w-6 h-6 text-black" />
            <span className="text-[16px] leading-[16px] text-black font-medium">{date}</span>
          </div>

          {/* Venue Information */}
          <div className="flex items-center gap-[14px] h-8 mb-2">
            <IoLocationOutline className="w-6 h-6 text-black" />
            <span className="text-[16px] leading-[16px] text-black font-medium">{venue}</span>
          </div>

          {/* City Information */}
          <div className="flex items-center gap-[14px] h-8 mb-4">
            <IoBusinessOutline className="w-6 h-6 text-black" />
            <span className="text-[16px] leading-[16px] text-black font-medium">{city}</span>
          </div>

          {/* Description */}
          <p className="text-[16px] leading-[1.5] text-black mb-4 h-[72px] line-clamp-3">
            {description}
          </p>

          {/* Button */}
          <button className="flex justify-center items-center px-[24px] py-[12px] w-full h-[40px] bg-black border-2 border-black hover:bg-[#D3FB51] hover:text-black transition-all duration-300">
            <span className="text-[16px] leading-[16px] text-white font-medium hover:text-black">
              Reserve
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
