import CtaButton from "../components/CtaButton";
import HeroTitle from "../components/HeroTitle";
import SymptonsCard from "../components/SymptonsCard";
import Video from "../components/Video";


const Home = () => {
    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="w-4/5  bg-white p-8 rounded-lg shadow-lg my-32">
                <div className="flex flex-col md:flex-row my-4">
                    <div className="flex-wrap mb-4 md:mb-0 md:mr-4">
                        <HeroTitle />
                    </div>
                    <div className="w-full md:ml-8">
                        <Video />
                    </div>
                </div>
                <div className="mt-8 text-center md:text-left text-xl text-teal-600">Is this for you?</div>
                <div className="flex mt-16 justify-between items-center">
                    <SymptonsCard
                        description="Hard to feel calm or sleep because of stress"
                        icon="dizzy"
                    />
                    <SymptonsCard
                        description="If you have palpitations and breathing trouble"
                        icon="heartbeat"
                    />
                    <SymptonsCard
                        description="You have been advised by doctors to avoid physical activity"
                        icon="ban"
                    />
                </div>
                <div className="flex flex-col space-y-4 justify-evenly md:flex-row my-24">
                    <CtaButton
                        buttonText="Book trial @ 99"
                        type="trial"
                    />
                    <CtaButton
                        buttonText="I want to buy"
                        type="buy"
                    />
                    <CtaButton
                        buttonText="I have a question"
                        type="faq"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
