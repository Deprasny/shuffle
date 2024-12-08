const BASE_URL = import.meta.env.BASE_URL || "/";

export const getFontPath = (fontPath) => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = fontPath.startsWith("/") ? fontPath.slice(1) : fontPath;
  return `${BASE_URL}${cleanPath}`;
};
