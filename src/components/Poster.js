import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom'; //equivalent de la balise html <a>
import { connect } from 'react-redux';

import { addMovie, removeMovie } from '../actions/movie';
import '../css/Poster.css';

class PosterComponent extends Component {
    state = {
        hover: false
    }
    //Gestion de l'overlay sur les affiches
    showOverlay = () => {
        if(this.state.hover){//Si par un hasard quelquonque hover est déjà à true, on ne fait rien ==> Prévoir l'imprévisible
            return;
        } 
        this.setState({ hover: true });
    }
    hideOverlay = () => {
        this.setState({ hover: false });
    }
    //Gestion de la mise en favoris
    remove = () => {
        //implémenté avec redux
        this.props.removeM(this.props.id);
        console.log('remove avec redux');
    }

    add = () => {
        //implémenté avec redux
        this.props.addM(this.props.movie);
        console.log('add avec redux');
    }

    render(){
        return(
            <div 
                onMouseEnter={this.showOverlay}
                onMouseLeave={this.hideOverlay}
                className='poster'
            >
                <Link to={ {pathname:`/${this.props.id}`}}>
                    <img className="poster--img" src={this.props.imgSrc} alt="cover" />
                </Link>
                {this.state.hover ?//Si je passe la souris sur l'élément, affiche
                    (
                        <div className="poster--overlay">
                            <h3 className='poster--overlay__text'>En favoris</h3>
                            {this.props.wished ? //Est-ce que le film est déjà dans les favoris ?
                                (
                                    <FontAwesome onClick={this.remove} className="poster--icon" name='star' size="3x" />
                                ) :
                                (
                                    <FontAwesome onClick={this.add} className="poster--icon__not" name='star-o' size="3x" />
                                )
                            }
                        </div>
                ) : null}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addM: movie => dispatch(addMovie(movie)),
        removeM: movieId => dispatch(removeMovie(movieId))
    }
}
const Poster = connect(null, mapDispatchToProps)(PosterComponent);

export { Poster };

