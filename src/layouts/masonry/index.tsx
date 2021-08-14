import { useRef } from 'react'
import type { FunctionComponent } from 'react'

import { useMasonrySpace } from '@services/hooks'
import { groupMasonry } from '@services/array'

const MasonryLayout: FunctionComponent<{
    data: string[]
}> = ({ data }) => {
    let layoutRef = useRef<HTMLElement>(null)

    let spaces = useMasonrySpace(layoutRef)

    let masonry = groupMasonry(data, spaces)

    return (
        <main
            className="relative flex flex-row gap-4 w-full px-4"
            ref={layoutRef}
        >
            {masonry.map((column, index) => (
                <section
                    key={index.toString()}
                    className="flex flex-col flex-1 gap-4"
                >
                    {column.map((title) => (
                        <h1
                            className="w-full bg-gray-200 rounded"
                            key={title}
                            style={{
                                height: Math.random() * 300 + 200
                            }}
                        >
                            {title}
                        </h1>
                    ))}
                </section>
            ))}
        </main>
    )
}

export default MasonryLayout
