export default function Auth() {
  function onSubmitHandler() {
    console.log("plese do something");
  }

  return (
    <div className="flex flex-row justify-center h-full mt-20">
      <form action="" className="flex flex-col w-1/3 gap-4">
        <input
          type="text"
          placeholder="name"
          className="text-center focus:outline-none"
        />
        <input
          type="text"
          placeholder="nid"
          className="text-center focus:outline-none"
        />
        <input
          type="text"
          placeholder="address"
          className="h-40 text-center focus:outline-none"
        />
        <button
          type="submit"
          className=""
          onClick={(event) => {
            event.preventDefault();
            onSubmitHandler();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
