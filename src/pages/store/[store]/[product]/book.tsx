import { BookingForm } from '@components/organisms'
import { data } from '@services/data'
import { DiscoverItem } from '@typesRoot'
import { ProductLayout } from '@layouts'
import type { GetStaticProps, GetStaticPaths } from 'next'

interface ProductProps {
    product: DiscoverItem | null
}

const BookPage = ({ product = null }: ProductProps) => {
    if (!product) return <h1>Product not found</h1>

    return (
        <ProductLayout>
            <BookingForm product={product} />
        </ProductLayout>
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

    console.log('P', data.find(({ id }) => id === params?.product) || null)

    return {
        props: {
            product: data.find(({ id }) => id === params?.product) || null
        },
        revalidate: 1
    }
}

export default BookPage
