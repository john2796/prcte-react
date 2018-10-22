import React from 'react';

import styled from 'styled-components';

const MoviesWrapper = styled.div`
  background: lightblue;
  min-height: 500px;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  li {
  }
`;

const movies = ({ results }) => {
  console.log(results);

  let movieResult = results.map(res => (
    <li key={res.id}>
      <p>{res.original_title}</p>
      <img src={`https://image.tmdb.org/t/p/w200/${res.poster_path}`} alt="" />
    </li>
  ));
  return (
    <MoviesWrapper>
      <ul>{movieResult}</ul>
    </MoviesWrapper>
  );
};

export default movies;
