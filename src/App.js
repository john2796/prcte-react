import React, { Component } from 'react';

import styled from 'styled-components';

const AppWrapper = styled.div`
  background: orange;

  .headingOne {
    color: pink;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <nav>
          <ul>
            <li>Moviee</li>
            <li>Made by Mikko Miranda</li>
            <li>API: The Movie Database</li>
          </ul>
        </nav>
        <main>
          <p>Movies here </p>
        </main>
        <footer>
          <h1>Footer here </h1>
        </footer>
      </AppWrapper>
    );
  }
}

export default App;
