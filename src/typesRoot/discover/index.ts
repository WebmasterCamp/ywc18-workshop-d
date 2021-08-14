import type { Color, StaticImageData } from '@typesRoot'

export interface Chip {
    type: Color
    title: string
}

export interface DiscoverItem {
    type: string
    gender: string
    id: string
    title: string
    detail: string
    image: StaticImageData
    tags: Chip[]
    price: number

    store: {
        name: string
        description: string
        // ? URL
        author: string
    }
}

export interface CartItem {
    book: {
        place: string
        address: string
        time: string
        date: number
    }
    item: DiscoverItem
}
