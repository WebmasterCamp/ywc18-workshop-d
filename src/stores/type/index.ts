import { atom, useAtom } from 'jotai'

export const showMenu = atom<string>('ทั้งหมด')

export const useMenu = () => useAtom(showMenu)
