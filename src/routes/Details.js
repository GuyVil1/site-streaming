import React, { Component } from 'react';
import { Spinner, HeaderDetails, ActorList } from '../components';

const actors = [
    {
        name: "Louis De Funès",
    },
    {
        name: "Louis Michel",
    },
    {
        name: "Louis Palmas",
    },
    {
        name: "Louis tamère",
    },
    {
        name: "Louis tonpère",
    },
    {
        name: "Louis paslà",
    },
    
]

class Details extends Component {
    render(){
        return(
            <div className="app">
                {this.props.loading ? (
                    <Spinner />
                ) : (
                    <>
                        <HeaderDetails
                            mTitle={"Batman"}
                            mDesc={"Description du film"}
                            imgSrc={"./images/Fast_large.jpg"}
                            runTime={"2h30"}
                            revenur={"$12345678"}
                            status={"Resleased"}
                            vote={""}
                        />
                        <ActorList actors={actors} />
                    </>
                )}
            </div>
        )
    }
}

export { Details };