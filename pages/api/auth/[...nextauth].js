import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // if (validCredentials) {
                return { email: req.email, password: req.password };
                // } else {
                //   return null;
                // }
            },
        }),
    ],
    pages: {
        signIn: '/login',
        signOut: '/',
    }
}

export default NextAuth(authOptions)