export default function CradLayout({ children }) {
  return (
    <div
      id="card"
      className="relative flex flex-col items-center justify-center p-10 border-2 border-black shadow-2xl top-1/2 left-1/2 w-fit rounded-2xl"
    >
      <h1>StartCradLayout</h1>
      {children}
      <h1>EndCardLayout</h1>
    </div>
  );
}
