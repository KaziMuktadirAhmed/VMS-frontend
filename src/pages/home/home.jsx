import { Link } from "react-router-dom";
import CradLayout from "../../components/CardLayout/CradLayout";

export default function Home() {
  return (
    <div>
      {/* Welcome block */}
      <h1>Welcome to VMS</h1>
      <p>Login pr create an account to get started for youre next shot</p>

      {/* Instruction cards */}
      <CradLayout className="">
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
      </CradLayout>
    </div>
  );
}
