import { userAPI } from "@/api/users"

export default async function UsersPage() {
    const usersRes = await userAPI.all()
    return <div>
        {
            usersRes.data.map((user) => <div key={user.id}>{JSON.stringify(user)}</div>)
        }
    </div>
}