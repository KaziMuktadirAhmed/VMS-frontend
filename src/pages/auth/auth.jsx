import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <div>
      <h1>Auth</h1>
      <Link to="/" className="underline hover:text-blue-500">
        Back to homepage
      </Link>
    </div>
  );
}
