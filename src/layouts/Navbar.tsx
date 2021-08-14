import { Icon, SearchIcon, MoreIcon } from '@assets'
import Image from 'next/image'
import nail1 from '@public/nail/1.png'

const Navbar = () => {
    return (
        <nav className="flex items-center flex-wrap bg-primary-white md:h-[100px] h-[80px] px-2 md:px-8 justify-between">
            <div className="flex items-center flex-wrap justify-between">
                <Icon className="w-[57px] h-[34px] md:w-[114px] md:h-[68px]" />
                <div className="bg-grey-1 flex items-center lg:ml-16 md:ml-8 rounded-4xl md:px-5 py-1 ml-3 px-1 md:w-[300px] w-[175px] lg:w-[300px] sm:w-[250px] xl:w-[450px]">
                    <SearchIcon className="w-[20px] h-[20px] md:w-[35px] md:h-[35px]" />
                    <input
                        placeholder="ค้นหา"
                        className="bg-grey-1 ml-4 w-full h-full rounded-4xl"
                    />
                </div>
            </div>
            <div className="lg:flex items-center justify-between hidden lg:w-[250px] xl:w-[300px]">
                <div className="text-base">เข้าร่วมโครงการกับเรา</div>
                <div className="text-base">ติดต่อเรา</div>
            </div>
            <div className="flex items-center ml-2 md:ml-4">
                <Image
                    src={nail1}
                    placeholder="blur"
                    width={44}
                    height={44}
                    className="rounded-half"
                />
                <div className="ml-2 hidden md:flex items-center">
                    <div className="mr-2">username</div>
                    <MoreIcon />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
