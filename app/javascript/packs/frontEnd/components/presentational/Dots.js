/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import uid from 'uid';
import PropTypes from 'prop-types';
import * as S from './Slider.styles';

const Dots = ({ dotsnum, current, handleClick }) => {
  const dotClick = e => {
    handleClick(parseInt(e.target.dataset.value, 10));
  };

  return (
    <S.Dots>
      {
        Array(dotsnum).fill().map((dot, index) => (
          <S.Dot
            data-dot={dot}
            key={uid()}
            onClick={dotClick}
          >
            <i
              data-value={index}
              className={current === index ? 'fas fa-circle' : 'far fa-circle'}
            />
          </S.Dot>
        ))
    }
    </S.Dots>
  );
};

Dots.propTypes = {
  dotsnum: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Dots;
