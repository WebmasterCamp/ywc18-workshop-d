import type { FunctionComponent } from 'react'

import type { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'

import { data } from '@services/data'
import type { DiscoverItem } from '@typesRoot'

interface ProductProps {
    product: DiscoverItem | null
}

const Product: FunctionComponent<ProductProps> = ({ product = null }) => {
    console.log(data)

    if (!product) return <h1>Product not found</h1>

    let { image, title } = product

    return (
        <main className="flex flex-col w-full max-w-[960px] mx-auto">
            <header>
                <Image src={image} />
                <h1>{title}</h1>
            </header>
        </main>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<ProductProps> = async (ctx) => {
    let { params } = ctx

    return {
        props: {
            product: data.find(({ id }) => id === params?.product) || null
        },
        revalidate: 5 * 60
    }
}

export default Product
