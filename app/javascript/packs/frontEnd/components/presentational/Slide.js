import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './Slider.styles';

const Slide = ({ image, slidenum, text }) => (
  <S.Slide image={image} data-slidenum={slidenum}>
    <h1>{text}</h1>
    <Link to="/" />
  </S.Slide>
);

Slide.defaultProps = {
  image: '',
  text: '',
};

Slide.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  slidenum: PropTypes.number.isRequired,
};

export default Slide;
