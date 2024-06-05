import { useState } from "react";

export default function Rating() {

  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleClick(starNo) {
    setRating(starNo);
  }

  function handleHoverEnter(starNo) {
    setTempRating(starNo);
  }

  function handleHoverLeave() {
    setTempRating(0);
  }

  return (
    <div>
      {
        Array.from({ length: 5 }, (_, i) => {
          return (<Star
            key={i + 1}
            onClick={() => handleClick(i + 1)}
            onMouseEnter={() => handleHoverEnter(i + 1)}
            onMouseLeave={() => handleHoverLeave()}
            rating={(i + 1) <= rating ? "⭐" : "💗"}
            tempRating={(i + 1) <= tempRating ? "⭐" : "💗"}
          />)
        })
      }
    </div>
  )
}

export function Star({ onClick, onMouseEnter, onMouseLeave, rating, tempRating }) {

  return (
    <span
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {tempRating === "⭐" ? tempRating : rating}
    </span >
  )
}