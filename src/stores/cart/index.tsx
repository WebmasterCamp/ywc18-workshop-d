import { atom, useAtom } from 'jotai'

import { DiscoverItem } from '@typesRoot'

export const cartAtom = atom<DiscoverItem[]>([])

export const useCart = () => useAtom(cartAtom)
