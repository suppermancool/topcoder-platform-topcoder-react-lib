# challenge action
Action for Challenge.

Challenge spcific actions.

/**
 * Payload creator for CHALLENGE/FETCH_DETAILS_INIT action,
 * which marks that we are about to fetch details of the specified challenge.
 * If any challenge details for another challenge are currently being fetched,
 * they will be silently discarted.
 * @param {Number|String} challengeId
 * @return {String}
 */
function getDetailsInit(challengeId)

/**
 * Payload creator for CHALLENGE/FETCH_DETAILS_DONE action,
 * which fetch details of the specified challenge.
 * @param {Number|String} challengeId
 * @param {String} tokenV3
 * @param {String} tokenV2
 * @return {Promise}
 */
function getDetailsDone(challengeId, tokenV3, tokenV2)

/**
 * Payload creator for the action that initializes loading of user's submissions
 * to the specified challenges. This action also cancels any previous unfinished
 * fetching of submissions.
 * @param {String} challengeId
 * @return {String}
 */
function getSubmissionsInit(challengeId)

/**
 * Payload creator for the action that actually pulls from API user's
 * submissions to the specified challenge.
 * @param {String} challengeId
 * @param {String} tokenV2
 */
function getSubmissionsDone(challengeId, tokenV2)

/**
 * Registers user for the challenge.
 * @param {Object} auth Auth section of Redux state.
 * @param {String} challengeId
 * @return {Promise}
 */
function registerDone(auth, challengeId)

/**
 * Unregisters user for the challenge.
 * @param {Object} auth Auth section of Redux state.
 * @param {String} challengeId
 * @return {Promise}
 */
function unregisterDone(auth, challengeId)

/**
 * Initiates loading of challenge results. Any loading of results initiated
 * before will be silently discarded.
 * @param {Number|String} challengeId
 * @return {String}
 */
function loadResultsInit(challengeId)

/**
 * Loads challenge results. Challenge ID should match with the one previously
 * passed to loadResultsInit(..), otherwise results will be silently discarted.
 * @param {Object} auth
 * @param {Number|String} challengeId
 * @param {String} type
 * @return {Object}
 */
function loadResultsDone(auth, challengeId, type)

/**
 * Toggles checkpoint feedback. If second argument is provided, it
 * will just open / close the checkpoint depending on its value being
 * true or false.
 * @param {Number} id
 * @param {Boolean} open
 * @return {Object}
 */
function toggleCheckpointFeedback(id, open)

/**
 * Payload creator for the action that inits update of a challenge.
 * @param {String} uuid UUID of the operation (the same should be passed into
 *  the corresponding UPDATE_CHALLENGE_DONE action).
 * @return {String} UUID.
 */
function updateChallengeInit(uuid)

/**
 * Payload creator for the action that finalizes update of a challenge.
 * @param {String} uuid
 * @param {Object} challenge
 * @param {String} tokenV3
 */
function updateChallengeDone(uuid, challenge, tokenV3)