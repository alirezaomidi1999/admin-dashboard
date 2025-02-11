import api from "@/services/api";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "you@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const params = {
          email: credentials?.email,
          password: credentials?.password,
        };
        const res = await api.post("/auth/login", params);

        const user = await res.data;

        if (res.status > 299) {
          throw new Error(user.error || "Login failed!");
        }

        return {
          id: user.id,
          email: user.email,
          accessToken: user.token,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("tokenkwt: ", token);
      console.log("user: ", user);

      return token;
    },
    async session({ session, token }) {
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
