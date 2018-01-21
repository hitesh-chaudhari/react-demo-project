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


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER': {
      console.log("our reducer called", action);
      return { ...state, fetching: true };
    }
    default: break;
  }

  return state;
}
