# terms service
Service for Terms.

This module provides a service for convenient manipulation with Topcoder
challenges' terms via TC API.

class TermsService {
  /**
   * @param {String} tokenV2 Optional. Auth token for Topcoder API v2.
   */
  constructor(tokenV2)

  /**
   * get all terms of specified challenge
   * @param  {Number|String} challengeId id of the challenge
   * @return {Promise}       promise of the request result
   */
  getChallengeTerms(challengeId)

  /**
   * get all terms for community
   *
   * NOTE: As there is no specific endpoint to get community terms by one call
   *       currently we get community term ids from community service and after
   *       we get community terms using term ids list one by one
   *
   * @param {String} communityId community id
   * @param {String} tokenV3     auth token V3 - we need to get community meta data
   *
   * @return {Promise} resolves to the list of community terms
   */
  getCommunityTerms(communityId, tokenV3)

  /**
   * Get the terms for Review Opportunities.  This will ensure that the
   * provided terms have all the necessary fields by getting anything missing
   * from the terms details endpoint
   *
   * @param {Object} requiredTerms Required terms for review opportunity
   *
   * @return {Promise} resolves to the list of validated terms
   */
  getReviewOpportunityTerms(requiredTerms)

  /**
   * get details of specified term
   * @param  {Number|String} termId id of the term
   * @return {Promise}       promise of the request result
   */
  getTermDetails(termId)

  /**
   * generate the url of DocuSign term
   * @param  {Number|String} templateId id of the term's template
   * @param  {String}        returnUrl  callback url after finishing signing
   * @return {Promise}       promise of the request result
   */
  getDocuSignUrl(templateId, returnUrl)

  /**
   * Agree a term
   * @param  {Number|String} termId id of the term
   * @return {Promise}       promise of the request result
   */
  agreeTerm(termId)
}

/**
 * Returns a new or existing terms service.
 * @param {String} tokenV2 Optional. Auth token for Topcoder API v2.
 * @return {TermsService} Terms service object
 */
let lastInstance = null;
export function getService(tokenV2)
