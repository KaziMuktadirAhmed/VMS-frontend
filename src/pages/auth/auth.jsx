import { useEffect, useState } from "react";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";

import CrossSvg from "../../assets/cross-white.svg";

export default function Auth() {
  const [hasAccount, setHasAccount] = useState(false);
  const [authError, setAuthError] = useState({});
  const [showError, setShowError] = useState(true);

  console.log(CrossSvg);

  useEffect(() => {
    setShowError((prev) => !prev);
  }, [authError]);

  return (
    <div className="flex flex-col items-center h-full mt-20">
      {hasAccount ? (
        <Login toggle={setHasAccount} setError={setAuthError} />
      ) : (
        <Register toggle={setHasAccount} setError={setAuthError} />
      )}
      {showError && (
        <div className="flex flex-row justify-between w-1/2 gap-6 pl-5 pr-5 mt-4 text-white bg-red-500 rounded-md">
          <h1>{JSON.stringify(authError)} There was some really bad errors</h1>
          <button
            className="h-7"
            onClick={() => {
              setShowError((prev) => !prev);
            }}
          >
            <img src={CrossSvg} alt="Close" className="h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
