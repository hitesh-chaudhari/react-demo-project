import axios from "axios";
import qs from "query-string";

import { STRING_CONSTANTS } from "../../../utils/constant/";

const getMovies = (pageNumber) => {
    return (dispatch) => {
        dispatch({type: STRING_CONSTANTS.FETCHING});

        let page = qs.stringify({page: pageNumber});

        axios.get(`&${page}`, {
            headers: {},
            pageNumber: pageNumber
        }).then((response) => {

            dispatch({type: STRING_CONSTANTS.FETCH_MOVIES, response});


        }).catch((error) => {
            console.log("error.response", error.response);
            dispatch({type: STRING_CONSTANTS.API_ERROR, error: error.response});
        });
    }
};

export { getMovies };