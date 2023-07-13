import HearMenu from "../header-menu/HearMenu";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between w-full pl-8 pr-8 h-14 bg-slate-500">
      <h1 className="font-mono text-2xl font-semibold text-white">Logo</h1>
      <div className="flex flex-row h-full gap-5">
        <HearMenu />
        <button className="h-full pl-6 pr-6 border border-white hover:border-black hover:bg-black">
          <p className="font-mono font-semibold text-white">Account</p>
        </button>
      </div>
    </header>
  );
}
