import Image from "next/image"
import { AiFillStar } from "react-icons/ai"
import profileImage from "../../public/emon.jpeg"

export default function SingleReview() {
    return (
        <div className="bg-gray-100 w-full rounded-lg py-3 px-3 mt-7 mb-5">
            <div>
                <Image className="h-16 mx-auto mt-4 w-16 rounded-full" src={profileImage} height={`500`} width={`500`} alt="Profile-Image" />
                <p className="text-gray-700 text-center py-2 text-lg font-semibold">
                    @Borbara Fox - 13m ago
                </p>
                <div className="flex gap-2 justify-center my-1">
                    <AiFillStar className="bg-yellow-600 text-3xl" />
                    <AiFillStar className="bg-yellow-600 text-3xl" />
                    <AiFillStar className="bg-yellow-600 text-3xl" />
                    <AiFillStar className="bg-yellow-600 text-3xl" />
                    <AiFillStar className="bg-yellow-600 text-3xl" />
                </div>
                <p className="text-gray-700 py-4 px-5 font-medium text-lg text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum temporibus quo ex porro repellendus veniam iure?Lorem ipsum dolor, sit amet consectetur adipisicing.
                </p>
            </div>
        </div>
    )
}
