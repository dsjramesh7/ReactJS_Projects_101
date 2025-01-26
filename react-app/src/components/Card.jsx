import { useState } from "react";

const Card = ({ title }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setIsLiked(!isLiked)}>
        {isLiked ? "💜" : "🤍"}
      </button>
    </div>
  );
};

export default Card;
