import { useState } from "react";
import Login from "../components/register";
import Signup from "../components/login";

function Menu() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="text-blue-500 hover:text-blue-400"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          Go to {isLogin ? "login" : "login"}
        </button>
      </div>

      {isLogin ? <Login /> : <Signup />}
    </>
  );
}

export default Menu;
