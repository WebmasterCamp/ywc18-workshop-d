import type { DiscoverItem } from '@typesRoot'

import { nanoid } from 'nanoid'

import nail1 from '@public/nail/1.png'
import nail2 from '@public/nail/2.png'
import nail3 from '@public/nail/3.png'
import nail4 from '@public/nail/4.png'
import nail5 from '@public/nail/5.png'
import nail6 from '@public/nail/6.png'
import nail7 from '@public/nail/7.png'
import nail8 from '@public/nail/8.png'
import nail9 from '@public/nail/9.png'
import nail10 from '@public/nail/10.png'
import nail11 from '@public/nail/11.png'
import nail12 from '@public/nail/12.png'

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
        title: 'เพ้นท์เล็บสีแดงมาก',
        detail: '',
        image: nail1,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ],
        price: 490,
        store: {
            name: 'beauty-store',
            description: '',
            author: ''
        }
    },
    {
        title: 'เพ้นท์เล็บสีแดง',
        detail: '',
        image: nail2,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ],
        price: 370,
        store: {
            name: 'beauty-store',
            description: '',
            author: ''
        }
    },
    {
        title: 'เพ้นท์เล็บสีฟ้า',
        detail: '',
        image: nail3,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ],
        price: 490,
        store: {
            name: 'beauty-store',
            description: '',
            author: ''
        }
    },
    {
        title: 'เพ้นท์เล็บหลากสี',
        detail: '',
        image: nail4,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ],
        price: 370,
        store: {
            name: 'beauty-store',
            description: '',
            author: ''
        }
    },
    {
        title: 'เพ้นท์เล็บสีชมพู',
        detail: '',
        image: nail5,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ],
        price: 370,
        store: {
            name: 'beauty-store',
            description: '',
            author: ''
        }
    },
    {
        title: 'เพ้นท์เล็บแฟนตาซี',
        detail: '',
        image: nail6,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ],
        price: 370,
        store: {
            name: 'beauty-store',
            description: '',
            author: ''
        }
    },
    {
        title: 'เพ้นท์เล็บสีฟ้าลายดอกไม้',
        detail: '',
        image: nail7,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ],
        price: 370,
        store: {
            name: 'beauty-store',
            description: '',
            author: ''
        }
    },
    {
        title: 'เพ้นท์เล็บสีแดง ดูเรียบหรู',
        detail: '',
        image: nail8,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ],
        price: 370,
        store: {
            name: 'beauty-store',
            description: '',
            author: ''
        }
    },
    {
        title: 'เพ้นท์เล็บสีแดงชมพู',
        detail: '',
        image: nail9,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ],
        price: 370,
        store: {
            name: 'beauty-store',
            description: '',
            author: ''
        }
    },
    {
        title: 'เพ้นท์เล็บสีดำ',
        detail: '',
        image: nail10,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ],
        price: 370,
        store: {
            name: 'beauty-store',
            description: '',
            author: ''
        }
    },
    {
        title: 'เพ้นท์เล็บสีชมพู',
        detail: '',
        image: nail11,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ],
        price: 370,
        store: {
            name: 'beauty-store',
            description: '',
            author: ''
        }
    },
    {
        title: 'เพ้นท์เล็บใส',
        detail: '',
        image: nail12,
        tags: [
            { type: 'primary', title: 'ไปที่ร้าน' },
            { type: 'secondary', title: 'มาที่บ้าน: ย่านสาทร' }
        ],
        price: 370,
        store: {
            name: 'beauty-store',
            description: '',
            author: ''
        }
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
