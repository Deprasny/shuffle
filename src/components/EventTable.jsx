import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { cities, clubs, tableEvents } from "../constants/tableData";
import {
  filterEvents,
  formatEventDate,
  getNextSortDirection,
  sortEvents
} from "../utils/tableUtils";
import { DatePicker } from "./DatePicker";
import { FilterDropdown } from "./FilterDropdown";

const SortIcon = ({ column, sortConfig }) => {
  if (sortConfig.key !== column) {
    return (
      <IoMdArrowDropdown className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
    );
  }
  return sortConfig.direction === "asc" ? (
    <IoMdArrowDropup className="w-4 h-4" />
  ) : (
    <IoMdArrowDropdown className="w-4 h-4" />
  );
};

export function EventTable() {
  const [visibleEvents, setVisibleEvents] = useState(5);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedClub, setSelectedClub] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "asc" });
  const [allEvents] = useState(tableEvents);

  const handleSort = (key) => {
    const direction = getNextSortDirection(sortConfig.key, key, sortConfig.direction);
    setSortConfig({ key, direction });
  };

  const resetFilters = () => {
    setSelectedCity(null);
    setSelectedClub(null);
    setSelectedDate(null);
    setSearchQuery("");
  };

  const handleLoadMore = () => {
    setVisibleEvents((prev) => prev + 5);
  };

  const filteredEvents = sortEvents(
    filterEvents(allEvents, { searchQuery, selectedCity, selectedClub, selectedDate }),
    sortConfig
  );

  const hasActiveFilters = selectedCity || selectedClub || selectedDate || searchQuery;
  const hasMoreEvents = visibleEvents < filteredEvents.length;

  return (
    <div className="w-full py-12 bg-black">
      <div className="max-w-[1320px] mx-auto border border-white rounded-xl">
        <div className="py-5">
          <h2 className="leading-[1] tracking-[-0.02em] px-6 font-pixel font-normal text-white">
            Upcoming Events
          </h2>
        </div>
        <div className="p-6 bg-white border border-black rounded-b-xl">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-6 ">
            <div className="flex items-center gap-4 text-sm text-black font-pixel">
              <FilterDropdown
                options={cities}
                placeholder="Cities"
                selected={selectedCity}
                onSelect={setSelectedCity}
              />
              <span>•</span>
              <FilterDropdown
                options={clubs}
                placeholder="Clubs"
                selected={selectedClub}
                onSelect={setSelectedClub}
              />
              <span>•</span>
              <DatePicker
                selected={selectedDate}
                onSelect={setSelectedDate}
              />
              {hasActiveFilters && (
                <>
                  <span>•</span>
                  <button
                    onClick={resetFilters}
                    className="text-black transition-colors hover:text-gray-600"
                  >
                    Reset
                  </button>
                </>
              )}
            </div>
            <div className="flex items-center gap-2 bg-[#F9F9F9] px-3 py-2">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none w-[200px] text-sm text-black placeholder-gray-400 font-pixel"
              />
              <IoSearchOutline className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Table */}
          <table className="w-full">
            <thead>
              <tr className="text-black border-b border-black">
                {["date", "event", "club", "city", "admission"].map((column) => (
                  <th
                    key={column}
                    className="py-2 text-sm text-left cursor-pointer font-pixel group hover:text-gray-600"
                    onClick={() => handleSort(column)}
                  >
                    <div className="flex items-center gap-1">
                      {column.charAt(0).toUpperCase() + column.slice(1)}
                      <SortIcon
                        column={column}
                        sortConfig={sortConfig}
                      />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredEvents.slice(0, visibleEvents).map((event) => (
                <tr
                  key={event.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-4 text-sm text-black align-top">
                    {formatEventDate(event.date)}
                  </td>
                  <td className="py-4 text-sm text-black max-w-[400px] break-words whitespace-normal">
                    {event.event}
                  </td>
                  <td className="py-4 text-sm text-black align-top">{event.club}</td>
                  <td className="py-4 text-sm text-black align-top">{event.city}</td>
                  <td className="py-4 text-sm text-black align-top">{event.admission}</td>
                </tr>
              ))}
              {filteredEvents.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="py-8 text-center text-gray-500 font-pixel"
                  >
                    No events found. Try adjusting your filters.
                    <button
                      onClick={resetFilters}
                      className="block mx-auto mt-2 text-black underline hover:text-gray-600"
                    >
                      Reset Filters
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Load More */}
          {hasMoreEvents && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleLoadMore}
                className="text-sm text-black transition-colors cursor-pointer hover:text-gray-600 font-pixel"
              >
                Load More...
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
