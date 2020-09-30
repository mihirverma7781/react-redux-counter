import axios from 'axios'
import{
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
}
from  './UserTypes'

const fetchUserRequest = () => {
    return {
      type: FETCH_USER_REQUEST,
    };
  };
  const fetchUserSucces = (users) => {
    return {
      type: FETCH_USER_SUCCESS,
      payload: users,
    };
  };
  const fetchUserFailure = (error) => {
    return {
      type: FETCH_USER_FAILURE,
      payload: error,
    };
  };

   const fetchUsers = () => {
    return function (dispatch) {
      dispatch(fetchUserRequest());
      axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
          const users = res.data
          dispatch(fetchUserSucces(users));
        })
        .catch((error) => {
          dispatch(fetchUserFailure(error.message));
        });
    };
  };
  export default fetchUsers