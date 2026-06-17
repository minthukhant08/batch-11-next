import { userClient as axios } from "@/api";
import {routes} from '@/api/users/routes'

export const userAPI = {
    all: () => axios.get<User[]>(routes.resource)
}