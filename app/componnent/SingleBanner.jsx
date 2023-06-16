import Image from "next/image";
import Link from "next/link";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export default function SingleBanner({ leftimg, rightimg, header, dis, pricetitle, rightprice, leftprice }) {
    return (
        <div className="bg-gray-800 rounded-lg px-3 py-5 my-6">
            <div className="text-center md:flex justify-between md:items-center">
                <div className="w-full pb-5 md:text-left">
                    <h1 className="text-2xl text-gray-200 font-semibold md:text-3xl">{header}</h1>
                    <p className="text-lg text-gray-300">{dis}</p>
                </div>
                <Link href={`#`} className=" bg-red-600 text-xl text-gray-200 px-2 rounded-lg py-3 md:font-bold">
                    Learn More
                </Link>
            </div>
            <div className="py-2 rounded-lg-700 mt-5 flex justify-between items-center rounded-lg mm">
                <div className="w-full homeImageWrp">
                    <Image className="homeImage border border-red-600 rounded-l-lg" src={leftimg} height="400" width="400" alt="home-image" />
                    <h2 className="afternabefour bg-red-600 py-1 px-1 text-white rounded-lg left">Before</h2>
                    <div className="bg-red-600 py-2 text-center rounded-es-lg flex-col md:flex">
                        <h1 className="text-lg font-semibold text-gray-300">BEFORE PROPERTY VALUE:</h1>
                        <span className="text-2xl font-semibold text-gray-200">${leftprice}</span>
                    </div>
                </div>
                <div className=" controller w-full translate-x2/4">
                    <div className="bg-red-600 w-fit mx-auto cursor-move flex gap-2 rounded-full px-1 py-1">
                        <AiFillCaretLeft />
                        <AiFillCaretRight />
                    </div>
                </div>
                <div className="w-full homeImageWrp">
                    <Image className="homeImage border border-red-600 rounded-r-lg" src={rightimg} height="400" width="400" alt="" />
                    <h2 className="afternabefour bg-red-600 py-1 px-1 text-white rounded-lg right">After</h2>
                    <div className="bg-red-600 py-2 text-center rounded-ee-lg flex-col md:flex">
                        <h1 className="text-lg font-semibold text-gray-300">BEFORE PROPERTY VALUE:</h1>
                        <span className="text-2xl font-semibold text-gray-200">${rightprice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
