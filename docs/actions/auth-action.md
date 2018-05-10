# auth action
Action for Authentication.

Auth-related actions.

/**
 * Creates the action for joining the group.
 * @param {String} token Topcoder auth token V3.
 * @param {String} groupId
 * @param {String} memberId
 */
/* TODO: Should be updated to add member to all groups related to the community.
 */
function joinDone(token, groupId, memberId)

/**
 * Loads profile of the authenticated user.
 * @param {String} userTokenV3 Topcoder auth token V3.
 * @return Promise which resolves to the loaded profile object.
 */
function loadProfileDone(userTokenV3)
