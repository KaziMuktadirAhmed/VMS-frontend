import { Link, useLocation } from "react-router-dom";
import HeaderMenu from "../header-menu/HeaderMenu";

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex flex-row items-center justify-between w-full pl-8 pr-8 h-14 bg-slate-500">
      <Link to="/" className="font-mono text-2xl font-semibold text-white">
        Logo
      </Link>
      <div className="flex flex-row h-full gap-5">
        <HeaderMenu />
        <Link
          to="/auth"
          className={`flex flex-row items-center h-full pl-6 pr-6 border  hover:border-black hover:bg-black ${
            location.pathname === "/auth"
              ? "bg-black border-black"
              : "border-white"
          }`}
        >
          <p className={`font-mono font-semibold text-center text-white`}>
            Account
          </p>
        </Link>
      </div>
    </header>
  );
}
