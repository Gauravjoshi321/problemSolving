import { useState } from "react";

const images = [
  "https://images.pexels.com/photos/4397786/pexels-photo-4397786.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/4389673/pexels-photo-4389673.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/6710915/pexels-photo-6710915.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/4089658/pexels-photo-4089658.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/11218877/pexels-photo-11218877.jpeg?auto=compress&cs=tinysrgb&w=400"
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      return setCurrentIndex(images.length - 1);
    }
    else if (newIndex >= images.length) {
      return setCurrentIndex(0);
    }

    setCurrentIndex(newIndex);
  }


  return (
    <div className="carousel">

      <Button onClick={() => updateIndex(currentIndex - 1)} context={"<"} />
      <div className="carousel-container">
        {
          images.map((image) => {
            return <Image
              key={image}
              image={image}
              currentIndex={currentIndex}
            />
          })
        }
      </div>
      <Button onClick={() => updateIndex(currentIndex + 1)} context={">"} />

    </div>
  )
}

function Image({ image, currentIndex }) {
  return (
    <div className="slide-single" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
      <img src={image} alt={image} />
    </div>
  )
}

function Button({ onClick, context }) {
  return (
    <button onClick={onClick}>{context}</button>
  )
}