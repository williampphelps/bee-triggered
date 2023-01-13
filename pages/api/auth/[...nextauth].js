import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // your configs
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email Address",
          type: "email",
          placeholder: "Enter Email Address Here...",
        },
        password: {
          label: "Password",
          type: "pword",
          placeholder: "Enter Password Here...",
        },
      },
      async authorize(credentials, req) {
        console.log('SEDNING SIGN IN REQUEST: ', process.env.SERVER);
        console.log(credentials);
        const res = await fetch(process.env.SERVER + "/api/auth/signin", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const user = await res.json();

        console.log(user);

        if (res.ok && user) {
          console.log('User SUCCESS')
          return user;
        }
        console.log("USER INVALID")
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.user = {
          id: user._id,
          full_name: user.full_name,
          email: user.email,
        };
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
  pages: {
    signIn: "/account/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true,
  },
};

export default NextAuth(authOptions);
