
import { useState } from "react";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

const HeroSlider = ({ images }) => {
      const [imageIndex, setImageIndex] = useState(0);

      const nextImage = () => {
            setImageIndex((prevIndex) =>
                  prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
      };

      const prevImage = () => {
            setImageIndex((prevIndex) =>
                  prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
      };

      const value = images[imageIndex];
      const bgImg = {
            backgroundImage: `url(${value})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
      };

      return (
            <div className="image-slider overflow-hidden w-full mx-auto h-[80vh] flex items-center justify-between">
                  <button onClick={prevImage} className="text-white relative">
                        <div className="absolute mt-14 left-5 text-3xl">
                              <FaRegArrowAltCircleLeft />
                        </div>
                  </button>
                  <div className="w-full h-full" style={bgImg}>
                        <div className="hero-overlay bg-opacity-90"></div>
                        <div className="relative bottom-[60%] text-center text-white">
                              <h1 className=" text-5xl font-bold my-5">The Digital Event</h1>
                              <h3 className="text-xl font-semibold">In Eastern Europe</h3>
                              <button className="btn btn-secondary my-7">Visit Services</button>
                        </div>
                  </div>
                  <button onClick={nextImage} className="slider-button right text-white">
                        <div className="absolute mt-14 right-[10%] text-3xl">
                              <FaRegArrowAltCircleRight />
                        </div>
                  </button>
            </div>
      );
};

export default HeroSlider;
