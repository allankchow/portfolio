import LottieAnimation from "../components/LottieAnimation";
import animationData from "../assets/animations/blob.json";

const HomePage = () => {
    return (
        <main className="home-container">
            <div className="center-content">
                <h1>ALLAN</h1>
                <h1>CHOW</h1>
                <h1>.DEV</h1>
                <p>Full Stack Developer & Mechatronic Systems Engineer</p>
                <div className="animation">
                    <LottieAnimation
                        animationData={animationData}
                        loop={true}
                        speed={0.5}
                    />
                </div>
            </div>
        </main>
    );
};

export default HomePage;
