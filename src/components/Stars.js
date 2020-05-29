import React from 'react';
import FontAwesome from 'react-fontawesome';

const Stars = props => {
    // Les étoiles pleines
    const renderStars1 = () =>{
        return props.fakeArray1.map((element, i) => {
            return(
                <FontAwesome
                    key={i}
                    className="stars"
                    size="3X"
                />
            )
        })
    }
    // les étoiles vides
    const renderStars2 = () =>{
        return props.fakeArray2.map((element, i) => {
            return(
                <FontAwesome
                    key={i}
                    className="stars"
                    size="3X"
                />
            )
        })
    }

    return(
        <div className='stars'>
            {renderStars1()}
            {renderStars2()}
        </div>
    )
}

export { Stars };