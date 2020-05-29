import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import '../css/Poster.css';

class Poster extends Component {
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
        //A implémenter avec redux
        console.log('remove avec redux');
    }

    add = () => {
        //A implémenter avec redux
        console.log('add avec redux');
    }

    render(){
        return(
            <div 
                onMouseEnter={this.showOverlay}
                onMouseLeave={this.hideOverlay}
                className='poster'
            >
                <img className="poster--img" src={this.props.imgSrc} alt="cover" />
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

export { Poster };

