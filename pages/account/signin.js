import CardsContainer from "../../components/layout/CardsContainer";
import Link from "next/link";

import { signIn } from "next-auth/react";

import { useState } from "react";
import { useRouter } from "next/router";

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    signIn("credentials", {
      redirect: false,
      email: e.target.email.value,
      pword: e.target.pword.value,
    }).then((res) => {
      if (!res.ok) {
        setError("Incorrect Email Address or Password");
      } else {
        router.push("/");
      }
    });
  };
  return (
    <CardsContainer>
      <br></br>
      <Link href="/" className="text-white p-10">
        Go Back
      </Link>
      <div className="sm:p-24 p-10">
        <h1 className="text-6xl p-1 text-glow text-animated text-center bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to-green-500 text-transparent mb-10">
          Sign In
        </h1>
        <p className="text-red-500 text-center">{error}</p>
        <form onSubmit={handleSubmit}>
          <div className="cards-container flex flex-col gap-4 lg:px-44 py-20">
            <label htmlFor="email" className="text-glow">
              Email Address
            </label>
            <span className="card bg-neutral-400/50 hover:bg-neutral-400 transition-all duration-1000 rounded-md hover:shadow-md hover:shadow-blue-500/25">
              <div className="card-content bg-neutral-800/95 p-px">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address..."
                  className="text-white rounded-md py-2 px-4 w-full bg-neutral-800/95 focus:ring-1 focus:ring-neutral-400/90 focus:outline-none"
                />
              </div>
            </span>
            <label htmlFor="password" className="text-glow">
              Password
            </label>
            <span className="card bg-neutral-400/50 hover:bg-neutral-400 transition-all duration-1000 rounded-md hover:shadow-md hover:shadow-blue-500/25">
              <div className="card-content bg-neutral-800/95 p-px">
                <input
                  type="password"
                  name="pword"
                  placeholder="Password..."
                  className="text-white rounded-md py-2 px-4 w-full bg-neutral-800/95 focus:ring-1 focus:ring-neutral-400/90 focus:outline-none"
                />
              </div>
            </span>
            <span className="card bg-gradient-to-r from-green-500 to-emerald-700 hover:bg-green-400 transition-all duration-1000 rounded-md hover:shadow-lg hover:shadow-green-500/25">
              <div className="card-content bg-green-800/95 p-px">
                <input
                  type="submit"
                  value="Sign In"
                  className="text-white box-glow rounded-md py-2 px-4 w-full bg-gradient-to-r from-green-500 to-emerald-500 focus:ring-1 focus:ring-green-400/90 focus:outline-none cursor-pointer"
                />
              </div>
            </span>
          </div>
        </form>
      </div>
    </CardsContainer>
  );
}
