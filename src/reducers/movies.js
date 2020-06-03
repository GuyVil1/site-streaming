import { ADD_MOVIE, REMOVE_MOVIE, GET_MOVIE, GET_NUMBER } from '../actions';

const initialState = {
    movies: [],
    number: 0
}


export const movieReducer = (state = initialState, action) => {

    //Verifier d'abord quelle action à été dispatchée et exectuer la conséquence
    switch(action.type){
        case ADD_MOVIE:
        console.log('add movie called', action.payload)
        return{
                movies: action.payload,
                number: action.payload.length
            };
        case REMOVE_MOVIE:
        console.log('remove called', action.payload)
        return{
                movies: action.payload,
                number: state.number - 1
            };
        case GET_MOVIE:
        console.log('get movie caleld', action.payload)
        return{
                ...state,
                movies: action.payload
            }
        case GET_NUMBER:
        console.log('get number called', action.payload)
        return{
                ...state,
                number: action.payload
            }
        default:   
            return state;
    }
    return state;
}