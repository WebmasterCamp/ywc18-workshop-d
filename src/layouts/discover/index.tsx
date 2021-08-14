import { FunctionComponent, useReducer } from 'react'

import Image from 'next/image'

import { Tab, Filter } from './components'

const DiscoverLayout: FunctionComponent = ({ children }) => {
    let [isOpen, toggle] = useReducer((v) => !v, false)

    return (
        <>
            <aside className="sticky top-[80px] z-20 flex flex-row justify-between items-center bg-gray-100 shadow-md mb-6 px-4 lg:px-32">
                <section className="flex flex-row gap-8 items-center pt-6">
                    <Tab title="For You" href="/" />
                    <Tab title="ทำเล็บ" href="/discover/nail" />
                    <Tab title="ตัดผมชาย" href="/discover/male-hair" />
                    <Tab title="ทำผมหญิง" href="/discover/female-hair" />
                </section>
            </aside>
            <div className="max-w-[1280px] w-full mx-auto px-4 my-8">
                <img
                    className="rounded w-full"
                    src="/mock/banner.svg"
                    alt="Banner"
                />
            </div>
            {children}
        </>
    )
}

export default DiscoverLayout
