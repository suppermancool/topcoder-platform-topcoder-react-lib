# reviewOpportunity action
Action for reviewOpportunity.

Review Opportunity details api actions.

/**
 * Action to cancel existing applications
 * @param {Number} challengeId The ID of the challenge (not the opportunity id)
 * @param {Array} roleIds Array of roleId Numbers to cancel applications for
 * @param {String} tokenV3 Required. Topcoder auth token v3.
 * @return {Object} Action object
 */
function cancelApplicationsDone(challengeId, roleIds, tokenV3)

/**
 * Action to get the details of a review opportunity for a corresponding challenge
 * @param {Number} challengeId The ID of the challenge (not the opportunity id)
 * @param {String} tokenV3 Optional. Topcoder auth token v3.
 * @return {Object} Action object
 */
function getDetailsDone(challengeId, tokenV3)

/**
 * Action to submit applications for review opportunities
 * @param {Number} challengeId The ID of the challenge (not the opportunity id)
 * @param {Array} roleIds Array of roleId Numbers to cancel applications for
 * @param {String} tokenV3 Required. Topcoder auth token v3.
 * @return {Object} Action object
 */
function submitApplicationsDone(challengeId, roleIds, tokenV3)