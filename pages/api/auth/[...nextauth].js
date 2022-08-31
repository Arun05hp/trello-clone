import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import { User, validate } from "../../../models/user";
import connectDb from "../../../lib/connectDb";
connectDb();
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        const { error } = validate({ email, password });
        if (error) throw new Error(error.details[0].message);

        const user = await User.findOne({ email: email });
        if (!user) throw new Error("Invalid email or password.");

        const validPassword = await user.verifyPassword(
          password,
          user.password
        );
        if (!validPassword) throw new Error("Invalid email or password.");
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      user && (token.user = user);

      return Promise.resolve(token);
    },
    async session({ session, user, token }) {
      session.user = user.user;
      return Promise.resolve(session);
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
