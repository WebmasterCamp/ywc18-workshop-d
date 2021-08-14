import type { FunctionComponent } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

const Tab: FunctionComponent<{
    title: string
    href: string
}> = ({ href, title }) => {
    let { asPath } = useRouter()
    let isActive = href === asPath

    return (
        <Link href={`/discover/${href}`}>
            <a
                className={`relative text-xl flex flex-col items-end ${
                    isActive ? 'font-medium' : ''
                }`}
            >
                {title}
                <div
                    className={`w-full h-[4px] mt-2 rounded-full ${
                        isActive ? '' : 'opacity-0'
                    } bg-primary`}
                />
            </a>
        </Link>
    )
}

export default Tab
