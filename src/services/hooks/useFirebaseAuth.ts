import { useEffect, useReducer, useState } from 'react'

import type { User as FirebaseUser } from 'firebase/auth'
import { auth } from '@services/firebase'

import type { User } from '../auth/types'

const useFirebaseAuth = () => {
    let [user, updateUser] = useState<User>(null)
    let [isInit, init] = useReducer(() => true, false)

    useEffect(() => {
        let updateUserState = async (usr: FirebaseUser | null) => {
            if (!usr) return init()

            let { email, uid } = usr

            updateUser({
                uid,
                name: usr.displayName || '',
                photo: usr.photoURL || '',
                email: email || ''
            })

            init()
        }

        auth.onAuthStateChanged(updateUserState)
    }, [])

    return {
        user,
        isInit
    }
}

export default useFirebaseAuth
