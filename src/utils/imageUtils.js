// Get the base URL from Vite's environment
export const BASE_URL = import.meta.env.BASE_URL || "/";

// Helper function to get the correct image path
export const getImagePath = (imagePath) => {
  return `${BASE_URL}${imagePath.startsWith("/") ? imagePath.slice(1) : imagePath}`;
};
