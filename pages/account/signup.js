import CardsContainer from "../../components/layout/CardsContainer";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

export default function SignUpPage() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/signup", {
        fname: e.target.fname.value,
        email: e.target.email.value,
        pword: e.target.pword.value,
      })
      .then((res) => console.log(res))
      .finally(() => {
        router.push("/account/signin");
      })
      .catch((error) => console.log(error));
  };
  return (
    <CardsContainer>
      <br />
      <Link href="/" className="text-white p-10">
        Go Back
      </Link>
      <div className="sm:p-24 p-10">
        <h1 className="text-6xl p-1 text-glow text-animated text-center bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to-green-500 text-transparent mb-10">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="cards-container flex flex-col gap-4 lg:px-44 py-20">
            <label htmlFor="fname">Full Name</label>
            <span className="card bg-neutral-400/50 hover:bg-neutral-400 transition-all duration-1000 rounded-md hover:shadow-md hover:shadow-blue-500/25">
              <div className="card-content bg-neutral-800/95 p-px">
                <input
                  type="text"
                  placeholder="Full Name..."
                  name="fname"
                  className="text-white rounded-md card-interact py-2 px-4 w-full bg-neutral-800/95 focus:ring-1 focus:ring-neutral-400/90 focus:outline-none"
                />
              </div>
            </span>
            <label htmlFor="email">Email Address</label>
            <span className="card bg-neutral-400/50 hover:bg-neutral-400 transition-all duration-1000 rounded-md hover:shadow-md hover:shadow-blue-500/25">
              <div className="card-content bg-neutral-800/95 p-px">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address..."
                  className="text-white rounded-md card-interact py-2 px-4 w-full bg-neutral-800/95 focus:ring-1 focus:ring-neutral-400/90 focus:outline-none"
                />
              </div>
            </span>
            <label htmlFor="password">Password</label>
            <span className="card bg-neutral-400/50 hover:bg-neutral-400 transition-all duration-1000 rounded-md hover:shadow-md hover:shadow-blue-500/25">
              <div className="card-content bg-neutral-800/95 p-px">
                <input
                  type="password"
                  name="pword"
                  placeholder="Password..."
                  className="text-white rounded-md card-interact py-2 px-4 w-full bg-neutral-800/95 focus:ring-1 focus:ring-neutral-400/90 focus:outline-none"
                />
              </div>
            </span>
            <span className="card bg-blue-400/50 transition-all duration-1000 rounded-lg  shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="card-content">
                <input
                  type="submit"
                  value="Sign Up"
                  className="text-white rounded-lg card-interact py-2 px-4 w-full bg-blue-600/95 hover:bg-blue-700/95 transition-all duration-500 focus:ring-1 focus:ring-blue-400/90 focus:outline-none cursor-pointer"
                />
              </div>
            </span>
          </div>
        </form>
      </div>
    </CardsContainer>
  );
}
