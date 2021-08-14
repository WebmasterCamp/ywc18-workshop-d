import { useState, useReducer } from 'react'

import Link from 'next/link'

import { auth } from '@services/firebase'
import { signOut as firebaseSignOut } from 'firebase/auth'

import { useAuth } from '@stores/auth'
import { useMenu } from '@stores/menu'

import { Icon, SearchIcon, MoreIcon, MenuIcon } from '@assets'
import { SignIn } from './components/signin'

const Navbar = () => {
    const [userAtom] = useAuth()

    const [showPopup, toggle] = useReducer((v) => !v, false)

    const signOut = () => {
        firebaseSignOut(auth)
    }

    return (
        <>
            <nav className="sticky top-0 z-30 flex items-center flex-wrap bg-primary-white h-[80px] px-2 md:px-8 justify-between">
                <div className="flex items-center flex-wrap justify-between">
                    <Link href="/">
                        <a>
                            <Icon className="w-[57px] h-[34px] md:w-[114px] md:h-[68px]" />
                        </a>
                    </Link>
                </div>
                <div className="flex">
                    <div className="flex md:flex font-semibold text-xl mr-2 items-center justify-between">
                        <a
                            href="mailto:Napat.sau@gmail.com"
                            target="_blank"
                            className="text-base"
                        >
                            ติดต่อเรา
                        </a>
                    </div>
                    {userAtom?.user ? (
                        <div className="relative">
                            <button
                                className="flex items-center ml-2 md:ml-4"
                                onClick={toggle}
                            >
                                <img
                                    src={userAtom.user.photo}
                                    placeholder="blur"
                                    width={44}
                                    height={44}
                                    className="rounded-half"
                                />
                                <div className="ml-2 hidden md:flex items-center">
                                    <div className="text-xl font-semibold mr-2">
                                        {userAtom.user.name}
                                    </div>
                                    <MoreIcon />
                                </div>
                            </button>
                            {!!showPopup && (
                                <div className="absolute z-50 -bottom-[24px] flex flex-col bg-white w-full px-4 rounded shadow">
                                    <Link href="/order">
                                        <a
                                            onClick={toggle}
                                            className="text-lg font-semibold text-gray-700 w-full text-left py-4"
                                        >
                                            การจอง
                                        </a>
                                    </Link>
                                    <button
                                        className="text-lg font-semibold text-gray-700 w-full text-left py-4"
                                        onClick={signOut}
                                    >
                                        ลงชื่อออก
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link href="/login">
                            <a className="text-lg font-semibold">เข้าสู่ระบบ</a>
                        </Link>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar
