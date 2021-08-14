import { useEffect } from 'react'

import type { AppProps } from 'next/app'

import { Provider } from 'jotai'

import { DataProvider } from '@layouts'
import Navbar from '@components/modules/navbar'
import { Drawer } from 'antd'

import 'antd/dist/antd.css'
import '@styles/init.sass'
import 'tailwindcss/tailwind.css'

import { useMenu } from '@stores/menu'

const App = ({ Component, pageProps }: AppProps) => {
    const [showMenu, setShowMenu] = useMenu()
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
                <Drawer closable={true} onClose={onClose} visible={showMenu}>
                    <div>
                        <div className="text-base">เข้าร่วมโครงการกับเรา</div>
                        <div className="text-base">ติดต่อเรา</div>
                    </div>
                </Drawer>
            </DataProvider>
        </Provider>
    )
}

export default App
