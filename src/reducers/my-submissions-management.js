/**
 * This reducer and corresponding actions control the logic for submission management.
 */
import _ from 'lodash';
import { handleActions } from 'redux-actions';

import actions from '../actions/smp';

/**
 * Creates a new Submission management reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @param {Object} mergeReducers Optional. Reducers to merge.
 * @return {Function} Submission management reducer.
 */
function create(initialState, mergeReducers = {}) {
  return handleActions({
    [actions.smp.deleteSubmissionDone]: state => ({
      ...state,
      deletingSubmission: false,
    }),
    [actions.smp.deleteSubmissionInit]: state => ({
      ...state,
      deletingSubmission: true,
    }),
    [actions.smp.showDetails]: (state, { payload }) => {
      const showDetails = new Set(state.showDetails);
      if (showDetails.has(payload)) {
        showDetails.delete(payload);
      } else {
        showDetails.add(payload);
      }
      return { ...state, showDetails };
    },
    [actions.smp.confirmDelete]: (state, { payload }) => ({
      ...state,
      showModal: true,
      toBeDeletedId: payload,
    }),
    [actions.smp.cancelDelete]: state => ({
      ...state,
      showModal: false,
      toBeDeletedId: 0,
    }),
    ...mergeReducers,

  }, _.defaults(initialState, {}));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 *
 * initialState: The initial state
 *
 * mergeReducers: The additional reducers to merge
 *
 * @param {Object} options Optional. Options object for initial state.
 * @return Promise which resolves to the new reducer.
 */
export function factory(options = {}) {
  // return Promise.resolve(create(options.initialState, options.mergeReducers));
  return Promise.resolve(create({
    showDetails: [],
    showModal: false,
    toBeDeletedId: 0,
  } || options.initialState, options.mergeReducers));
}

/* Reducer with the default initial state. */
export default create();
