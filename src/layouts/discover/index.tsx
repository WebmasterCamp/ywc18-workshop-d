import { FunctionComponent, useReducer } from 'react'

import Image from 'next/image'

import { Tab, Filter } from './components'

import banner from '@public/mock/banner.png'

const DiscoverLayout: FunctionComponent = ({ children }) => {
    let [isOpen, toggle] = useReducer((v) => !v, false)

    return (
        <>
            <div className="max-w-[1280px] w-full mx-auto my-8">
                <Image src={banner} className="rounded-xl" quality={100} />
            </div>
            {children}
        </>
    )
}

export default DiscoverLayout
