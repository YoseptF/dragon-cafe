import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Link } from 'react-router-dom';
import uid from 'uid';
import * as S from '../presentational/Pages.styles';

const SideBar = ({ url, topics }) => (
  <S.SideBar>
    {topics.map(topic => (
      <li key={uid()}>
        <Link to={`${url}/${topic}`}>{topic}</Link>
      </li>
    ))}
  </S.SideBar>
);

SideBar.propTypes = {
  url: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(string).isRequired,
};

export default SideBar;
