import { useRef } from "react";
import useUser from "../../hooks/useUser";

export default function Register({ toggle }) {
  const nameRef = useRef();
  const passwordRef = useRef();
  const nidRef = useRef();
  const addressRef = useRef();

  const { setUser } = useUser();

  function onSubmitHandler() {
    const newUserData = {
      name: nameRef.current.value,
      nid: nidRef.current.value,
      address: addressRef.current.value,
      password: passwordRef.current.value,
    };

    setUser(newUserData);
  }
  return (
    <form className="flex flex-col w-1/3 gap-4">
      <input
        type="text"
        placeholder="name"
        className="p-4 text-xl text-center rounded-md focus:outline-none"
        ref={nameRef}
      />
      <input
        type="text"
        placeholder="nid"
        className="p-4 text-xl text-center rounded-md focus:outline-none"
        ref={nidRef}
      />
      <input
        type="password"
        placeholder="password"
        className="p-4 text-xl text-center rounded-md focus:outline-none"
        ref={passwordRef}
      />
      <input
        type="text"
        placeholder="address"
        className="h-40 p-4 text-xl text-center rounded-md focus:outline-none"
        ref={addressRef}
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
