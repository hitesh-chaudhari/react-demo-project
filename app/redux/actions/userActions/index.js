function register(data) {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_USER',
      payload: data,
    });
  };
}

export { register };
