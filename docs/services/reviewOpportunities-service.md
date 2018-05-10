# review opportunities service
Service for Review Opportunities.

This module provides a service for retrieving Review Opportunities and
submitting applications.


class ReviewOpportunitiesService {
  /**
   * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
   */
  constructor(tokenV3)
  }

  /**
   * Gets a list of currently open Review Opportunities.
   * @param {Number} limit The max number to return in one call.
   * @param {Number} offset Offset, used with limit to lazy load.
   * @return {Promise} Resolves to the api response in JSON.
   */
  getReviewOpportunities(limit, offset)

  /**
   * Gets the details of the review opportunity for the corresponding challenge
   * @param {Number} challengeId The ID of the challenge (not the opportunity id)
   * @return {Promise} Resolves to the api response in JSON.
   */
  getDetails(challengeId)

  /**
   * Submits review opportunity application for the specified challenge
   * @param {Number} challengeId The ID of the challenge (not the opportunity id)
   * @param {Array} roleIds List of review role IDs to apply for
   * @return {Promise} Resolves to the api response in JSON.
   */
  submitApplications(challengeId, roleIds)

  /**
   * Cancels review opportunity application for the specified challenge
   * @param {Number} challengeId The ID of the challenge (not the opportunity id)
   * @param {Array} roleIds List of review role IDs to cancel applications for
   * @return {Promise} Resolves to the api response in JSON.
   */
  cancelApplications(challengeId, roleIds)
}

/**
 * Returns a new or existing review opportunities service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {MembersService} Members service object
 */
export function getReviewOpportunitiesService(tokenV3)
