import axios from "axios";

export const FETCHING_POSTS = "FETCHING_POSTS";
export const DONE_FETCHING_POSTS = "DONE_FETCHING_POSTS";
export const SET_POSTS = "SET_POSTS";

export const FETCHING_MORE_POSTS = "FETCHING_MORE_POSTS";
export const DONE_FETCHING_MORE_POSTS = "DONE_FETCHING_MORE_POSTS";
export const SET_MORE_POSTS = "SET_MORE_POSTS";

export const fetchPosts = (page = 1, per_page = 20) => dispatch => {
  dispatch({ type: FETCHING_POSTS });
  axios
    .get(`/posts?page=${page}&per_page=${per_page}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: SET_POSTS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchMorePosts = (page, per_page) => dispatch => {
  dispatch({ type: FETCHING_MORE_POSTS });
  axios
    .get(`/posts?page=${page}&per_page=${per_page}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: SET_MORE_POSTS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
