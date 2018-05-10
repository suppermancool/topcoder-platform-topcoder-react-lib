# members action
Action for members.

Actions related to members data.

/**
 * Payload creator for the action that drops all loaded information about
 * a member.
 * @param {String} handle
 * @return {String}
 */
function drop(handle)

/**
 * Payload creator for the action that drops all loaded information about
 * members.
 */
function dropAll()

/**
 * Payload creator for the action that inits the loading of member achievements.
 * @param {String} handle
 * @param {String} uuid
 * @return {Object} Payload.
 */
function getAchievementsInit(handle, uuid)

/**
 * Payload creator for the action that loads member achievements.
 * @param {String} handle
 * @param {String} uuid
 * @return {Promise} Payload.
 */
async function getAchievementsDone(handle, uuid)

/**
 * Payload creator for the action that initializes loading of financial
 * information about a member.
 * @param {String} handle
 * @param {String} uuid
 * @return {Object} Payload.
 */
function getFinancesInit(handle, uuid)

/**
 * Payload creator for the action that actually loads financial information
 * about a member.
 * @param {String} handle
 * @param {String} uuid
 * @param {String} tokenV3
 * @return {Object} Payload.
 */
async function getFinancesDone(handle, uuid, tokenV3)

/**
 * Payload creator for the action that inits the loading of member stats.
 * @param {String} handle
 * @param {String} uuid
 * @return {Object} Payload.
 */
async function getStatsInit(handle, uuid)

/**
 * Payload creator for the action that loads the member stats.
 * @param {String} handle
 * @param {String} uuid
 * @param {String} tokenV3
 * @return {Object} Payload
 */
async function getStatsDone(handle, uuid, tokenV3)