import { Link } from "react-router-dom";
import CradLayout from "../../components/CardLayout/CradLayout";

export default function Home() {
  return (
    <div className="h-screen">
      {/* Welcome block */}
      <div className="">
        <h1>Welcome to VMS</h1>
        <p>Login or create an account to get started for youre next shot</p>
      </div>

      {/* Instruction cards */}
      <div className="flex flex-row flex-wrap">
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

        <CradLayout className="">
          <h1>Check status</h1>
        </CradLayout>

        <CradLayout className="">
          <h1>Instructions</h1>
        </CradLayout>
      </div>
    </div>
  );
}
