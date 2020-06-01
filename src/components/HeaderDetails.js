import React, {Component} from 'react';
import { Stars, Container } from './index';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { calcTime, convertMoney } from '../utils/helpers';

import '../css/HeaderDetails.css';

class HeaderDetails extends Component {
    //Calculer les étoiles obtenues par un film
    calcVote = () => {
        //J'initialise mes 2 tableau
        this.fakeArray1 = [];
        this.fakeArray2 = [];
        //Je récupére la note user
        const vote = Math.round(this.props.vote / 2);//L'api note sur 10, sur cette base, je /2 pour distribuer le * pleines et vide
        const reste = 5 - vote;
        for(let i = 0; i< vote; i++){
            this.fakeArray1.push("1");
        }
        if(reste !== 0){
            for(let i = 0; i < reste; i++){
                this.fakeArray2.push("1");
            }
        }
    }
    render(){
        this.calcVote();
        const imgSrc = `${IMAGE_BASE_URL}/${POSTER_SIZE}/${this.props.imgSrc}`;
        return(
            <div className="headerDetails">
                <div className="badge--decoration">{this.props.status}</div>
                <div className="headerDetails--poster">
                    <img className="headerDetails--poster__img" alt="film" src={imgSrc} />
                </div>
                <div className="headerDetails--container">
                    <h3 className="headerDetails--container__title">{this.props.mTitle}</h3>
                    <p className="headerDetails--container__desc">{this.props.mDesc}</p>
                    <div className="headerDetails--info">
                        <Container iconName="clock" content={calcTime(this.props.runtime)} />
                            <Stars fakeArray1={this.fakeArray1} fakeArray2={this.fakeArray2} />
                        <Container iconName="money" content={convertMoney(this.props.revenue)} />
                    </div>
                </div>
            </div>
        )
    }
}

export { HeaderDetails };