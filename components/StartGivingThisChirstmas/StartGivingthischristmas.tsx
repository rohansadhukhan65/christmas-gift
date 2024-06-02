import React from "react";
import { Ornamnets } from "../Icons/AllIcons";
import Giving from "../Icons/Giving";
import Image from "next/image";

const StartGivingthischristmas = () => {
  return (
    <div className="StartGivingthischristmas">
      <h2 className="heading">Start Giving This Christmas</h2>
      <div className="items-container">
        <div className="item">
          <Image src={`/icons/giving.png`} height={150} width={150} alt="" />

          <p className="item-heading">Surprise gifts</p>
          <p className="item-sub-heading">They are the best gifts there is.</p>
        </div>
        <div className="item">
          <Image src={`/icons/bells.png`} height={150} width={150} alt="" />
          <p className="item-heading">Ornaments</p>
          <p className="item-sub-heading">Give a moment to decorate.</p>
        </div>
        <div className="item">
          <Image src={`/icons/lotsoglove.png`} height={150} width={150} alt="icon" />
          <p className="item-heading">Lots of love</p>
          <p className="item-sub-heading">
            Give away feelings that last forever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartGivingthischristmas;
