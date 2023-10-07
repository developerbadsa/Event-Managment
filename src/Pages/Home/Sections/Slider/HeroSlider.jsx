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
    background: `url(${value})`, // Corrected background image syntax
    backgroundSize: "cover", // Optional: Adjust background image properties
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="image-slider w-[80%] mx-auto h-screen flex items-center justify-between">
      <button onClick={prevImage} className="text-white">
        <FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft>
      </button>
      <div className="p-10" style={bgImg}>
        {/* Content goes here */}
      </div>
      <button onClick={nextImage} className="slider-button right text-white">
        <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
      </button>
    </div>
  );
};

export default HeroSlider;
