import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  // adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
