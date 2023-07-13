import { Link } from "react-router-dom";
import CradLayout from "../../components/CardLayout/CradLayout";

export default function Home() {
  return (
    <div className="h-screen">
      <h1 className="px-6 mt-12 text-5xl font-semibold border-b border-gray-300">
        Welcome to Vaccine Management System
      </h1>
      <div className="flex flex-row justify-center mt-7">
        <div className="mb-16 border-2 shadow-lg mx-11">
          <h1 className="px-6 py-20 my-24 text-5xl text-center">
            Registration
          </h1>
        </div>

        <div className="flex flex-col">
          <div className="my-4 border-2 shadow-lg">
            <h1 className="px-24 py-8 text-2xl text-center">Dashboard</h1>
          </div>
          <div className="my-4 border-2 shadow-lg">
            <h1 className="px-24 py-8 text-2xl text-center ">Instruction</h1>
          </div>
          <div className="my-4 border-2 shadow-lg">
            <h1 className="px-24 py-8 text-2xl text-center ">Certificate</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
