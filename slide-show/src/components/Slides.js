import React, { useState } from "react";

function Slides({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === slides.length - 1;

  const onRestartSliderButtonClick = () => setCurrentSlideIndex(0);

  const onNextSlideButtonClick = () => {
    if (!isLastSlide) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const onPreviousSlideButtonClick = () => {
    if (!isFirstSlide) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={onRestartSliderButtonClick} disabled={isFirstSlide}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" onClick={onPreviousSlideButtonClick} disabled={isFirstSlide}>
          Prev
        </button>
        <button data-testid="button-next" className="small" onClick={onNextSlideButtonClick} disabled={isLastSlide}>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{ slides[currentSlideIndex].title }</h1>
        <p data-testid="text">{  slides[currentSlideIndex].text }</p>
      </div>
    </div>
  );
}

export default Slides;