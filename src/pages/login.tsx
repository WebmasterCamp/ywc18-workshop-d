import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import {
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '@services/firebase'
// import { useAuth } from '@stores/auth'

const googleAuth = new GoogleAuthProvider()

const LoginPage = () => {
    const {
        // register,
        handleSubmit
        // formState: { errors }
    } = useForm()
    // const [userAtom] = useAuth()
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
    const onSubmit = async ({
        email,
        password
    }: {
        email: string
        password: string
    }) => {
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log(res)
    }

    return (
        <>
            <div>
                <h1 className="text-center font-serif">Login</h1>
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-16">
                        {/* <input
                        type="text"
                        placeholder="email"
                        {...register('email', { required: true })}
                        className="block"
                    />
                    {errors.email && <span>email is required</span>}
                    <input
                        type="password"
                        placeholder="password"
                        {...register('password', {
                            required: true,
                            maxLength: 128
                        })}
                        className="block"
                    />
                    {errors.password && <span>password is required</span>} */}

                        <button
                            type="submit"
                            className="block w-full bg-primary login-button"
                        >
                            Submit
                        </button>
                        <button
                            className="block w-full"
                            onClick={signInWithGoogle}
                            type="button"
                        >
                            Sign in with google
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage
