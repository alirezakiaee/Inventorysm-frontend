import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { ConvexAdapter } from "@/app/ConvexAdapter";
import { SignJWT, importPKCS8 } from "jose";

if (process.env.CONVEX_AUTH_PRIVATE_KEY === undefined) {
  throw new Error("Missing CONVEX_AUTH_PRIVATE_KEY environment variable");
}
if (process.env.JWKS === undefined) {
  throw new Error("Missing JWKS environment variable");
}
if (process.env.NEXT_PUBLIC_CONVEX_URL === undefined) {
  throw new Error("Missing NEXT_PUBLIC_CONVEX_URL environment variable");
}

const CONVEX_SITE_URL = process.env.NEXT_PUBLIC_CONVEX_URL!.replace(
  /.cloud$/,
  ".site"
);
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    //google oauth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: { params: { prompt: "consent" } },
    }),
  ],
  adapter: ConvexAdapter,
  callbacks: {
    async session({ session }) {
      const privateKey = await importPKCS8(
        process.env.CONVEX_AUTH_PRIVATE_KEY!,
        "RS256"
      );
      const convexToken = await new SignJWT({
        sub: session.userId,
      })
        .setProtectedHeader({ alg: "RS256" })
        .setIssuedAt()
        .setIssuer(CONVEX_SITE_URL)
        .setAudience("convex")
        .setExpirationTime("1h")
        .sign(privateKey);
      return { ...session, convexToken };
    },
  },
});
