import React, { Component } from 'react';

import styled from 'styled-components';
import axios from 'axios';
import Movies from './Movies';

const FormWrapper = styled.form`
  margin-top: 2rem;
  position: relative;

  input[type='text'] {
    display: flex;
    flex: 1;
    width: 100%;
    padding: 2rem 0;
    font-size: 1rem;
    padding-left: 5rem;
    &:focus {
      outline: 1px solid #79eae4;
    }
    &:focus::placeholder {
      color: #79eae4;
    }
  }
  .search-icon {
    font-size: 2rem;
    opacity: 0.6;
    position: absolute;
    top: 1.9rem;
    left: 2rem;
  }
`;

const API_KEY = 'f047c997dd5701fce991f8257acff9a8';
const URL = `https://api.themoviedb.org/3/movie/157336?api_key=${API_KEY}&append_to_response=videos,images`;

class Form extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          isLoaded: true,
          items: res
        });
      });
  }

  onChange = e => {};

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(items);

    return (
      <>
        <FormWrapper>
          <input
            type="text"
            placeholder="Search a movie"
            onChange={this.onChange}
          />
          <i className="fas fa-search search-icon" />
        </FormWrapper>
        <Movies items={items} />
      </>
    );
  }
}

export default Form;
