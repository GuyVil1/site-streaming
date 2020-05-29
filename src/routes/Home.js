import React, { Component } from 'react';
import { HeaderImg, SearchBar, PosterList, LoadButton } from '../components';


class Home extends Component {//Ce que je trouve sur ma page principale
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
              <PosterList movies={movies} />
              <LoadButton 
                onButtonClick = {this.props.onButtonClick} 
                loading={loading}
              />
            </div>
        )
    }
}

export { Home };