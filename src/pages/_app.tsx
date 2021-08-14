import { useEffect } from 'react'

import type { AppProps } from 'next/app'

import { Provider } from 'jotai'

import { DataProvider } from '@layouts'

import '@styles/init.sass'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        document.addEventListener('touchstart', () => null, {
            passive: true
        })
    }, [])

    return (
        <Provider>
            <DataProvider>
                <Component {...pageProps} />
            </DataProvider>
        </Provider>
    )
}

export default App
