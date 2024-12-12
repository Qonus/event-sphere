import NextAuth, { User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { dbConnect } from "./lib/mongo";
import { User as UserModel } from "./model/user-model";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user }: { user: User }) {
            try {
                await dbConnect();
                const existingUser = await UserModel.findOne({ email: user.email });
                const {name, email, image} = user;
                if (!existingUser) {
                    // Create a new user if they don't exist
                    const newUser = await UserModel.create({
                        name,
                        email,
                        image
                    });
                }
                return true;
            } catch (error) {
                console.error("Error in signIn callback:", error);
                return false; 
            }
        },
        async session({session}) {
            const sessionUser = await UserModel.findOne({email: session.user.email});
            if(sessionUser) {
                session.user.id = sessionUser._id.toString();
            }
            return session;
        }
    },
      
});