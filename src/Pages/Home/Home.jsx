import AboutUs from "../AboutUs/AboutUs";
import Navbar from "../../Components/Navbar/Navbar";
import Conference from "./Sections/Conference/Conference";
import Services from "./Sections/Services/Services";
import HeroSlider from "./Sections/Slider/HeroSlider";
import Aos from "aos";
import React from "react";
import 'aos/dist/aos.css';


const Home = () => {

      React.useEffect(() => {
            Aos.init();
      }, []);

      const images = [
            "https://o2oevents.com/wp-content/uploads/2020/06/shutterstock_1723357468-1024x576.png",
            "https://met.consulting/wp-content/uploads/2020/12/digital-event-2.jpg"
      ]

      return (
            < div className="" >
                  <div className="max-w-7xl mx-auto">
                        <div data-aos="fade-up">
                              <HeroSlider images={images}></HeroSlider>
                        </div>
                        <br />
                        <div data-aos="flip-left" data-aos-delay="100" data-aos-anchor-placement="top-center">
                              <AboutUs></AboutUs>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1000">
                              <Services ></Services>
                        </div>
                        <div data-aos="flip-right" data-aos-delay="500" data-aos-offset="1000">
                              <Conference  ></Conference>
                        </div>
                  </div>


            </div >
      );
};

export default Home;