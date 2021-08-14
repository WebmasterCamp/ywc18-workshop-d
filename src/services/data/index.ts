import type { DiscoverItem } from '@typesRoot'

import { nanoid } from 'nanoid'

import nail1 from '@public/nail/1.png'
import nail2 from '@public/nail/2.png'

export const data: DiscoverItem[] = [
    {
        id: nanoid(9),
        title: 'เพ้นท์เล็บสีแดงสามารถเลือก..',
        store: 'asdf',
        image: nail1,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ]
    },
    {
        id: nanoid(9),
        title: 'เพ้นท์เล็บสีแดงสามารถเลือก..',
        image: nail2,
        store: 'asdf',
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ]
    },
    {
        id: nanoid(9),
        title: 'เพ้นท์เล็บสีแดงสามารถเลือก..',
        store: 'asdf',
        image: nail1,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ]
    },
    {
        id: nanoid(9),
        title: 'เพ้นท์เล็บสีแดงสามารถเลือก..',
        image: nail2,
        store: 'asdf',
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ]
    },
    {
        id: nanoid(9),
        title: 'เพ้นท์เล็บสีแดงสามารถเลือก..',
        store: 'asdf',
        image: nail1,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ]
    },
    {
        id: nanoid(9),
        title: 'เพ้นท์เล็บสีแดงสามารถเลือก..',
        image: nail2,
        store: 'asdf',
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ]
    },
    {
        id: nanoid(9),
        title: 'เพ้นท์เล็บสีแดงสามารถเลือก..',
        store: 'asdf',
        image: nail1,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ]
    },
    {
        id: nanoid(9),
        title: 'เพ้นท์เล็บสีแดงสามารถเลือก..',
        image: nail2,
        store: 'asdf',
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ]
    },
    {
        id: nanoid(9),
        title: 'เพ้นท์เล็บสีแดงสามารถเลือก..',
        store: 'asdf',
        image: nail1,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ]
    },
    {
        id: nanoid(9),
        title: 'เพ้นท์เล็บสีแดงสามารถเลือก..',
        image: nail2,
        store: 'asdf',
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ]
    },
    {
        id: nanoid(9),
        title: 'เพ้นท์เล็บสีแดงสามารถเลือก..',
        store: 'asdf',
        image: nail1,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ]
    },
    {
        id: nanoid(9),
        title: 'เพ้นท์เล็บสีแดงสามารถเลือก..',
        image: nail2,
        store: 'asdf',
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ]
    },
    {
        id: nanoid(9),
        title: 'เพ้นท์เล็บสีแดงสามารถเลือก..',
        image: nail2,
        store: 'asdf',
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ]
    }
]

/**
 * Mock data
 *
 * TODO: Implement to get data from firebase
 */
export const getDiscover = async () => data
