import { atom, useAtom } from 'jotai'

import type { User } from '@services/auth/types'

interface UserAtom {
    user: User
    isInit: boolean
}

export const userAtom = atom<UserAtom>({
    user: null,
    isInit: false
})

export const useAuth = () => useAtom(userAtom)
