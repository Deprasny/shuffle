import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center"
    >
      <img
        src="/images/logo.png"
        alt="Shuffle Logo"
        className="h-8 w-auto"
        loading="eager"
      />
    </Link>
  );
}
