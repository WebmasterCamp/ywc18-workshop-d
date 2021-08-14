import { useState } from 'react'
import type { FunctionComponent } from 'react'

import type { GetStaticProps } from 'next'

import { MasonryLayout, DiscoverLayout } from '@layouts'

import { useInfiniteScrollObserver } from '@services/hooks'

import { data, getDiscover } from '@services/data'
import type { DiscoverItem } from '@typesRoot'

export interface DiscoverPageProps {
    discover?: DiscoverItem[]
}

const Landing: FunctionComponent<DiscoverPageProps> = ({ discover = data }) => {
    let [discoverData, updateDiscoverData] = useState(discover)

    useInfiniteScrollObserver(async () => {
        let newData = await getDiscover()

        updateDiscoverData([...discoverData, ...newData])
    })

    return <MasonryLayout data={discoverData} />
}

export default Landing
