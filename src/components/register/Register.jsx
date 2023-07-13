export default function Register({ toggle }) {
  function onSubmitHandler() {
    console.log("doing something");
  }
  return (
    <form className="flex flex-col w-1/3 gap-4">
      <input
        type="text"
        placeholder="name"
        className="p-4 text-xl text-center rounded-md focus:outline-none"
      />
      <input
        type="text"
        placeholder="nid"
        className="p-4 text-xl text-center rounded-md focus:outline-none"
      />
      <input
        type="text"
        placeholder="address"
        className="h-40 p-4 text-xl text-center rounded-md focus:outline-none"
      />
      <button
        type="submit"
        className="inline-block p-4 text-xl bg-blue-400 rounded-md hover:bg-blue-700 hover:text-white"
        onClick={(event) => {
          event.preventDefault();
          onSubmitHandler();
        }}
      >
        Submit
      </button>
      <span>
        {"Already have an account ? "}
        <button
          className="text-blue-400 underline"
          onClick={(event) => {
            event.preventDefault();
            toggle((prev) => !prev);
          }}
        >
          Sign in
        </button>
      </span>
    </form>
  );
}
