import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faSpinner);//Je récupére l'icone spinner chez font Awesomme

const Spinner = props => {
        return(
            <FontAwesomeIcon
                icon='spinner'
                pulse
                size='5x'
                className='fa-faSpinner'
            />
        )
}
export { Spinner };