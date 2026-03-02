import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css'

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex)
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex)
  };
  const handleMouseLeave = () => {
    setHover(rating)
  };

  useEffect(()=>{
    console.log(Array(noOfStars))
  },[])

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((u, index) => {
        index += 1;
         console.log(Array(noOfStars))
        return (
          <FaStar
            key={index}
            className={index <= (hover ||rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
