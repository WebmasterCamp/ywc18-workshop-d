import { EventHandler, useState } from 'react'
import dayjs from 'dayjs'
import { Divider, Radio, DatePicker, Input, Modal, Form } from 'antd'
import { useRouter } from 'next/router'
import type { DiscoverItem } from '@typesRoot'
import Image from 'next/image'
import Link from 'next/link'
import map from '@public/mock/map.png'

import { data } from '@services/data'
import type { GetStaticProps, GetStaticPaths } from 'next'

interface ProductProps {
    product: DiscoverItem
}
const { TextArea } = Input

enum Place {
    Home = 'home',
    Store = 'store'
}

const BookingForm = ({ product }: ProductProps) => {
    const { image, title, tags, store } = product
    const [place, setPlace] = useState<Place>(Place.Store)
    const router = useRouter()
    const [showModal, setShowModal] = useState(false)
    const [address, setAddress] = useState('')
    function disabledDate(current) {
        return current && current < dayjs().endOf('day')
    }
    const changePlace: EventHandler<any> = (e) => {
        setPlace(e.target.value)
    }
    return (
        <div
            className="bg-primary-white px-12 py-8 rounded-lg"
            style={{ boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)' }}
        >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={(v) => router.push('/payment')}
            >
                <div className="text-3xl font-medium">รายละเอียดการจอง</div>
                <Divider />
                <div className="grid grid-cols-3 gap-16">
                    <div className="col-span-1 h-full">
                        <Image src={image} />
                    </div>
                    <div className="col-span-2">
                        <div className="text-3xl">{title}</div>
                        <div className="flex">
                            <div>By {store}</div>
                            <div className="ml-3">✅ ฉีดวัคซีนแล้ว 2 เข็ม</div>
                        </div>
                        <div>
                            <div className="font-semibold text-xl mt-8">
                                ประเภทการจอง
                            </div>
                            <Radio.Group onChange={changePlace} value={place}>
                                <Radio value={Place.Store}>
                                    ไปใช้บริการที่ร้าน
                                </Radio>
                                <Radio value={Place.Home}>
                                    รับบริการที่บ้าน
                                </Radio>
                            </Radio.Group>
                        </div>
                        {place === Place.Home && (
                            <div className="w-[300px]">
                                <div
                                    className="flex justify-end text-xs text-text-black"
                                    onClick={() => setShowModal(true)}
                                >
                                    ปักหมุดผ่าน Google Map
                                </div>
                                <TextArea
                                    placeholder="กรุณาใส่ที่อยู่ของคุณ"
                                    rows={4}
                                    className="bg-primary-white"
                                    style={{
                                        boxShadow:
                                            '0px 4px 14px rgba(0, 0, 0, 0.1)'
                                    }}
                                    value={address}
                                />
                            </div>
                        )}
                        <div>
                            <div className="font-semibold text-xl mt-8">
                                วันที่ต้องการจอง
                            </div>
                            <Form.Item
                                name="date"
                                rules={[
                                    {
                                        required: true,
                                        message: 'กรุณาเลือกวันที่ต้องการจอง!'
                                    }
                                ]}
                            >
                                <DatePicker disabledDate={disabledDate} />
                            </Form.Item>
                            <div className="font-semibold text-xl mt-8">
                                เวลา
                            </div>
                            <Form.Item
                                name="time"
                                rules={[
                                    {
                                        required: true,
                                        message: 'กรุณาเลือกเวลาต้องการจอง!'
                                    }
                                ]}
                            >
                                <Radio.Group
                                    defaultValue="a"
                                    buttonStyle="solid"
                                >
                                    <Radio.Button value="10.00">
                                        10.00
                                    </Radio.Button>
                                    <Radio.Button value="13.00">
                                        13.00
                                    </Radio.Button>
                                    <Radio.Button value="15.00">
                                        15.00
                                    </Radio.Button>
                                    <Radio.Button value="17.00">
                                        17.00
                                    </Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <div className="flex items-center text-xl font-semibold mt-8">
                                ราคาทั้งหมด
                                <div
                                    className="text-3xl font-medium ml-4"
                                    style={{ color: '#66D111' }}
                                >
                                    {490} ฿
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4 justify-center mt-12">
                    <button
                        className="text-primary text-xl font-semibold px-12 py-3 border-2 border-primary rounded"
                        onClick={router.back}
                    >
                        กลับไปก่อนหน้า
                    </button>
                    <button
                        className="text-white text-xl font-semibold px-12 py-3 bg-primary rounded"
                        type="submit"
                    >
                        ชำระเงิน
                    </button>
                </div>
                <Modal
                    visible={showModal}
                    footer={null}
                    closable={true}
                    onCancel={() => setShowModal(false)}
                >
                    <div className="text-3xl text-center mb-8 font-medium">
                        ปักหมุดสถานที่ของคุณ
                    </div>
                    <Image className="rounded-lg" src={map} />
                    <div
                        className="text-white text-xl font-semibold px-12 py-3 bg-primary rounded text-center mt-16"
                        onClick={() => {
                            setAddress(
                                'ถนน พระรามที่ ๑ แขวง ปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330'
                            )
                            setShowModal(false)
                        }}
                    >
                        ยืนยันข้อมูล
                    </div>
                </Modal>
            </Form>
        </div>
    )
}

export default BookingForm
