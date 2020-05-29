import React, { Component } from 'react';

class Actor extends Component{
    render(){
        //D'abord splitter la valeur présente dans l'index du tableau acteur pour séparer nom et prénom
        const name = this.props.name.split(" ");
        return(
            <div className="actor">
                <img className="actor--img" alt="actor" src={this.props.imgSrc} />
                {this.props.hover ? (
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