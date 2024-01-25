import { User } from '@prisma/client'
import create from 'zustand'

const initialState = {
    users: [],
    mouseDown:false
}

type StoreState = {
    users: User[]
    mouseDown:boolean
    setUsers: (users: User[]) => void
    setMouseDown: (mouseDown: boolean) => void
}

export default create<StoreState>((set, get) => ({
    ...initialState,
    setUsers: (users) => set({ users }),
    setMouseDown: (mouseDown) => set({ mouseDown }),

}))
