import { User } from "@/Entities/User";

interface UserCardProps{
    user: User;
}

export default function UserCard({user}: UserCardProps){
    return(
        <>
            <div>{user.name} - {user.userRole}</div>
        </>
    );
}