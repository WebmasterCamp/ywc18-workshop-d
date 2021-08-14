import { useState } from 'react'
import type { FunctionComponent } from 'react'

import type { GetStaticProps } from 'next'

import { MasonryLayout, DiscoverLayout } from '@layouts'

import { useInfiniteScrollObserver } from '@services/hooks'

import { data, getDiscover } from '@services/data'
import type { DiscoverItem } from '@typesRoot'

import Head from 'next/head'

export interface DiscoverPageProps {
    discover: DiscoverItem[]
}

const Landing: FunctionComponent<DiscoverPageProps> = ({ discover }) => {
    let [discoverData, updateDiscoverData] = useState(discover)

    useInfiniteScrollObserver(async () => {
        let newData = await getDiscover()

        updateDiscoverData([...discoverData, ...newData])
    })

    return (
        <div>
            <Head>
                <title>ชามShine</title>
            </Head>
            <DiscoverLayout>
                <MasonryLayout data={discoverData} />
            </DiscoverLayout>
        </div>
    )
}

export const getStaticProps: GetStaticProps<DiscoverPageProps> = async () => {
    return {
        props: {
            discover: [...data, ...data]
        }
    }
}

export default Landing
