import { useState } from "react";

//Helps us to specify the type of the variable
import PropTypes from "prop-types";
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

function Star({ onClick, full, onHoverIn, onHoverOut, starStyle }) {
  return (
    <span
      onClick={onClick}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      style={{ color: starStyle.color }}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke-width="2"
          stroke="currentColor"
          width={starStyle.fontSize}
          height={starStyle.fontSize}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          width={starStyle.fontSize}
          height={starStyle.fontSize}
          stroke-width="2"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      )}
    </span>
  );
}

//Here we are defining types to our props to make sure they are passed with only there types
StarRating.propTypes = {
  maxRating: PropTypes.number.isRequired,
};
function StarRating({ maxRating = 5, color = "gold", size = 48 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const textStyle = {
    color,
    fontSize: `${size / 1.5}px`,
  };
  const starStyle = {
    color,
    fontSize: `${size}px`,
  };
  return (
    <div style={containerStyle}>
      <div>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            full={tempRating >= i + 1 || rating >= i + 1}
            onClick={() => setRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            starStyle={starStyle}
            key={i}
          ></Star>
        ))}
      </div>
      <div style={textStyle}>{tempRating || rating}</div>
    </div>
  );
}

export default StarRating;
