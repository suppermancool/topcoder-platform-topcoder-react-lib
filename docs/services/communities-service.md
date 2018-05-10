# communities service
Service for communities.


/* Client-side version of the service. */
class Communities {
  constructor(tokenV3)

  /**
   * Gets the list of communities accessible to the member of specified groups.
   * @param {String[]} userGroupIds
   * @return {Promise} Resolves to the array of community data objects. Each of
   *  the objects indludes only the most important data on the community.
   */
  getList(userGroupIds)

  /**
   * Gets metadata for the specified community.
   * @param {String} communityId
   * @return {Promise} Resolves to the community metadata.
   */
  getMetadata(communityId)
}

/**
 * Returns a new or existing communities service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {Communities} Communties service object
 */
export function getService(tokenV3)