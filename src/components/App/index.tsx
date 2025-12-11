import Heading from "../common/Heading";
import Header from "../common/Header";
import FeatureCard from "../common/FeatureCard";

export default function Index() {
    return (
        <div className="relative bg-black min-h-screen w-full flex flex-col items-center overflow-x-hidden">
            <img
                src="/bg-img.jpeg"
                alt="Background"
                className="object-cover overflow-hidden w-full h-full opacity-80 fixed inset-0 z-0"
            />
            <Header />
            <Heading />
            <FeatureCard />
        </div>
    );
}
