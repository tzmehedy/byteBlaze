import Hero from "../Components/Hero";
import wave from "../assets/wave.svg";

const Home = () => {
    return (
      <div>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-135px)] relative">
          <Hero></Hero>
          <img className="w-full absolute bottom-0" src={wave} alt="" />
        </div>
      </div>
    );
};

export default Home;