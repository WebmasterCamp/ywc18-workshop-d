import { useEffect } from 'react'
import type { FunctionComponent } from 'react'

import { useAuth } from '@stores/auth'
import { useFirebaseAuth } from '@services/hooks'
import { useCart } from '@stores/cart'

const DataProvider: FunctionComponent<any> = ({ children }) => {
    let user = useFirebaseAuth()
    let [currentUser, updateUser] = useAuth()
    let [cart] = useCart()

    useEffect(() => {
        if (JSON.stringify(currentUser) !== JSON.stringify(user))
            updateUser(user)
    }, [user, currentUser])

    return children
}

export default DataProvider
