import React, { useState } from "react";
import ReactCardFlip from "react-card-flip"; /* 1 */

import cardBack from "../images/CardBack.jpg";

const Card = ({ card }) => {
  const [flipped, changeFlip] = useState(false);

  /* 3 */
  const handleFlip = () => {
    changeFlip(!flipped);
  };

  return (
    <div className="col-3 my-1">
      {/* 2 */}
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <img
          className="mx-auto"
          src={cardBack}
          height="100%"
          width="100%"
          key="front"
          onClick={() => handleFlip()}
        />
        <img
          className="mx-auto"
          src={card.front}
          height="100%"
          width="100%"
          key="back"
          onClick={() => handleFlip()}
        />
      </ReactCardFlip>
    </div>
  );
};

export default Card;