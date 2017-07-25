import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userRequest: null,
  userSuccess: ['contentList'],
  userFailure: null
});

export const RediggTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  contentList: null, // updated naming
  fetching: null,
  error: null,

});

/* ------------- Reducers ------------- */

// request the list from reddit
export const request = (state, action) => // removed action
  state.merge({ fetching: true });

// successful reddit lookup
export const success = (state, action) => {

  return state.merge({ contentList: action, fetching: false, error: null });
}

// failed to get the avatar
export const failure = (state) =>
  state.merge({ fetching: false, error: true, contentList: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: request,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure
});
