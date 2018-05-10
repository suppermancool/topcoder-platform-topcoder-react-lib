# user settings service
Service for User Settings.

 User Settings service. Corresponding part of the backend is implemented as a
 separate Heroku App, which is set up only for prod. Currently, we use it to
 save user-defined filters in the challenge search.


export default class UserSettings {
  /**
   * @param {String} tokenV2
   */
  constructor(tokenV2)

  /**
   * Removes the filter specified by ID.
   * @param {String} id
   * @return {Promise}
   */
  deleteFilter(id)

  /**
   * Gets saved filters.
   * @return {Promise}
   */
  getFilters()

  /**
   * Saves filter.
   * @param {String} name
   * @param {Object} filter
   */
  saveFilter(name, filter)

  /**
   * Updates filter.
   * @param {String} id
   * @param {String} name
   * @param {Object} filter
   * @return {Promise}
   */
  updateFilter(id, name, filter)
}

/**
 * Returns a new or existing instance of UserSettings service.
 * @param {String} tokenV2 Topcoder auth token v2.
 * @return {UserSettings}
 */
let lastUserSettings = null;
export function getUserSettingsService(tokenV2)