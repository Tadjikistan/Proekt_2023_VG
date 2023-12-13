//Отображение аватарки пользователя
"use client"
import { useSession } from "next-auth/react";

export default function Userinfo() {
    const {status, data: session} = useSession();

    if (status === "authenticated"){
        return (
        <div>
            <Image src={session?.user?.image} width={60} height={60}/>
        </div>
        )
    }else {
        <div>Error</div>
    }
    return 
}