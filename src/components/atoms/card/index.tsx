import type { FunctionComponent } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Chips } from '@atoms'

import type { Chip as IChip, StaticImageData } from '@typesRoot'

const Card: FunctionComponent<{
    src: StaticImageData
    href: string
    title: string
    tags: IChip[]
}> = ({ src, href, title, tags }) => (
    <Link href={href}>
        <a className="flex flex-col" rel="article">
            <Image
                className="rounded-xl overflow-hidden"
                src={src}
                placeholder="blur"
            />
            <h3 className="my-2 text-lg font-semibold text-gary-900">
                {title}
            </h3>

            <Chips tags={tags} />
        </a>
    </Link>
)

export default Card
