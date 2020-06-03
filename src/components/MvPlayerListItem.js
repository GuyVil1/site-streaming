import React, { Component } from "react";

import '../css/MvPlayerListItem.css';

class MvPlayerListItem extends Component{
    render(){
        const activeClass = this.props.active ? "mvPlayerListItem active" : "mvPlayerListItem item";
        return(
            <>
                <div className={activeClass}>
                    <div className="mvPlayerListItem--number">{this.props.number}</div>
                    <div className="mvPlayerListItem--title">{this.props.title}</div>
                    <div className="mvPlayerListItem--time">{this.props.duration}</div>
                </div>
                <div className="mvPlayerListItem--divider" />
            </>
        )
    }
}
export { MvPlayerListItem };