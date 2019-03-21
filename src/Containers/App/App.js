import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as fetch from '../../helpers/fetch';
import { key } from '../../helpers/apiKey';
import { Header } from '../../Components/Header/Header';
import { Account } from '../../Components/Account/Account';
import CardContainer from '../../Components/CardContainer/CardContainer';
import { addFilms } from '../../actions';
import { Loader } from '../../Components/Loader/Loader';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      showFilms: false
    }
  }

  componentDidMount() {
    this.buildCards()
  }

  buildCards = async() => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=10342`;
    const recentFilms = await fetch.fetchFilms(url);
    this.props.addFilms(recentFilms.results)
    this.setState({showFilms: true})
  }

  render() {
    return (
      <div className="App">
          <Header />
          <Account />
          {
            !this.state.showFilms ? <Loader /> : <CardContainer />
          }
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addFilms: (films) => dispatch(addFilms(films))
})

export default connect(null, mapDispatchToProps)(App)
