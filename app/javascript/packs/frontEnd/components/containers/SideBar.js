import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Link } from 'react-router-dom';
import uid from 'uid';
import * as S from '../presentational/Pages.styles';
import dragon from '../../images/dragon.png';

const SideBar = ({ url, topics, id }) => (
  <S.SideBar>
    <Link to="/">
      <img src={dragon} alt="logo" />
    </Link>
    <S.SideNav>
      {topics.map(topic => (
        <S.SideTopic key={uid()} active={topic === id}>
          <Link to={`${url}/${topic}`}>{topic}</Link>
        </S.SideTopic>
      ))}
    </S.SideNav>
  </S.SideBar>
);

SideBar.defaultProps = {
  id: 'none',
};

SideBar.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string,
  topics: PropTypes.arrayOf(string).isRequired,
};

export default SideBar;
