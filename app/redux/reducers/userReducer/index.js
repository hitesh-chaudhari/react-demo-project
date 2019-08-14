import { STRING_CONSTANTS } from '../../../utils/constant/';

const initialState = {
  user: {
    id: null,
    name: null,
    age: null,
  },
  fetching: false,
  fetched: false,
  error: null,
};


const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case STRING_CONSTANTS.FETCH_USER: {
      return { ...state, fetching: true };
    }
    default: break;
  }

  return state;
};

export default Reducer;