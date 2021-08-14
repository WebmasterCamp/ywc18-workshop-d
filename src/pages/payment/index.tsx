import Image from 'next/image'
import Head from 'next/head'
import { ProductLayout } from '@layouts'
import Link from 'next/link'

const PaymentSuccess = () => {
    return (
        <div>
            <Head>
                <title>การจ่ายเงินสำเร็จ</title>
            </Head>
            <ProductLayout className="justify-center items-center min-h-[600px]">
                <h1 className="text-3xl text-gray-700 font-bold">จองสำเร็จ</h1>
                <nav className="flex flex-row gap-4">
                    <Link href="/">
                        <a className="text-primary text-xl font-semibold px-12 py-3 border-2 hover:text-primary focus:text-primary border-primary rounded">
                            กลับหน้าแรก
                        </a>
                    </Link>
                    <Link href="/order">
                        <a className="text-white hover:text-white focus:text-white text-xl font-semibold px-12 py-3 bg-primary rounded">
                            ดูการจองของคุณ
                        </a>
                    </Link>
                </nav>
            </ProductLayout>
        </div>
    )
}

export default PaymentSuccess
