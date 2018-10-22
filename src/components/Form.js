import React, { Component } from 'react';

import styled from 'styled-components';
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

// const API_KEY = 'f047c997dd5701fce991f8257acff9a8';
// const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}query=`;
// const URL = `https://jsonplaceholder.typicode.com/posts`;

class Form extends Component {
  state = {
    error: null,
    isLoaded: false,
    results: [
      {
        poster_path: '/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg',
        adult: false,
        overview:
          'Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.',
        release_date: '2016-10-19',
        genre_ids: [53, 28, 80, 18, 9648],
        id: 343611,
        original_title: 'Jack Reacher: Never Go Back',
        original_language: 'en',
        title: 'Jack Reacher: Never Go Back',
        backdrop_path: '/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg',
        popularity: 26.818468,
        vote_count: 201,
        video: false,
        vote_average: 4.19
      },
      {
        adult: false,
        backdrop_path: '/ohQcduQfptci64PtSVjJx6VExxn.jpg',
        genre_ids: (3)[(18, 27, 53)],
        id: 9529,
        original_language: 'en',
        original_title: 'Candyman',
        overview:
          "The Candyman, a murderous soul with a hook for a hand, is accidentally summoned to reality by a skeptic grad student researching the monster's myth.",
        popularity: 9.282,
        poster_path: '/w5YQqrwzreHfa7RmXCB7rpLLxbe.jpg',
        release_date: '1992-09-11',
        title: 'Candyman',
        video: false,
        vote_average: 6.3,
        vote_count: 433
      },
      {
        adult: false,
        backdrop_path: '/840rbblaLc4SVxm8gF3DNdJ0YAE.jpg',
        genre_ids: (3)[(18, 10402, 10749)],
        id: 332562,
        original_language: 'en',
        original_title: 'A Star Is Born',
        overview:
          "Seasoned musician Jackson Maine discovers—and falls in love with—struggling artist Ally. She has just about given up on her ,,dream to make it big as a singer—until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons.",
        popularity: 191.909,
        poster_path: '/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg',
        release_date: '2018-10-03',
        title: 'A Star Is Born',
        video: false,
        vote_average: 7.6,
        vote_count: 838
      },
      {
        adult: false,
        backdrop_path: '/avhG8fITuG78IkKPk28CcBBHPOp.jpg',
        genre_ids: (2)[(35, 18)],
        id: 112160,
        original_language: 'fr',
        original_title: "Chroniques sexuelles d'une famille d'aujourd'hui",
        overview:
          'Three generations of a French family open up about their sexual experiences and desires after young Romain is caught masturbating in his biology ,class.',
        popularity: 12.216,
        poster_path: '/pU2nD3Llaz3Taq5FAaQUg00uJYD.jpg',
        release_date: '2012-05-09',
        title: 'Sexual Chronicles of a French Family',
        video: false,
        vote_average: 4.4,
        vote_count: 139
      },
      {
        adult: false,
        backdrop_path: '/szEn9uXHPRuy3MvkdZLTjdbKMy2.jpg',
        genre_ids: [35],
        id: 75198,
        original_language: 'fr',
        original_title: 'Bienvenue à bord',
        overview:
          "Isabelle, HR of a large cruise company, made the mistake of choosing her boss as a lover. Before embarking on the maiden voyage of the new flagship of the fleet, though, he decided to disembark from their relationship! Some women take their revenge by poison, firearm, or slander. Isabelle chooses Remy a flamboyant, unemployed ne'er-do-well who flunked out in life on land, but after all is said and done, might have better luck at sea... She recruits him as leader of her plot and on this Palace of the Seas, Remy will first prove to be the worst nightmare of the CEO and Richard, the Cruise Director...then, little by little, he will change his life and that of all those who cross his path...",
        popularity: 12.267,
        poster_path: '/wSKHQdTgHb7dGQtNI94cb1oHp0X.jpg',
        release_date: '2011-10-05',
        title: 'Welcome Aboard',
        video: false,
        vote_average: 5.4,
        vote_count: 209
      }
    ]
  };

  performSearch = searchTerm => {
    fetch(
      'https://api.themoviedb.org/3/search/movie?api_key=f047c997dd5701fce991f8257acff9a8&query=' +
        searchTerm
    )
      .then(res => res.json())
      .then(res => this.setState({ results: res.results, isLoaded: true }));
  };

  searchMovieHandler = event => {
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  };

  render() {
    const { error, isLoaded, results } = this.state;

    return (
      <>
        <FormWrapper>
          <input
            type="text"
            placeholder="Search a movie"
            onChange={this.searchMovieHandler}
          />
          <i className="fas fa-search search-icon" />
        </FormWrapper>
        <Movies results={results} />
      </>
    );
  }
}

export default Form;
