import { STRING_CONSTANTS } from '../../../utils/constant';

const register = (data) => {
  return (dispatch) => {
    dispatch({
      type: STRING_CONSTANTS.FETCH_USER,
      payload: data,
    });
  };
};



export { register };
