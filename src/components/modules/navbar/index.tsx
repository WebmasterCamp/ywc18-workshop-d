import { useState, useReducer } from 'react'

import Link from 'next/link'

import { auth } from '@services/firebase'
import { signOut as firebaseSignOut } from 'firebase/auth'

import { useAuth } from '@stores/auth'
import { useMenu } from '@stores/menu'

import { Icon, SearchIcon, MoreIcon, MenuIcon } from '@assets'
import { SignIn } from './components/signin'

const Navbar = () => {
    const [searchText, setSearchText] = useState('')
    const [userAtom] = useAuth()
    const [, setShowMenu] = useMenu()

    const [showPopup, toggle] = useReducer((v) => !v, false)

    const signOut = () => {
        firebaseSignOut(auth)
    }

    return (
        <>
            <nav className="sticky top-0 z-30 flex items-center flex-wrap bg-primary-white md:h-[100px] h-[80px] px-2 md:px-8 justify-between">
                <div className="flex items-center flex-wrap justify-between">
                    <Link href="/">
                        <a>
                            <Icon className="w-[57px] h-[34px] md:w-[114px] md:h-[68px]" />
                        </a>
                    </Link>
                    <div className="bg-grey-1 flex items-center lg:ml-16 md:ml-8 rounded-4xl md:px-5 py-1 ml-3 px-1 md:w-[300px] w-[175px] lg:w-[300px] sm:w-[250px] xl:w-[450px]">
                        <SearchIcon className="w-[20px] h-[20px] md:w-[35px] md:h-[35px]" />
                        <input
                            placeholder="ค้นหา"
                            className="bg-grey-1 ml-4 w-full h-full rounded-4xl"
                            onChange={(val) => setSearchText(val.target.value)}
                            value={searchText}
                        />
                    </div>
                </div>
                <div className="lg:flex items-center justify-between hidden lg:w-[250px] xl:w-[300px]">
                    <div className="text-base">เข้าร่วมโครงการกับเรา</div>
                    <div className="text-base">ติดต่อเรา</div>
                </div>
                <div className="hidden md:block">
                    {userAtom?.user ? (
                        <div className="relative">
                            <button
                                className="flex items-center ml-2 md:ml-4"
                                onClick={toggle}
                            >
                                <img
                                    src={userAtom.user.photo}
                                    placeholder="blur"
                                    width={48}
                                    height={48}
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
                <div
                    className="block md:hidden"
                    onClick={() => setShowMenu(true)}
                >
                    <MenuIcon />
                </div>
            </nav>
        </>
    )
}

export default Navbar
