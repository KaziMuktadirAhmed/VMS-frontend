import { useState } from "react";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";

export default function Auth() {
  const [hasAccount, setHasAccount] = useState(false);
  return (
    <div className="flex flex-row justify-center h-full mt-20">
      {hasAccount ? (
        <Login toggle={setHasAccount} />
      ) : (
        <Register toggle={setHasAccount} />
      )}
    </div>
  );
}
