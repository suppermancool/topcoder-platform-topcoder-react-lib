# member-tasks action
Action for member-tasks.

 * Actions for management of member tasks and payments. Under the hood it is
 * very similar to the challenge listing management, as these tasks are in fact
 * just challenges of a special kind); however, due to differences in the use
 * cases, we can implement task management more efficient with dedicated actions
 * and reducer; thus, this module.

/**
 * Payload creator for the action that drops all loaded member tasks from Redux
 * state, and cancels any pending GET_DONE actions.
 * This no operation function is here just for the sake of documentation.
 */
function dropAll()

/**
 * Payload creator for the action that inits the loading of a member tasks page.
 * Note that dispatching this action before a previous loading operation has
 * been completed will cancel the previous loading operation.
 * @param {String} uuid UUID of the loading operation.
 * @param {Number} pageNum 0-based index of the page to load (PAGE_SIZE constant
 *  holds the page size).
 * @return {Object} Action payload.
 */
function getInit(uuid, pageNum)

/**
 * Payload creator for the action that actually loads a page of member tasks.
 * Prior to this action always dispatch the MEMBER_TASKS/GET_INIT action with
 * the same arguments. The result of MEMBER_TASKS/GET_DONE will be silently
 * discarted if its uuid is not stored in the Redux list of pending requests
 * to load tasks.
 * @param {String} uuid UUID of the loading operation.
 * @param {String} projectId Project filter for tasks.
 * @param {Number} pageNum 0-based index of the page to load (PAGE_SIZE constant
 *  holds the page size).
 * @param {String} tokenV3 Topcoder v3 auth token.
 * @return {Object} Action payload.
 */
function getDone(uuid, projectId, pageNum, tokenV3)