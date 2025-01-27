import { useEffect, useState } from "react";

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${isLiked}`);
  }, [isLiked]);
  return (
    <div onClick={() => setCount(count + 1)}>
      <h1>{title}</h1>
      <h3>{count}</h3>
      <button onClick={() => setIsLiked(!isLiked)}>
        {isLiked ? "💜" : "🤍"}
      </button>
    </div>
  );
};

export default Card;
