import React, { useState, useEffect, useRef } from 'react';
import uid from 'uid';
import * as S from '../presentational/Slider.styles';
import Slide from '../presentational/Slide';
import Dots from '../presentational/Dots';
import dragon from '../../images/dragon.png';

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const [loop, setLoop] = useState(null);
  const slideRef = useRef(slide);
  slideRef.current = slide;
  const slidersFromApi = [
    {
      image: dragon,
      text: 'the new vespa trident',
    },
    {
      image: '',
      text: 'new Slide',
    },
    {
      image: 'https://via.placeholder.com/100/f9f',
      text: 'extra slide',
    },
    {
      image: '',
      text: 'fourth slide',
    },
  ];

  const loopSliders = () => {
    const slideLoop = setInterval(() => {
      const newSlide = slideRef.current + 2 > slidersFromApi.length ? 0 : slideRef.current + 1;
      setSlide(newSlide);
    }, 9000);

    setLoop(slideLoop);
  };

  const dotClick = newSlide => {
    setSlide(newSlide);
    slideRef.current = slide;
    clearInterval(loop);
    loopSliders();
  };

  useEffect(() => {
    loopSliders();
  }, []);

  return (
    <S.Slider>
      <S.Window>
        <S.List slide={slide}>
          {slidersFromApi.map((slide, index) => (
            <Slide
              key={uid()}
              image={slide.image}
              slidenum={index}
              text={slide.text}
            />
          ))}
        </S.List>
      </S.Window>
      <Dots current={slide} dotsnum={slidersFromApi} handleClick={dotClick} />
    </S.Slider>
  );
};

export default Slider;
