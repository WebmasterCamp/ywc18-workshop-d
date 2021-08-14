export interface UserData {
    uid: string
    name: string
    photo: string
    email: string
}

export type User = UserData | null
