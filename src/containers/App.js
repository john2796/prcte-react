import React, { Component } from 'react';

import styled from 'styled-components';
import Nav from '../components/Nav';
import Form from '../components/Form';
import Footer from '../components/Footer';
const AppWrapper = styled.div`
  width: 90%;
  margin: auto;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Nav />
        <hr />
        <main>
          <Form />
        </main>
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
