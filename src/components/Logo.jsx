import { Link } from "react-router-dom";
import { getImagePath } from "../utils/imageUtils";

export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center"
    >
      <img
        src={getImagePath("images/logo.png")}
        alt="Shuffle Logo"
        className="h-8 w-auto"
      />
    </Link>
  );
}
