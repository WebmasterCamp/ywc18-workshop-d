import type { DiscoverItem } from '@typesRoot'

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

import hair1 from '@public/hair/1.png'
import hair2 from '@public/hair/2.png'
import hair3 from '@public/hair/3.png'
import hair4 from '@public/hair/4.png'
import hair5 from '@public/hair/5.png'
import hair6 from '@public/hair/1.png'
import hair7 from '@public/hair/2.png'
import hair8 from '@public/hair/3.png'
import hair9 from '@public/hair/4.png'
import hair10 from '@public/hair/5.png'

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
        type: 'nail',
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
            author: '/author/1.png'
        }
    },
    {
        title: 'เพ้นท์เล็บสีแดง',
        type: 'nail',
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
        type: 'nail',
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
        type: 'nail',
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
        type: 'nail',
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
        type: 'nail',
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
        type: 'nail',
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
        type: 'nail',
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
        type: 'nail',
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
        type: 'nail',
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
        type: 'nail',
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
