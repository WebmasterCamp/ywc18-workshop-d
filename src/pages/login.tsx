import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import {
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '@services/firebase'
import { useEffect } from 'react'
import { useAuth } from '@stores/auth'

const googleAuth = new GoogleAuthProvider()

const LoginPage = () => {
    const [user] = useAuth()
    const router = useRouter()

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuth)
        } catch (e) {
            router.push('/')
        }
        router.push('/')
    }
    // signInWithEmailAndPassword(auth, email, password)
    // const onSubmit = async ({
    //     email,
    //     password
    // }: {
    //     email: string
    //     password: string
    // }) => {
    //     const res = await signInWithEmailAndPassword(auth, email, password)
    //     console.log(res)
    // }

    useEffect(() => {
        if (user.isInit && user.user) router.replace('/')
    }, [user])

    return (
        <>
            <div
                className="flex flex-col justify-center"
                style={{
                    height: 'calc(100vh - 164px)'
                }}
            >
                <h1 className="text-center mb-8 text-3xl font-semibold">
                    Login
                </h1>
                <div className="flex justify-center">
                    <div>
                        <button
                            className="w-full text-xl font-medium text-white py-4 px-12 bg-primary rounded"
                            onClick={signInWithGoogle}
                            type="button"
                        >
                            ลงชื่อเข้าใช้ด้วย Google
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
