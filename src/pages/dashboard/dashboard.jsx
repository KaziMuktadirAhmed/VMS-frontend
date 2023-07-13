import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/" className="underline hover:text-blue-500">
        Back to homepage
      </Link>
    </>
  );
}
