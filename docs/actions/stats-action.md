# stats action
Action for stats.

Stats actions.


/**
 * Payload creator for the action that inits the loading of community stats.
 * @param {Object} community
 * @param {String} uuid
 * @return {Object} Payload.
 */
function getCommunityStatsInit(community, uuid)

/**
 * Gets statistics related to the specified community. Data will be loaded into
 * stats.communities[communityId] path of the Redux state.
 * @param {Object} community details of the community.
 * @param {String} uuid
 * @param {Array} challenges challenges from challengeListing to filter and do statistics
 * @param {String} token V3 Topcoder auth token. It is necessary to get data
 *  related to private groups.
 * @return {Promise} Resolves to the loaded data.
 */
/* TODO: This code should be moved to a dedicated service. */
async function getCommunityStatsDone(community, uuid, challenges, token)