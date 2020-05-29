import React from 'react';
import { Actor } from './index';

const ActorList = props => {
    const renderActor = () => {
        return props.actors.map((actor, i) => {
            const imgSrc = './images/Fast_smal.jps';
            return(
                <Actor
                    key={i}
                    imgSrc={imgSrc}
                    name={actor.name}
                />
            )
        })
    }
    return (
        <div className="actorList">
            <h3 className="actorList--title">Acteurs</h3>
            <div className="actorList--grid"> {renderActor()} </div>
        </div>
    )
}

export { ActorList };