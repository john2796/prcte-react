import React from 'react';

import styled from 'styled-components';

const MoviesWrapper = styled.div`
  background: lightblue;
  height: 500px;
`;

const movies = ({ items }) => {
  const movieItem = items.map(item => <li>{item}</li>);
  return (
    <MoviesWrapper>
      <h1>testing</h1>
    </MoviesWrapper>
  );
};

export default movies;
