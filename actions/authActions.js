import axios from "axios";
import jwt_decode from "jwt-decode";

export const LOGIN_USER = "LOGIN_USER";
export const LOGGING_IN = "LOGGING_IN";
export const LOGOUT_USER = "LOGOUT_USER";
export const REGISTER_USER = "REGISTER_USER";
export const GET_ERRORS = "GET_ERRORS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
// export const GET_PROFILE = "GET_PROFILE";
// export const PROFILE_LOADING = "PROFILE_LOADING";
// export const PROFILE_NOT_FOUND = "PROFILE_NOT_FOUND";
// export const CLEAR_CURRENT_PROFILE = "CLEAR_CURRENT_PROFILE";
// export const GET_PROFILES = "GET_PROFILES";

export const loginUser = data => dispatch => {
  dispatch({ type: LOGGING_IN });
  console.log(data);
  axios
    .post(`https://devsconnekt.herokuapp.com/api/users/login`, data)
    .then(res => {
      console.log(res.data);
      const decoded = jwt_decode(res.data.token.split(" ")[1]);
      dispatch({ type: SET_CURRENT_USER, payload: decoded });
    })
    .catch(err => console.log(err.response));
};
