import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNumber } from '../actions/movie';

class HeaderComponent extends Component{
    componentDidMount(){
        this.props.getNumber();
    }
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

const mapStateToProps = state => {
    return{
        badge: state.movies.number
    }
}

const mapDispatchToDrops = dispatch => {
    return{
        getNumber: () => dispatch(getNumber())
    }
}

const Header = connect(mapStateToProps, mapDispatchToDrops)(HeaderComponent);
export { Header };