import { User } from "@/Entities/User";

export default function UserPage(user: User){
    return(
        <>
            Welcome to add User {user.id} page!
        </>
    );
}