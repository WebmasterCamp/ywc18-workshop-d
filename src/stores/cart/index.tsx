import { atom, useAtom } from 'jotai'

import { CartItem } from '@typesRoot/discover'

export const cartAtom = atom<CartItem[]>([])

export const useCart = () => useAtom(cartAtom)
