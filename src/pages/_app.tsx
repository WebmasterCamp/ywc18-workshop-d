import { useEffect, useState } from 'react'

import type { AppProps } from 'next/app'

import { Provider } from 'jotai'

import { DataProvider, Navbar } from '@layouts'
import { Drawer } from 'antd'

import '@styles/init.sass'
import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.css'

const App = ({ Component, pageProps }: AppProps) => {
    const [showMenu, setShowMenu] = useState(false)
    // const showDrawer = () => {
    //     setShowMenu(true)
    // }
    const onClose = () => {
        setShowMenu(false)
    }
    useEffect(() => {
        document.addEventListener('touchstart', () => null, {
            passive: true
        })
    }, [])

    return (
        <Provider>
            <DataProvider>
                <Navbar />
                <Component {...pageProps} />
                {/* <Drawer closable={true} onClose={onClose} visible={showMenu} /> */}
            </DataProvider>
        </Provider>
    )
}

export default App
