import Navbar from "../../Components/Navbar/Navbar";
import Services from "./Sections/Services/Services";
import HeroSlider from "./Sections/Slider/HeroSlider";


const Home = () => {

      const images = [
            "https://i.ibb.co/Fgq2SV9/download.jpg",
            "https://i.ibb.co/99vkP4n/328139466-3360714944151581-3934515630612801950-n.jpg"
      ]

      return (
            <div className="">
                  <div className="max-w-7xl mx-auto">
                        <Navbar></Navbar>
                        <HeroSlider images={images}></HeroSlider>
                        <br />
                        <Services></Services>
                  </div>

                
            </div>
      );
};

export default Home;