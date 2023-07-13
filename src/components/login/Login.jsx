import { useRef } from "react";
import useUser from "../../hooks/useUser";
import postData from "../../helpers/postData";

export default function Login({ toggle, setError }) {
  const nidRef = useRef();
  const passwordRef = useRef();

  const { setUser } = useUser();

  async function onSubmitHandler() {
    try {
      const userData = {
        n_id: nidRef.current.value,
        password: passwordRef.current.value,
      };
      setUser({
        nid: nidRef.current.value,
        password: passwordRef.current.value,
      });
      console.log("ok");
      const response = await postData(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        userData
      );
      console.log(response.data, "ok");
      console.log("hello hello");
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  return (
    <form className="flex flex-col w-1/3 gap-4">
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
