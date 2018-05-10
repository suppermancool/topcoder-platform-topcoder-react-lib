/**
 * Export reducers.
 */
import * as auth from './auth';
import * as stats from './stats';
import * as terms from './terms';
import * as direct from './direct';
import * as groups from './groups';
import * as errors from './errors';
import * as challenge from './challenge';
import * as profile from './profile';
import * as members from './members';
import * as memberTasks from './member-tasks';
import * as reviewOpportunity from './reviewOpportunity';
import * as mySubmissionsManagement from './my-submissions-management';
import smpActions from '../actions/smp';

/**
 * use to call reducer auth
 * @param {*} options options for reducer auth
 */
export function authReducer(options = {}) {
  return auth.factory(options);
}

/**
 * use to call reducer challenge
 * @param {*} options options for reducer challenge
 */
export function challengeReducer(options = {}) {
  return challenge.factory(options);
}

/**
 * use to call reducer challenge
 * @param {*} options options for reducer mySubmissionsManagement
 */
export function mySubmissionsManagementReducer(options = {}) {
  return mySubmissionsManagement.factory(options || {
    mergeReducers: {
      [smpActions.smp.deleteSubmissionDone]: state => ({
        ...state,
        deletingSubmission: false,
        showModal: false,
        toBeDeletedId: 0,
      }),
    },
  });
}

/**
 * use to call reducer reviewOpportunity
 * @param {*} options options for reducer reviewOpportunity
 */
export function reviewOpportunityReducer(options = {}) {
  return reviewOpportunity.factory(options);
}

/**
 * use to call reducer terms
 * @param {*} options options for reducer terms
 */
export function termsReducer(options = {}) {
  return terms.factory(options);
}

/** return some reducer default */
export const authDefault = auth.default;
export const groupsDefault = groups.default;
export const statsDefault = stats.default;
export const directDefault = direct.default;
export const profileDefault = profile.default;
export const errorsDefault = errors.default;
export const membersDefault = members.default;
export const memberTasksDefault = memberTasks.default;

export default undefined;
