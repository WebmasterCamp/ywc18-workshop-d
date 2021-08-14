import Link from 'next/link'
import Image from 'next/image'

import Table from '@saltyaom/react-table'

import { ProductLayout } from '@layouts'

import nail from '@public/nail/1.png'
import { useCart } from '@stores/cart'

import dayjs from 'dayjs'

const placeMap = {
    store: 'ที่ร้านค้า'
}

const Order = () => {
    let [cart, updateCart] = useCart()

    return (
        <ProductLayout className="!gap-8 my-12 !w-[960px]">
            <h1 className="text-3xl font-semibold">การจองของคุณ</h1>
            <Table
                className="w-full"
                header={['สินค้า', ' ', 'ราคา', '   ']}
                allThClassName="text-left px-4 text-2xl border-b border-black"
                allTdClassName="px-4 py-6"
                data={cart.map(
                    ({ book: { place, time, date }, item: { title, id } }) => [
                        <div className="max-w-[192px] rounded-xl">
                            <Image src={nail} />
                        </div>,
                        <section className="flex flex-col gap-1">
                            <h3 className="text-2xl font-semibold mb-2">
                                {title}
                            </h3>
                            <p className="text-xl">
                                {/* @ts-ignore */}
                                ประเภทการจอง : {placeMap[place] || 'ที่บ้าน'}
                            </p>
                            <p className="text-xl">
                                วันที่จอง : {dayjs(date).format('DD/MM/YYYY')}
                            </p>
                            <p className="text-xl">เวลา : {time}</p>
                        </section>,
                        <p className="text-xl font-semibold">450 บาท</p>,
                        <button
                            className="text-primary font-semibold text-xl"
                            type="button"
                            onClick={() => {
                                updateCart(
                                    cart.filter((item) => item.item.id !== id)
                                )
                            }}
                        >
                            ยกเลิกนัดหมาย
                        </button>
                    ]
                )}
            />
            <div className="flex justify-center">
                <Link href="/">
                    <a className="text-white hover:text-white focus:text-white text-xl font-semibold px-12 py-3 bg-primary rounded">
                        ดูการจองของคุณ
                    </a>
                </Link>
            </div>
        </ProductLayout>
    )
}

export default Order
