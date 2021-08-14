import type { DiscoverItem } from '@typesRoot'

import { nanoid } from 'nanoid'

import nail1 from '@public/nail/1.png'
import nail2 from '@public/nail/2.png'

const mockId = [
    '-6wj5QhoP',
    '-ooPdbkDn',
    '4fAf_9fCt',
    'B-lSnfbow',
    '7aHCflj16',
    'WTgWsqP6n',
    'hWTXcM44P',
    'J0OlvnN5Y',
    'cvZK8J-9q',
    'Ag6Aw2UAN',
    '5CH3vOj-u',
    'JIl9yOXmh',
    'K1IuKere2',
    'YzayWtHPl',
    'YRA-0HXnk',
    'E8mgJZf7L',
    'vzUehHtBi',
    'Q3gQ7F1jt',
    'n8MzG28Sk',
    'bP4DJ5jtJ',
    'djCHMQobn',
    'J_1JuLBoK',
    '-0h3HZ05q',
    'ThszrLBOX',
    'PhjvKxSGM'
]

export const mockProduct: Omit<DiscoverItem, 'id'>[] = [
    {
        title: 'เพ้นท์เล็บสีแดงสามารถเลือก..',
        store: 'asdf',
        image: nail1,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ]
    },
    {
        title: 'เพ้นท์เล็บสีแดงสามารถเลือก..',
        image: nail2,
        store: 'asdf',
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ]
    }
]

export const data: DiscoverItem[] = mockId.map((id, index) => ({
    ...mockProduct[index % mockProduct.length],
    id
}))
/**
 * Mock data
 *
 * TODO: Implement to get data from firebase
 */
export const getDiscover = async () => data
