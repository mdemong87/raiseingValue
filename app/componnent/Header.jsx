import Image from 'next/image'
import { AiOutlineLogin, AiOutlinePhone } from "react-icons/ai"
import { FaBars } from "react-icons/fa"
import logo from "../../public/logo.png"
import Container from './Container'

export default function Header() {
    return (
        <div className='bg-gray-200'>
            <Container>
                <div className='flex justify-between items-center py-1'>
                    <div>
                        <Image className='logo w-4/4' src={logo} width={`300`} height={`300`} alt={"logo"} />
                    </div>
                    <nav>
                        <div className='text-gray-100 flex gap-2 items-center md:gap-4'>
                            <div className='hidden md:block'>
                                <ul className='flex gap-5 items-center text-gray-900'>
                                    <li className='font-bold text-xl cursor-pointer hover:text-red-600 transition ease-in delay-75'>Home</li>
                                    <li className='font-bold text-xl cursor-pointer hover:text-red-600 transition ease-in delay-75'>Servises</li>
                                    <li className='font-bold text-xl cursor-pointer hover:text-red-600 transition ease-in delay-75'>About</li>
                                    <li className='font-bold text-xl cursor-pointer hover:text-red-600 transition ease-in delay-75'>Contact</li>
                                </ul>
                            </div>
                            <div className='bg-red-600 rounded-lg h-10 px-2 py-2 cursor-pointer flex items-center gap-2'>
                                <AiOutlinePhone className='text-xl' />
                                <h2 className='text-md hidden lg:block'>(818) 495-8712</h2>
                            </div>
                            <div className='bg-red-600 rounded-lg h-10 px-2 py-2 cursor-pointer flex items-center gap-2'>
                                <AiOutlineLogin className='text-xl' />
                                <h2 className='text-lg hidden md:block'>Login</h2>
                            </div>
                            <FaBars className='bg-red-600 rotate-180 rounded-lg h-10 w-10 px-2 py-2 cursor-pointer md:hidden' />
                        </div>
                    </nav>
                </div>
            </Container>
        </div>
    )
}
