# billing service
Service for Billing.

The Billing service helps to handle Topcoder billing accounts.


export default class Billing {
  /**
   * Creates a new service.
   * @param {String} tokenV3 Topcoder auth token v3.
   */
  constructor(tokenV3)

  /**
   * Gets billing accounts accessible to service user.
   * @return {Promise} Resolves to the list of billing account objects.
   */
  getUserBillingAccounts()
}

/**
 * Returns a new or existing Billing service for the user specified by token.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Billing} Billing service instance.
 */
let lastInstance = null;
export function getService(tokenV3)

