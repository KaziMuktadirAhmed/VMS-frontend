import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Welcome to VMS</h1>
      <p>Login pr create an account to get started for youre next shot</p>
      <ul className="underline">
        <li>
          <Link to="/auth" className="hover:text-blue-500">
            Auth page
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:text-red-500">
            Dashboard page
          </Link>
        </li>
      </ul>
    </>
  );
}
