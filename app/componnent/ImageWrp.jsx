import home1l from "../../public/home1l.png";
import home1r from "../../public/home1r.png";
import home2l from "../../public/home2l.png";
import home2r from "../../public/home2r.png";
import home3l from "../../public/home3l.png";
import home3r from "../../public/home3r.png";
import home4l from "../../public/home4l.png";
import home4r from "../../public/home4r.png";
import home5l from "../../public/home5l.png";
import home5r from "../../public/home5r.png";
import Container from "./Container";
import SingleBanner from "./SingleBanner";

export default function ImageWrp() {
    return (
        <div>
            <Container>
                <SingleBanner rightprice={`1.5 MILLION`} leftprice={`699,900`} header="Concrete & Hardscap" dis="The Journey to Perfection: Transforming a Worn Driveway" leftimg={home1l} rightimg={home1r} />


                <SingleBanner rightprice={`1.5 MILLION`} leftprice={`699,900`} header="Designs & Blueprint" dis="Building Dreams From Blueprint to Beautiful Home" leftimg={home2l} rightimg={home2r} />


                <SingleBanner rightprice={`1.5 MILLION`} leftprice={`699,900`} header="Electrical & Lighting" dis="A Beacon of Beauty Showcasing the Transformed Ambiance of a Well-Lit Home" leftimg={home3l} rightimg={home3r} />


                <SingleBanner rightprice={`1.5 MILLION`} leftprice={`699,900`} header="Landscape & Resort Builds" dis="Natural Harmony: Enhancing a House's Appeal with Striking Landscaping" leftimg={home4l} rightimg={home4r} />


                <SingleBanner rightprice={`1.5 MILLION`} leftprice={`699,900`} header="Roofing" dis="Roofing Resilience: Transforming a House from Fractured to Fortified" leftimg={home5l} rightimg={home5r} />
            </Container>
        </div>
    )
}
