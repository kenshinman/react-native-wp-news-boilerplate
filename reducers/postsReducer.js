import { FETCHING_POSTS, SET_POSTS } from "../actions/postsActions";

const initialState = {
  posts: [],
  fetchingPosts: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_POSTS:
      return {
        ...state,
        fetchingPosts: true
      };
    case SET_POSTS:
      return { ...state, posts: action.payload, fetchingPosts: false };
    default:
      return state;
  }
}
