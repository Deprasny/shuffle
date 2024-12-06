import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/imageUtils";
export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center"
    >
      <img
        src={BASE_URL + "images/logo.png"}
        alt="Shuffle Logo"
        className="h-8 w-auto"
      />
    </Link>
  );
}
