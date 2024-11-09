import axios from "axios";
import useToken from "../hooks/useToken";
import { useNavigate } from "react-router-dom";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 0 | 1;
  expired: boolean;
  locked: boolean;
  credentialsExpired: boolean;
  enable: boolean;
};

function Signup() {
  const { setToken } = useToken();
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const firstName = (formData.get("firstName") as string) || "";
    const lastName = (formData.get("lastName") as string) || "";
    const email = (formData.get("email") as string) || "";
    const password = (formData.get("password") as string) || "";

    const user: User = {
      firstName,
      lastName,
      email,
      password,
      role: 0,
      expired: false,
      locked: false,
      credentialsExpired: false,
      enable: true,
    };

    console.log(user);
    const res = await axios.post("https://nn1h052dp5.execute-api.us-east-2.amazonaws.com/v1/auth/signup", user);
    console.log(res.data);

    const { token } = res.data;
    setToken(token);

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
            type="text"
            placeholder="name"
            name="firstName"
          />
          <input
            className="outline rounded p-1"
            type="text"
            placeholder="last name"
            name="lastName"
          />
          <input
            className="outline rounded p-1"
            type="email"
            placeholder="email"
            name="email"
          />
          <input
            className="outline rounded p-1"
            type="password"
            placeholder="password"
            name="password"
          />

          <button
            className="rounded bg-blue-400 hover:bg-blue-300 p-1"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
