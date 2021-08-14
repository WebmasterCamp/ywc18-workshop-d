import type { FunctionComponent } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import type { Chip, Color, StaticImageData } from '@typesRoot'

const variantMap: Record<Color, string> = {
    primary: 'border-primary text-primary',
    secondary: 'border-secondary text-secondary'
}

const Card: FunctionComponent<{
    src: StaticImageData
    href: string
    title: string
    tags: Chip[]
}> = ({ src, href, title, tags }) => (
    <>
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

                <footer className="flex flex-row gap-2">
                    {tags.map(({ type, title: tag }) => (
                        <p
                            key={tag}
                            className={`text-xs font-medium px-2 py-0.5 border-2 rounded-full ${variantMap[type]}`}
                        >
                            {tag}
                        </p>
                    ))}
                </footer>
            </a>
        </Link>
    </>
)

export default Card
