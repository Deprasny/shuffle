export const sortEvents = (events, sortConfig) => {
  const sortedEvents = [...events];
  const { key, direction } = sortConfig;

  sortedEvents.sort((a, b) => {
    if (key === "date") {
      return direction === "asc"
        ? a.date.getTime() - b.date.getTime()
        : b.date.getTime() - a.date.getTime();
    }

    if (key === "event" || key === "club" || key === "city" || key === "admission") {
      const aValue = a[key].toLowerCase();
      const bValue = b[key].toLowerCase();
      return direction === "asc" 
        ? aValue.localeCompare(bValue) 
        : bValue.localeCompare(aValue);
    }

    return 0;
  });

  return sortedEvents;
};

export const filterEvents = (events, { searchQuery, selectedCity, selectedClub, selectedDate }) => {
  return events.filter((event) => {
    // Filter by search query
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      const eventMatch = event.event.toLowerCase().includes(searchLower);
      const cityMatch = event.city.toLowerCase().includes(searchLower);
      const clubMatch = event.club.toLowerCase().includes(searchLower);

      if (!eventMatch && !cityMatch && !clubMatch) {
        return false;
      }
    }

    // Filter by city
    if (selectedCity && selectedCity.value !== "all" && event.city !== selectedCity.label) {
      return false;
    }

    // Filter by club
    if (selectedClub && selectedClub.value !== "all" && event.club !== selectedClub.label) {
      return false;
    }

    // Filter by date
    if (selectedDate) {
      const eventDate = event.date;
      const selected = new Date(selectedDate);
      if (
        eventDate.getDate() !== selected.getDate() ||
        eventDate.getMonth() !== selected.getMonth() ||
        eventDate.getFullYear() !== selected.getFullYear()
      ) {
        return false;
      }
    }

    return true;
  });
};

export const formatEventDate = (date) => {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit"
  });
};

export const getNextSortDirection = (currentKey, newKey, currentDirection) => {
  if (currentKey === newKey) {
    return currentDirection === "asc" ? "desc" : "asc";
  }
  return "asc";
};
