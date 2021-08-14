import { atom, useAtom } from 'jotai'

export const showMenu = atom<boolean>(false)

export const useMenu = () => useAtom(showMenu)
