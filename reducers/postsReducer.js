import {
  FETCHING_POSTS,
  SET_POSTS,
  FETCHING_MORE_POSTS,
  SET_MORE_POSTS
} from "../actions/postsActions";

const initialState = {
  posts: [],
  fetchingPosts: false,
  fetchingMorePosts: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_POSTS:
      return {
        ...state,
        fetchingPosts: true
      };
    case FETCHING_MORE_POSTS:
      return {
        ...state,
        fetchingMorePosts: true
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        fetchingPosts: false
      };
    case SET_MORE_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        fetchingMorePosts: false
      };
    default:
      return state;
  }
}
