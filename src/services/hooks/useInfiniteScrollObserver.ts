/* eslint-disable no-use-before-define */
import { useEffect, useRef } from 'react'

const useInfiniteScrollObserver = (callback: Function, toStop = false) => {
    let previousObserver = useRef<() => Promise<void>>()
    let isLoading = useRef(false)

    useEffect(() => {
        watchPageEnd()

        return () => {
            stopObserver()
        }
    }, [callback])

    let watchPageEnd = () => {
        stopObserver()

        requestAnimationFrame(() => {
            window.addEventListener('scroll', pageEndObserver, {
                passive: true
            })
        })
    }

    let stopObserver = () => {
        if (previousObserver.current)
            window.removeEventListener('scroll', previousObserver.current)

        previousObserver.current = pageEndObserver
    }

    let pageEndObserver = async () => {
        if (toStop) return

        stopObserver()

        let page = document.documentElement.scrollHeight
        let current = document.documentElement.scrollTop
        let viewport = window.innerHeight

        let nearEnd = page - viewport * 2

        if (current < nearEnd) return watchPageEnd()

        isLoading.current = true
        await callback()
        isLoading.current = false

        watchPageEnd()
    }
}

export default useInfiniteScrollObserver
