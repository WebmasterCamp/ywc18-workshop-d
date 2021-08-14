import { useState } from 'react'
import type { FunctionComponent } from 'react'

import type { GetStaticProps } from 'next'

import { MasonryLayout, DiscoverLayout } from '@layouts'

import { useInfiniteScrollObserver } from '@services/hooks'

import { data } from '@services/data'
import type { DiscoverItem } from '@typesRoot'

import Head from 'next/head'

export interface DiscoverPageProps {
    discover: DiscoverItem[]
}

const hair = data.filter(({ type }) => type === 'nail')

const Landing: FunctionComponent<DiscoverPageProps> = ({ discover }) => {
    let [discoverData, updateDiscoverData] = useState(discover)

    useInfiniteScrollObserver(async () => {
        let newData = [...hair]

        updateDiscoverData([...discoverData, ...newData])
    })

    return (
        <>
            <Head>
                <title>ชาร์มShine</title>
            </Head>

            <DiscoverLayout>
                <MasonryLayout data={discoverData} />
            </DiscoverLayout>
        </>
    )
}

export const getStaticProps: GetStaticProps<DiscoverPageProps> = async () => {
    return {
        props: {
            discover: [...hair, ...hair]
        }
    }
}

export default Landing
