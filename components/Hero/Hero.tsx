import Image from "next/image";
import React from "react";

// img import .....
import HeroImage from "../../assets/img/home.png";
const Hero = () => {
  return (
    <div className="hero-section-container">
      {/* image */}
      <div className="hero-img-container">
        <Image src={HeroImage} height={420} width={500} alt="Christmas" />
      </div>
      <div className="hero-content-container">
        {/* Texts */}
        <div className="hero-text-container">
          <p className={`hero-text theme-light-color`}>
            Merry Christmas and Happy New Year!
          </p>
          <p className={`hero-sub-heading theme-light-color-secondary`}>
            Christmas and a new year is about to begin, all good wishes and
            successes.
          </p>
        </div>
        {/* Get Started BTN */}
        <div className="cta-btn-container">
          <button className="cta-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
