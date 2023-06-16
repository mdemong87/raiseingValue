import Hero from "./componnent/Hero";
import ImageWrp from "./componnent/ImageWrp";
import Review from "./componnent/Review";
import Vedio from "./componnent/Vedio";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Vedio />
      <ImageWrp />
      <Review />
    </main>
  )
}
