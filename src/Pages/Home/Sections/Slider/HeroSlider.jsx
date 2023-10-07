import { useState } from "react";

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



      return (
            <div className="image-slider">
                  <button onClick={prevImage} className="text-white">
                        &lt;fdfdfdfdf
                  </button>
                  <img
                        src={images[imageIndex]}
                        alt={`Image ${imageIndex + 1}`}
                        className="w"
                  />
                  <button onClick={nextImage} className="slider-button right">
                        &gt; sdfdfd
                  </button>
            </div>
      );
};

export default HeroSlider;