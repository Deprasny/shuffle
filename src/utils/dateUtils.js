export const formatDate = (date) => {
  const months = [
    "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December", "January", "February"
  ];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

export const formatSelectedDate = (date) => {
  if (!date) return "Date";
  return date.toLocaleDateString('en-US', { 
    month: 'numeric',
    day: 'numeric',
    year: 'numeric'
  });
};

export const daysInMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const firstDayOfMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};
