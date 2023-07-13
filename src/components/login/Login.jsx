export default function Login({ toggle }) {
  function onSubmitHandler() {
    console.log("doing something");
  }
  return (
    <form className="flex flex-col w-1/3 gap-4">
      <input
        type="text"
        placeholder="nid"
        className="p-4 text-xl text-center rounded-md focus:outline-none"
      />
      <input
        type="text"
        placeholder="password"
        className="p-4 text-xl text-center rounded-md focus:outline-none"
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
        {"Don't have an account ? "}
        <button
          className="text-blue-400 underline"
          onClick={(event) => {
            event.preventDefault();
            toggle((prev) => !prev);
          }}
        >
          Create an account
        </button>
      </span>
    </form>
  );
}