import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user.js"
import NextAuth from "next-auth/next";
import DiscordProvider from 'next-auth/providers/discord'

const authOptions = {
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),
    ],
    callbacks: { //Получаем информацию о пользователе
        async signIn({user, account}) {
            console.log("User", user.id)
            console.log('Acc', account.provider)
            if (account.provider === 'discord') {
                const {id, name, email} = user;
                const balance = 300
                try{
                    await connectMongoDB();

                    const userExists = await User.findOne({name})
                    if (!userExists){
                        const res = await fetch('http://localhost:3000/api/user', {
                        method: "POST",
                        headers: {"Content-type": "application/json",},
                        body: JSON.stringify({id, name, email, balance})
                    })
                    if (res.ok) {
                        return user;
                    }
                    }
                    
                } catch (error){
                    console.log(error)
                }
            }
            return user;
        }
    }
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}