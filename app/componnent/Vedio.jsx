import Image from "next/image";
import vedioImage from "../../public/vedio.png";
import Container from "./Container";

export default function Vedio() {
    return (
        <div className="bg-black">
            <Container>
                <h1 className="text-2xl text-gray-200 pt-4 text-center font-semibold md:text-3xl">Recent Construction Projects</h1>
                <div className="pb-5 pt-8">
                    <Image className="ring-2 rounded-lg ring-red-300 w-full" src={vedioImage} height={`500`} width={`500`} alt={"vedio-image"} />
                </div>
            </Container>
        </div>
    )
}
