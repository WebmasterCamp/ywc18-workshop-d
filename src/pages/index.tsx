import { MasonryLayout } from '@layouts'

import { useInfiniteScrollObserver } from '@services/hooks'
import { useAuth } from '@stores/auth'

const Landing = () => {
    let [user] = useAuth()

    console.log(user)

    useInfiniteScrollObserver(
        () =>
            new Promise<void>((resolve) => {
                setTimeout(() => {
                    resolve()
                }, 5000)
            })
    )

    return (
        <MasonryLayout
            data={[
                'hi',
                'there',
                'friend',
                'cool',
                'story',
                'bro',
                'hello',
                'world',
                'node',
                'module',
                'is',
                'large'
            ]}
        />
    )
}

export default Landing
