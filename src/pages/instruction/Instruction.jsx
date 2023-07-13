export default function Instruction() {
  return (
    <div>
      <h1 className="px-6 mt-12 text-5xl font-semibold border-b border-gray-300">
        Vaccination Intruction
      </h1>
      <h1 className="px-6 py-6 mx-6 mt-12 text-lg border-2 shadow-lg ">
        Vaccine Application: Users can apply for the vaccine after register into
        vaccine management system by input name, n_id, address and password then
        eligibility criteria. This can be handled by creating a
        VaccineApplication schema, which stores information about the user's
        vaccine application, such as the user ID and vaccine preference.
      </h1>
      <h1 className="px-6 py-6 mx-6 mt-12 text-lg border-2 shadow-lg ">
        Vaccination Scheduling: Once the user's vaccine application is approved,
        the system assigns a vaccination date. This date should be within the
        required timeframe after the first dose. The vaccination date can be
        generated using the getVaccinationDate function we discussed earlier,
        and the details can be stored in a Vaccination schema.
      </h1>
      <h1 className="px-6 py-6 mx-6 mt-12 text-lg border-2 shadow-lg ">
        Vaccine Certificate Generation: When a user requests a vaccine
        certificate, the system retrieves the user's vaccination records from
        the Vaccination schema, validates that the user has received both doses,
        and generates a certificate with the necessary details. The certificate
        can be stored in a Certificate schema.
      </h1>
    </div>
  );
}
