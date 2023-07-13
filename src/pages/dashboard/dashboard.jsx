import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <h1 className="text-3xl">Name: {user.name}</h1>
      <h1 className="text-2xl">NID: {user.n_id}</h1>
      <h1 className="text-2xl">Address: {user.address}</h1>

      <div className="mt-16 text-xl">
        <table className="border-black border-1">
          <tr>
            <th>Vaccine Name</th>
            <th>Vaccination Date</th>
          </tr>
          <tr>
            <td>Pfizer</td>
            <td>03/08/2022</td>
          </tr>
          <tr>
            <td>Sputonic</td>
            <td>05/11/2022</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
