import type { Color, StaticImageData } from '@typesRoot'

export interface Chip {
    type: Color
    title: string
}

export interface DiscoverItem {
    store: string
    id: string
    image: StaticImageData
    title: string
    tags: Chip[]
}
