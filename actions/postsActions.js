import axios from "axios";

export const FETCHING_POSTS = "FETCHING_POSTS";
export const DONE_FETCHING_POSTS = "DONE_FETCHING_POSTS";
export const SET_POSTS = "SET_POSTS";

export const fetchPosts = () => dispatch => {
  dispatch({ type: FETCHING_POSTS });
  axios
    .get(`/posts?_embed`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: SET_POSTS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
