import { useEffect } from 'react'
import type { FunctionComponent } from 'react'

import { useAuth } from '@stores/auth'
import { useFirebaseAuth } from '@services/hooks'
import { useCart } from '@stores/cart'

const DataProvider: FunctionComponent<any> = ({ children }) => {
    let user = useFirebaseAuth()
    let [currentUser, updateUser] = useAuth()
    let [cart, updateCart] = useCart()

    useEffect(() => {
        if (JSON.stringify(currentUser) !== JSON.stringify(user))
            updateUser(user)
    }, [user, currentUser])

    useEffect(() => {
        updateCart(JSON.parse(localStorage.getItem('cart') || '[]'))
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return children
}

export default DataProvider
