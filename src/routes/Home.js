import React, { Component } from 'react';
import { HeaderImg, SearchBar, PosterList, LoadButton } from '../components';
import { connect } from 'react-redux';
import { getMovies } from '../actions/movie';


class HomeComponent extends Component {//Ce que je trouve sur ma page principale
    componentDidMount(){
      this.props.getMovies();
    }
    render(){
      //Décomposition
      const {mTitle, mDesc, image, movies, loading} = this.props;//Me permet d'utiliser dans ce component les clés de mon states, plutôt qu'un this.props... a chaque appel
        return(
            <div>
              <HeaderImg 
                title={mTitle}
                overview={mDesc}
                imgSrc={image}
              />
              <SearchBar onSearchClick={this.props.onSearchClick}  />
              <PosterList movies={movies} localMovies={this.props.localMovies} />
              <LoadButton 
                onButtonClick = {this.props.onButtonClick} 
                loading={loading}
              />
            </div>
        )
    }
}

const mapStateToProps = state => {
  return{
    localMovies: state.movies.movies
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getMovies: ()=> dispatch(getMovies())
  }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export { Home };