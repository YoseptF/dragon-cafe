import React, { useState } from 'react';
import * as S from './Home.styles';

const Search = () => {
  const [active, setActive] = useState(false);

  return (
    <S.Search active={active}>
      <input type="text" placeholder="Search..." />
      <i
        aria-label="menu"
        role="menu"
        className="fas fa-search"
        onClick={() => setActive(!active)}
        onKeyDown={() => ''}
        tabIndex={0}
      />
    </S.Search>
  );
};

export default Search;
