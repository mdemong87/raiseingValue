import Image from "next/image";
import Link from "next/link";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineGlobal, AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn, CiMail } from "react-icons/ci";
import footerlogo from "../../public/logo-footer.png";
import Container from './Container';

export default function Footer() {
    return (
        <div className='bg-gray-950'>
            <Container>
                <div>
                    <div className='pt-6 pb-4 md:flex md:justify-between items-center md:border-b-2 border-gray-800'>
                        <div>
                            <h2 className='text-gray-300 text-2xl text-center md:text-left'>SIGN ME UP</h2>
                            <p className='text-lg text-center pt-2 pb-4 text-gray-500 md:text-left md:w-3/4'>BE THE FIRST TO KNOW ABOUT NEW PRODUCTS, EXCITING UPGRADES, AND PROMOTIONS.</p>
                        </div>
                        <div className="">
                            <input className='w-full text-center text-gray-700 rounded-lg focus:outline-none placeholder:text-gray-600 py-2 font-medium text-lg' type="email" placeholder='Enter Email' />
                            <button className='w-full rounded-lg focus:outline-none bg-red-600 text-gray-200 py-2 font-semibold text-lg mt-3 cursor-pointer'>Sign Up</button>
                        </div>
                    </div>
                    <div className="py-6 md:grid md:grid-cols-2 lg:grid-cols-4 border-b-2 border-gray-800">
                        <div className="py-3">
                            <Image className="w-3/4 mx-auto md:mx-0" src={footerlogo} height="500" width="500" alt="Foter-Logo" />
                        </div>
                        <div>
                            <ul>
                                <li className="my-2">
                                    <Link className="text-md font-medium text-gray-300" href={'/'}>
                                        Services</Link>
                                </li>
                                <li className="my-2">
                                    <Link className="text-md font-medium text-gray-300" href={'/'}>Commercial Design™</Link>
                                </li>
                                <li className="my-2">
                                    <Link className="text-md font-medium text-gray-300" href={'/'}>Concrete™</Link>
                                </li>
                                <li className="my-2">
                                    <Link className="text-md font-medium text-gray-300" href={'/'}>Concrete™</Link>
                                </li>
                                <li className="my-2">
                                    <Link className="text-md font-medium text-gray-300" href={'/'}>Electrical & Lighting™</Link>
                                </li>
                                <li className="my-2">
                                    <Link className="text-md font-medium text-gray-300" href={'/'}>Landcaping & Resort™</Link>
                                </li>
                                <li className="my-2">
                                    <Link className="text-md font-medium text-gray-300" href={'/'}>Roofing</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-6 lg:pt-0">
                            <ul>
                                <li className="my-2">
                                    <Link className="text-md font-medium text-gray-300" href={'/'}>Discounts</Link>
                                </li>
                                <li className="my-2">
                                    <Link className="text-md font-medium text-gray-300" href={'/'}>
                                        Senior</Link>
                                </li>
                                <li className="my-2">
                                    <Link className="text-md font-medium text-gray-300" href={'/'}>Military</Link>
                                </li>
                                <li className="my-2">
                                    <Link className="text-md font-medium text-gray-300" href={'/'}>Business</Link>
                                </li>
                                <li className="my-2">
                                    <Link className="text-md font-medium text-gray-300" href={'/'}>Healthcare</Link>
                                </li>
                                <li className="my-2">
                                    <Link className="text-md font-medium text-gray-300" href={'/'}>Celebrity</Link>
                                </li>
                                <li className="my-2">
                                    <Link className="text-md font-medium text-gray-300" href={'/'}>Government</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-6 lg:pt-0">
                            <ul>
                                <li className="my-2">
                                    <Link className="flex gap-3 items-center text-gray-300" href={'/'}>
                                        <AiOutlinePhone className="text-red-600 text-xl" />
                                        <span className="text-md font-medium">(818) 495-8712</span>
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link className="flex gap-3 items-center text-gray-300" href={'/'}>
                                        <CiMail className="text-red-600 text-xl" />
                                        <span className="text-md font-medium">info@raisemypropertyvalue.com</span>
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link className="flex gap-3 items-center text-gray-300" href={'/'}>
                                        <AiOutlineGlobal className="text-red-600 text-xl" />
                                        <span className="text-md font-medium">raisemypropertyvalue.com</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex gap-3 items-center text-gray-300" href={'/'}>
                                        <CiLocationOn className="text-red-600 text-xl" />
                                        <span className="text-md font-medium">24971 Avenue Stanford Santa Clarita,CA92355</span>
                                    </Link>
                                </li>
                                <li className="flex gap-4 mt-4">
                                    <Link className="flex gap-3 items-center py-1 justify-center px-1 bg-red-600 rounded-lg" href={'/'}>
                                        <AiFillFacebook className="text-gray-200 text-xl" />
                                    </Link>
                                    <Link className="flex gap-3 items-center py-1 justify-center px-1 bg-red-600 rounded-lg" href={'/'}>
                                        <AiFillInstagram className="text-gray-200 text-xl" />
                                    </Link>
                                    <Link className="flex gap-3 items-center py-1 justify-center px-1 bg-red-600 rounded-lg" href={'/'}>
                                        <AiFillYoutube className="text-gray-200 text-xl" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-gray-400 py-4 lg:flex lg:justify-between lg:items-center">
                        <div className="w-3/4 mx-auto text-center lg:text-left">
                            <p>Copyright 2023 - MedicalSaunas® All Rights Reserved.</p>
                        </div>
                        <div className="w-full pt-2 flex justify-center lg:justify-end">
                            <Link className="px-2 border-r-2 text-xs border-red-600" href={`#`}>Privacy Policy</Link>
                            <Link className="px-2 border-r-2 text-xs border-red-600" href={`#`}>Terms & Conditions</Link>
                            <Link className="px-2 border-r-2 text-xs border-red-600" href={`#`}>Financing</Link>
                            <Link className="px-2 text-xs" href={`#`}>Sitemap</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
