import type { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import type { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'

import { ProductLayout } from '@layouts'

import { Chips } from '@atoms'
import { Masonry } from '@molecules'

import { data } from '@services/data'

import map from '@public/mock/map.png'

import type { DiscoverItem } from '@typesRoot'
import Head from 'next/head'
interface ProductProps {
    product: DiscoverItem | null
}

const Product: FunctionComponent<ProductProps> = ({ product = null }) => {
    if (!product) return <h1>Product not found</h1>

    const router = useRouter()

    let { image, title, tags, store, price } = product

    const goToBookPage = () => {
        router.push(router.asPath + '/book')
    }

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <ProductLayout className="px-4">
                <header className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
                    <div className="flex flex-1 justify-end items-center">
                        <Image src={image} />
                    </div>
                    <section className="flex flex-col flex-1 h-full justify-between">
                        <section className="flex flex-col gap-2">
                            <h1 className="text-3xl font-bold">{title}</h1>

                            <Chips tags={tags} />

                            <p className="text-lg text-gray-800">
                                เวลาที่ใช้ในการทำ 1 ชั่วโมง
                            </p>
                            <div className="w-[60px] h-[1px] bg-black my-2" />
                            <h3 className="text-3xl">{price}฿</h3>
                        </section>
                        <section className="flex flex-col items-start pt-10 gap-2">
                            <p className="text-lg text-gray-700 font-medium">
                                By {store.name}
                                <span>ฉีดวัคซีนแล้ว 2 เข็ม</span>
                            </p>
                            <button
                                className="text-xl text-white font-semibold px-9 py-3 bg-primary rounded-full"
                                onClick={goToBookPage}
                            >
                                จองคิว
                            </button>
                        </section>
                    </section>
                </header>

                <section className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
                    <a
                        href="https://www.google.com/maps/place/True+Digital+Park/@13.6851571,100.6091376,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29ed269181bb1:0x60c3178ba983c76!8m2!3d13.6851519!4d100.6113263"
                        target="_blank"
                        rel="noreferer noreopener"
                    >
                        <Image className="rounded-lg" src={map} />
                    </a>
                </section>
            </ProductLayout>
            <h1 className="text-3xl my-4 font-bold text-center mx-auto">
                สำรวจเพิ่มเติม
            </h1>
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

export default Product
