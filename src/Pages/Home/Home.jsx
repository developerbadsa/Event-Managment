import Navbar from "../../Components/Navbar/Navbar";
import Services from "./Sections/Services/Services";
import HeroSlider from "./Sections/Slider/HeroSlider";


const Home = () => {

      const images = [
            "https://o2oevents.com/wp-content/uploads/2020/06/shutterstock_1723357468-1024x576.png",
            "https://met.consulting/wp-content/uploads/2020/12/digital-event-2.jpg"
      ]

      return (
            <div className="">
                  <div className="max-w-7xl mx-auto">
                        <HeroSlider images={images}></HeroSlider>
                        <br />
                        <Services></Services>
                  </div>

                
            </div>
      );
};

export default Home;