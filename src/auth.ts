import api from "@/services/api";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
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
        const users = [
          {
            id: "test-user-1",
            userName: "test1",
            name: "Test 1",
            password: "123",
            email: "test@example.com",
          },
          {
            id: "test-user-2",
            userName: "test2",
            name: "Test 2",
            password: "pass",
            email: "test2@donotreply.com",
          },
        ];
        const user = users.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password
        );
        return user
          ? { id: user.id, password: user.password, email: user.email }
          : null;
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     console.log("tokenkwt: ", token);
  //     console.log("user: ", user);

  //     if (user) {
  //       return token;
  //     }
  //     throw new Error("Login failed!");
  //   },
  //   async session({ session, token }) {
  //     if (token) {
  //       return session;
  //     }
  //     throw new Error("Login failed!");
  //   },
  // },
  // pages: {
  //   signIn: "/login",
  // },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
});
