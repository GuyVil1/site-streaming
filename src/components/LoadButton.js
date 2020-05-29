import React, { Component } from 'react';
import { Spinner } from './index';


import '../css/LoadButton.css';


class LoadButton extends Component{
    render(){
        return (
            //Raccourci pour définir un fragment
            <>
            {this.props.loading ?
                (
                    <Spinner />
                ):
                (
                    <div 
                        onClick = {this.props.onButtonClick}
                        className='loadButton'>
                        <h3 className="loadButton--text">Voir plus...</h3>
                    </div>
            )}
            </> /*Je ferme mon fragment*/

        )
    }
}

export { LoadButton };