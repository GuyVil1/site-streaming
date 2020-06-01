import React, { Component } from 'react';
import { Poster } from './index';
import {IMAGE_BASE_URL, POSTER_SIZE } from '../config';

import '../css/PosterList.css';

let wish;//Variable globale pour gérer la liste de favoris

class PosterList extends Component{
    //Méthode pour afficher la liste de films
    renderPoster = () => {
        return this.props.movies.map(movie => {//Je fais un map de mon objet movies pour lire ce qu'il contien
            // const imgSrc = movie.poster_path;//avant redistribution vers api
            const imgSrc = `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}`;
            wish = false;
            return(
                <Poster //Pour chaque film trouvé j'affiche
                    key={movie.id}
                    imgSrc={imgSrc}
                    wished={wish}
                    movie={movie}
                    mTitle={movie.title}
                    mDesc={movie.overview}
                    id={movie.id}
                />
            )
        })
    }
    render(){
        return(
            <div className='posterList'>
                <h3 className='posterList--title'>NOUVEAUX FILMS</h3>
                <div className='posterList--grid'>
                    {this.renderPoster()}
                </div>
            </div>
        )
    }
}

export { PosterList };