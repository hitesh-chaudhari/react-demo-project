import { STRING_CONSTANTS } from "../../../utils/constant/";

const InitialState = {
    movies: {},
    fetching: false,
    error: null
};

const reducer = (state = InitialState, action) => {
    switch(action.type) {
        case STRING_CONSTANTS.FETCHING:
            return {
                ...state,
                fetching: true
            };

        case STRING_CONSTANTS.API_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.error
            };

        case STRING_CONSTANTS.FETCH_MOVIES:
            return {
                ...state,
                movies: action.response,
                fetching: false
            };

        default: break;
    }

    return state;
};

export default reducer;