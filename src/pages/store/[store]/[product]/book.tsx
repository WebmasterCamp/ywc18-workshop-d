import { useEffect } from 'react'
import Head from 'next/head'
import { BookingForm } from '@components/organisms'
import { data } from '@services/data'
import { DiscoverItem } from '@typesRoot'
import { ProductLayout } from '@layouts'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { useAuth } from '@stores/auth'
import { useRouter } from 'next/router'
import { Masonry } from '@molecules'

interface ProductProps {
    product: DiscoverItem | null
}

const BookPage = ({ product = null }: ProductProps) => {
    let [user] = useAuth()
    let router = useRouter()

    useEffect(() => {
        if (user.isInit && !user.user) router.replace('/login')
    }, [user])

    if (!product)
        return <h1 className="text-center mx-auto text-3xl">Loading</h1>

    return (
        <>
            <Head>
                <title>จองบริการ {product.title}</title>
            </Head>
            <ProductLayout>
                <BookingForm product={product} />
            </ProductLayout>
            <Masonry />
        </>
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
        revalidate: 1
    }
}

export default BookPage
