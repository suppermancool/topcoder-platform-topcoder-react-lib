# direct action
Action for Direct.

Direct-related actions: projects, billing accounts, copilot, and other
 * similar stuff should be handled here, at least for now.

/**
 * Payload creator (noop in fact) for the action that drops all Direct-related
 * data out of the Redux state; and cancels any pending loading requests.
 */
function dropAll()

/**
 * Payload creator for the action that inits loading of the specified project
 * details.
 * @param {Number} projectId
 * @return {Number}
 */
function getProjectDetailsInit(projectId)

/**
 * Payload creator for the action that actually loads the details of
 * the specified project.
 * @param {Number} projectId
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Promise} Resolves to the project details object.
 */
function getProjectDetailsDone(projectId, tokenV3)

/**
 * Payload creator for the action that inits the loading of project permissions.
 * @param {Number|String} projectId
 * @return {Number} projectId
 */
function getProjectPermissionsInit(projectId)

/**
 * Payload creator for the actions that actually loads project permissions.
 * @param {Number|String} projectId
 * @param {String} tokenV3
 * @return {Promise}
 */
function getProjectPermissionsDone(projectId, tokenV3)

/**
 * Payload creator for the action that inits the loading of projects related to
 * the user.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {String} Topcoder auth token v3.
 */
function getUserProjectsInit(tokenV3)

/**
 * Payload creator for the actio that actually pulls from API the projects
 * related to user.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Object} Pull result object + some meta-information.
 */
async function getUserProjectsDone(tokenV3)