# user service
Service for User.

The User service provides functionality related to Topcoder user accounts.


export default class User {
  /**
   * Creates a new User service.
   * @param {String} tokenV3 Topcoder auth tokenV3.
   * @param {String} tokenV2 TC auth token v2.
   */
  constructor(tokenV3, tokenV2)

  /**
   * Gets user achievements. Does not need auth.
   * @param {String} username
   * @return {Object}
   */
  async getAchievements(username)

  /**
   * Gets public user info. Does not need auth.
   * @param {String} username
   * @return {Object}
   */
  async getUserPublic(username)

  /**
   * Gets user data object for the specified username.
   *
   * NOTE: Only admins are authorized to use the underlying endpoint.
   *
   * @param {String} username
   * @return {Promise} Resolves to the user data object.
   */
  async getUser(username)
}

/**
 * Returns a new or existing User service for the specified tokenV3.
 * @param {String} tokenV3 Optional. Topcoder auth token v3.
 * @param {String} tokenV2 Optional. TC auth token v2.
 * @return {Api} API v3 service object.
 */
let lastInstance = null;
export function getService(tokenV3, tokenV2)

