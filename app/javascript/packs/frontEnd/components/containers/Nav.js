import React from 'react';
import * as S from '../presentational/Home.styles';
import Options from '../presentational/Options';
import Search from '../presentational/Search';

const Nav = () => {
  const topics = ['Games', 'Food', 'Schedule'];

  return (
    <S.Nav>
      <Options items={topics} />
      <Search />
    </S.Nav>
  );
};

export default Nav;
