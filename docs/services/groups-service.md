# groups service
Service for groups.

 * Service for communication with group-related part of Topcoder API.
 *
 * NOTE: Through this file, and in related contexts, by loading a user group,
 * or user groups data, we refer to loading the information about descendant
 * user groups; i.e. given some user group(s) we speak about loading the sub-
 * three of related child groups.
 *
 * By group maps we refer to the object having group IDs as the keys, and
 * group data objects as the values. Any group object included into a group map
 * has its "subGroups" array (if present) replaced by "subGroupIds", that lists
 * only the IDs of immediate child groups; actual child group objects from
 * "subGroups" are recursively added to the top level of the group map.
 * Also each group in the group map is timestamped to keep caching of
 * the loaded data.


/**
 * Given an array of IDs (or a single ID) of user groups, and a map of known
 * user groups, it returns the array including all specified user groups, and
 * all their known descendant groups.
 * @param {String|String[]} groupIds
 * @param {Object} knownGroups
 * @return {String[]}
 */
export function addDescendantGroups(groupIds, knownGroups)

/**
 * Splits the given list of group IDs into the lists of groups being loaded,
 * loaded, and others.
 * @param {String|String[]} groupIds ID, or an array of IDs, of the group(s) we
 *  are interested in.
 * @param {Object} knownGroups Optional. The map of already known groups (some
 *  of them may be outdated, though). This should be of the same format as the
 *  object on "groups.groups" path of the Redux store. Defaults to empty object.
 * @param {Object} loadingGroups Optional. Set of groups beign loaded now. This
 *  should be of the same format as the object on "groups.loading" path of the
 *  Redux store. Defaults to empty object.
 * @return {Object} Resulting object may hold four arrays with group IDs from
 *  "groupIds" (empty arrays will not be included into the result object):
 *  - "loaded" - the groups that are present in "knownGroups" and are not
 *    outdated;
 *  - "loading" - the groups that are not present in "knownGroups" (or present,
 *    but outdated); but they are already being loaded;
 *  - "missing" - the groups that are not present in "knownGroups"
 *    (or outdated), and are not being loaded.
 *  - "unknown" - the groups that are absent in "knownGroups" map.
 */
export function checkGroupsStatus(groupIds, knownGroups = {}, loadingGroups = {})

/**
 * Returns "true" if "userGroups" arrays includes any group specified by
 * "groupIds", or any group descendant from a group specified by "groupIds".
 * The is the map of known groups
 * @param {String|String[]} groupIds
 * @param {Object[]|String[]} userGroups Array of user's groups or their IDs.
 * @param {Object} knownGroups Map of known groups.
 * @return {Boolean}
 */
export function checkUserGroups(groupIds, userGroups, knownGroups)


/**
 * Private. Handles given response from the groups API.
 * @param {Object} response
 * @return {Promise} On success resolves to the data fetched from the API.
 */
function handleApiResponse(response)

/**
 * Private. Merges given user group (possibly a tree of user groups) into
 * groups map. This function intended only for internal use inside this module,
 * as it may mutate both arguments (hence, the corresponding ESLint rule is
 * disabled within this function), thus should be used only where it is safe.
 * For external use a similar function is provided by "utils/tc" module.
 * @param {Object} groups
 * @param {Object} group
 */
function mergeGroup(groups, group)

class GroupService {
  /**
   * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
   */
  constructor(tokenV3)

  /**
   * Adds new member to the group.
   * @param {String} groupId
   * @param {String} memberId
   * @param {String} membershipType
   * @return {Promise}
   */
  addMember(groupId, memberId, membershipType)

  /**
   * Gets detailed information about the group.
   *
   * Notice, when "withSubGroups" argument is true (default) this method returns
   * a tree of group data objects, connected via their "subGroups" fields.
   * getMap(..) method below wraps this functionality in a more practical way!
   *
   * @param {String} groupId
   * @param {Boolean} withSubGroups Optional. Defaults to true. Specifies,
   *  whether the response should information about sub-groups, if any.
   * @return {Promise} On success resolves to the group data object.
   */
  getGroup(groupId, withSubGroups = true)

  /**
   * Gets detailed information about the specified user group(s) and their
   * descendant sub-groups.
   *
   * @param {String|String[]} groupIds Group ID, or an array of group IDs,
   *  to query from Topcoder API.
   * @return {Promise} Resolves to the group map. That object will have group
   *  IDs as the keys, and corresponding group data objects as the values. In
   *  each group data object the "subGroups" field, if any, will be replaced by
   * "subGroupIds" (array of IDs of the immediate child groups), and the actual
   *  data on the sub-groups will be moved to the root of the map object.
   *  It also timestamps each fetched group.
   */
  getGroupMap(groupIds)

  /**
   * Gets group members.
   * @param {String} groupId
   * @return {Promise} On sucess resolves to the array of member objects,
   *  which include user IDs, membership time, and some bookkeeping data.
   */
  getMembers(groupId)

  /**
   * Gets the number of members in the group.
   * @param {Number|String} groupId ID of the group.
   * @param {Boolean} withSubGroups Optional. When this flag is set, the count
   *  will include members of sub-groups of the specified group.
   * @return {Promise} Resolves to the members count.
   */
  async getMembersCount(groupId, withSubGroups)
}

/**
 * Returns a new or existing instance of challenge service, which works with
 * the specified auth token.
 * @param {String} tokenV3 Optional. Topcoder API v3 auth token.
 * @return {GroupService} Instance of the service.
 */
let lastInstance = null;
export function getService(tokenV3)


