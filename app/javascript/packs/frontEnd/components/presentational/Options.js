import React, { useState } from 'react';
import uid from 'uid';
import PropTypes, { string } from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './Home.styles';

const Options = ({ items }) => {
  const [active, setActive] = useState(false);

  return (
    <S.Hamburguer active={active}>
      <i
        aria-label="menu"
        className="fas fa-bars"
        role="menu"
        onClick={() => setActive(!active)}
        onKeyUp={() => null}
        tabIndex={0}
      />
      <ul>
        {items.map(item => (
          <li key={uid()}>
            <Link to={`/pages/${item}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </S.Hamburguer>
  );
};

Options.propTypes = {
  items: PropTypes.arrayOf(string).isRequired,
};

export default Options;
