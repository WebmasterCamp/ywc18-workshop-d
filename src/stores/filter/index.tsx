import { atom, useAtom } from 'jotai'

export interface FilterAtom {
    gender: 'ชาย' | 'หญิง' | 'ทั้งหมด'
    price:
        | 'ทั้งหมด '
        | 'ต่ำกว่า 300 บาท'
        | 'ต่ำกว่า 500 บาท'
        | 'ต่ำกว่า 1,000 บาท'
}

export const filterAtom = atom<FilterAtom>({
    gender: 'ทั้งหมด',
    price: 'ทั้งหมด '
})

export const useFilter = () => useAtom(filterAtom)
