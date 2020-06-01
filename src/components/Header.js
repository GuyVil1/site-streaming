import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className='header'>

                <Link to={{pathname: '/'}}>
                    <FontAwesome className='header--film' name='film' size='5x' />
                </Link>
                <h3>la toile publique</h3>
                <FontAwesome className='header--star' name='star' size='5x' />
                <div className='header--badge'>{this.props.badge}</div>
            </div>
        )
    }
}

export { Header };