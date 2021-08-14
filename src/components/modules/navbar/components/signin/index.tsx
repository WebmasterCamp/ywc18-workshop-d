import { useRouter } from 'next/router'

import { auth } from '@services/firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const googleAuth = new GoogleAuthProvider()

export const SignIn = ({ toggle = () => {} }) => {
    const router = useRouter()

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuth)
        } catch (e) {
            router.push('/')
        }
        router.push('/')
    }

    return (
        <div className="fixed z-40 top-0 left-0 w-full h-screen">
            <div
                className="absolute w-full h-screen"
                style={{
                    backgroundColor: 'rgba(0,0,0,.25)'
                }}
                onClick={toggle}
            />
            <form className="flex justify-center items-center px-4 h-screen">
                <section className="z-50 flex flex-col items-center w-full max-w-[480px] py-6 px-8 rounded bg-white shadow">
                    <h1 className="text-2xl font-semibold mb-6">เข้าสู่ระบบ</h1>

                    <button
                        className="w-full text-xl font-medium text-white py-4 bg-primary rounded"
                        onClick={signInWithGoogle}
                        type="button"
                    >
                        ลงชื่อเข้าใช้ด้วย Google
                    </button>
                </section>
            </form>
        </div>
    )
}

export default SignIn
