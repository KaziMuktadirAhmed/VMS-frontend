export default function Certificate() {
  return (
    <div className="flex flex-col justify-center my-16">
      <div className="my-3 border-b">
        <h1 className="px-6 py-4 text-4xl text-center">
          Certificate of Achievement
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-lg">
            This is certified that <b>Kazi Muktadir Ahmed</b>
          </h1>
          <h1 className="text-lg">
            who's National ID is: 1545487933158 successfully complete
            vaccination
          </h1>
        </div>
        <div className="mt-5">
          <h1 className="text-md">
            Here are the list of Vaccine Name and Date of Vaccination
          </h1>
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
    </div>
  );
}
