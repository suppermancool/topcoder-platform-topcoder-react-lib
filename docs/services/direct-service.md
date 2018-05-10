# direct service
Service for direct.

 * The Direct service takes care about communication with Direct APIs: projects,
 * billing accounts, copilots, all these stuff should be added here, at least
 * for now.
NOTE: We don't want to export getService(..) as default because it will be
 * confusing: most of users would expect that the default export should be an
 * instance of the service class, or the class itself.
/* eslint-disable import/prefer-default-export */


class Direct {
  /**
   * Service constructor.
   * @param {String} tokenV3 Optional. Topcoder auth token v3. Though optional,
   *  most probably most, if not all, of the service functionality won't work
   *  for non-authenticated visitors.
   */
  constructor(tokenV3)

  /**
   * Gets details of the specified project.
   * @param {Number} projectId
   * @return {Promise} Resolves to the project details object.
   */
  async getProjectDetails(projectId)

  /**
   * Gets user permissions on the specified project.
   * @param {Number|String} projectId
   * @param {String} tokenV3 Auth token for API v3.
   * @return {Promise} Resolves to the user permissions data.
   */
  async getProjectPermissions(projectId)

  /**
   * Gets all projects the user can see.
   * @param {Object} query Optional. Query params for the request.
   * @return {Promise} Resolves to an array of project objects.
   */
  async getUserProjects(query)
}

/**
 * Returns a new or existing Direct service.
 * @param {String} tokenV3 Optional. Topcoder auth token v3.
 * @return {Direct} Direct service object.
 */
let lastInstance = null;
export function getService(tokenV3)
