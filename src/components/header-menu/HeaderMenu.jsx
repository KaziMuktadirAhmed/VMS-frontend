import { Link, useLocation } from "react-router-dom";

export default function HeaderMenu() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="flex flex-row items-center justify-start h-full">
      <Link
        to="/"
        className="flex flex-row items-center h-full pl-2 pr-2 text-center hover:border-b-4 hover:border-black"
      >
        <p className="font-mono font-semibold">Home</p>
      </Link>
      <Link
        to="/instruction"
        className="flex flex-row items-center h-full pl-2 pr-2 text-center hover:border-b-4 hover:border-black"
      >
        <p className="font-mono font-semibold">Instruction</p>
      </Link>
    </div>
  );
}
