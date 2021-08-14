import { FunctionComponent, useReducer } from 'react'

import { Tab, Filter } from './components'

const DiscoverLayout: FunctionComponent = ({ children }) => {
    let [isOpen, toggle] = useReducer((v) => !v, false)

    return (
        <>
            <aside className="sticky top-0 z-20 flex flex-row justify-between items-center bg-gray-100 shadow-md mb-6 px-4 lg:px-32">
                <section className="flex flex-row gap-8 items-center pt-6">
                    <Tab title="For You" href="/" />
                    <Tab title="ทำเล็บ" href="/discover/nail" />
                    <Tab title="ตัดผม" href="/discover/hair" />
                </section>
                <div className="relative">
                    <button
                        className="flex flex-row justify-center items-center text-gray-800 text-xl font-semibold px-6 py-2 rounded hover:bg-gray-200 focus:bg-gray-200 transition-colors"
                        type="button"
                        onClick={toggle}
                    >
                        กรอง
                    </button>
                    {!!isOpen && <Filter />}
                </div>
            </aside>
            {children}
        </>
    )
}

export default DiscoverLayout