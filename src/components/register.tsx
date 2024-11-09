import axios from "axios";
// import useToken from "../hooks/useToken";
import { useNavigate } from "react-router-dom";

type LoginDto = {
  username: string;
  password: string;
  role: string
};

function Login() {
  // const { setToken } = useToken();
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const username = (formData.get("username") as string) ;
    const password = (formData.get("password") as string);
    const role = (formData.get("role") as string);

    const loginDto: LoginDto = {
      username,
      password,
      role
    };

    console.log(loginDto);
    const res = await axios.post("https://nn1h052dp5.execute-api.us-east-2.amazonaws.com/v1/auth/register", loginDto);
    console.log(res.data);

    // const { token } = res.data;
    // setToken(token);

    navigate("/profile");
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 flex flex-col mx-auto"
        >
          <input
            className="outline rounded p-1"
            type="username"
            placeholder="username"
            name="username"
          />
          <input
            className="outline rounded p-1"
            type="password"
            placeholder="password"
            name="password"
          />
          <input
            className="outline rounded p-1"
            type="role"
            placeholder="role"
            name="role"
          />

          <button
            className="rounded bg-blue-400 hover:bg-blue-300 p-1"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
