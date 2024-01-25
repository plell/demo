import { get } from "@/app/api/handlers";
import useData from "@/app/store/useData"

export const getUsers = async () => {
    const users = await get("user");
    useData.getState().setUsers(users.reverse())
}