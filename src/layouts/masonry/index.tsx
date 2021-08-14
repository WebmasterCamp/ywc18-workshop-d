import { useRef } from 'react'
import type { FunctionComponent } from 'react'

import { useMasonrySpace } from '@services/hooks'
import { groupMasonry } from '@services/array'

import type { DiscoverItem } from '@typesRoot'
import { Card } from '@components/atoms'

const MasonryLayout: FunctionComponent<{
    data: DiscoverItem[]
}> = ({ data }) => {
    let layoutRef = useRef<HTMLElement>(null)

    let spaces = useMasonrySpace(layoutRef)

    let masonry = groupMasonry(data, spaces)

    return (
        <main
            className="relative flex flex-row gap-4 w-full px-4 lg:px-32"
            ref={layoutRef}
        >
            {masonry.map((column, index) => (
                <section
                    key={index.toString()}
                    className="flex flex-col flex-1 gap-4"
                >
                    {column.map(({ id, image, store, title, tags }) => (
                        <Card
                            key={id}
                            src={image}
                            href={`/store/${store}/${id}`}
                            title={title}
                            tags={tags}
                        />
                    ))}
                </section>
            ))}
        </main>
    )
}

export default MasonryLayout
