import React from 'react';

import styled from 'styled-components';

const NavWrapper = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    height: 8rem;
    align-items: center;
    margin: 0;
    padding: 0;

    & li:first-child {
      color: black;
      font-size: 3rem;
      margin-right: auto;
      font-weight: 800;
    }

    li {
      font-size: 1.3rem;
      margin-right: 1.3rem;
    }
  }
`;

const nav = props => (
  <NavWrapper>
    <ul>
      <li>Moviee</li>
      <li>Made by Mikko Miranda</li>
      <li>API: The Movie Database</li>
    </ul>
  </NavWrapper>
);

export default nav;
