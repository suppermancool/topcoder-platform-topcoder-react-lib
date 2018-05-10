# members service
Service for members.

This module provides a service for searching for Topcoder
members via API V3.


class MembersService {
  /**
   * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
   */
  constructor(tokenV3)

  /**
   * Gets member's financial information.
   * @param {String} handle User handle.
   * @return {Promise} Resolves to the financial information object.
   */
  async getMemberFinances(handle)

  /**
   * Gets public information on a member.
   *
   * This method does not require any authorization.
   *
   * @param {String} handle Member handle.
   * @return {Promise} Resolves to the data object.
   */
  async getMemberInfo(handle)

  /**
   * Gets member external account info.
   * @param {String} handle
   * @return {Promise} Resolves to the stats object.
   */
  async getExternalAccounts(handle)

  /**
   * Gets member external links.
   * @param {String} handle
   * @return {Promise} Resolves to the stats object.
   */
  async getExternalLinks(handle)

  /**
   * Gets member skills.
   * @param {String} handle
   * @return {Promise} Resolves to the stats object.
   */
  async getSkills(handle)

  /**
   * Gets member statistics.
   * @param {String} handle
   * @return {Promise} Resolves to the stats object.
   */
  async getStats(handle)

  /**
   * Gets a list of suggested member names for the supplied partial.
   *
   * WARNING: This method requires v3 authorization.
   *
   * @param {String} keyword Partial string to find suggestions for
   * @return {Promise} Resolves to the api response content
   */
  async getMemberSuggestions(keyword)
}

/**
 * Returns a new or existing members service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {MembersService} Members service object
 */
let lastInstance = null;
export function getService(tokenV3)
