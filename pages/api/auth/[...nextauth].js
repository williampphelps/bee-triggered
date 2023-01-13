import axios from "axios";
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

        let user = await axios.post(process.env.SERVER + '/api/auth/signin', credentials).then((res) => {
          console.log('AXIOS DATA: ', res.data);
          console.log('AXIOS OK: ', res.ok)
          if (res.ok && res.data) {
            return res.data
          }
          return null
        }).catch((e) => {
          console.log('AXIOS ERROR: ', e)
          return null
        });

        console.log('USER: ', user);
        return user;
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
