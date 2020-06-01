import React, { Component } from 'react';
import '../css/Actor.css';


class Actor extends Component{
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

    render(){
        //D'abord splitter la valeur présente dans l'index du tableau acteur pour séparer nom et prénom
        const name = this.props.name.split(" ");
        return(
            <div
                onMouseEnter={this.showOverlay}
                onMouseLeave={this.hideOverlay} 
                className="actor"
            >
                <img className="actor--img" alt="actor" src={this.props.imgSrc} />
                {this.state.hover ? (
                    <div className="actor--overlay">
                        <h3 className="actor--name"> {name[0]} </h3>
                        <h3 className="actor--name"> {name[1]} </h3>
                    </div>
                ): null}
            </div>
        )
    }
}

export { Actor };