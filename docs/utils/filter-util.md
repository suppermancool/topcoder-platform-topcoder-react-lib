# filter util
Util for Filter.

 
/**
 * Here are many similiar filerBy..(challenge, state) functions. Each of them
 * checks whether the given challenge fulfills the corresponding filtering rule
 * from the filter state object, and returns true or false depending on it.
 */
function filterByEndDate(challenge, state)
function filterByGroupIds(challenge, state)
function filterByRegistrationOpen(challenge, state)

/**
 * Filter function for Review Opportunity Type, will be used internally in filter.js
 * @param {Object} opp Review Opportunity object
 * @param {Object} state Filter state
 * @return {Boolean} True if opp satifies the filter
 */
function filterByReviewOpportunityType(opp, state)
function filterByStartDate(challenge, state)
function filterByStarted(challenge, state)
function filterByStatus(challenge, state)
function filterBySubtracks(challenge, state)
function filterByTags(challenge, state)
function filterByText(challenge, state)
function filterByTrack(challenge, state)
function filterByUpcoming(challenge, state)
function filterByUsers(challenge, state)

/**
 * Returns clone of the state with the specified competition track added.
 * @param {Object} state
 * @param {String} track
 * @return {Object} Resulting state.
 */
export function addTrack(state, track)

/**
 * Generates filter function for the state.
 * @param {Object} state
 * @return {Function}
 */
export function getFilterFunction(state)

/**
 * Generates a Review Opportunities filter function for the provided filter state.
 * @param {Object} state
 * @return {Function}
 */
export function getReviewOpportunitiesFilterFunction(state)

/* ************************************************************************** */
/* Below is a group of functions that allow to combine multiple challenge
 * filters together. If you are not adding a new filter functionality, just
 * look for the exported combine(..) function.
 *
 * All other helper functions in this section take two filter state objects as
 * arguments, and combine some of the filter rules, merging the resulting one
 * into the first filter state object.
 */

/* NOTE: Current implementation ignores plenty of rules when combining filters.
 * It is fine for the only current use case: we use combine just before calling
 * to mapToBackend(..) function, to map several frontend filters to the
 * matching backend one. The way mapToBackend(..) works, this ignoring of
 * some rules is not a big deal (resulting backend filter will be not that
 * specific, as it probably could be, but due to the current api limitations
 * we cannot be too specific anyway). If you are going to use this for anything
 * else - thing twice what are you doing? If you need it for filtering, it is
 * just a lot easier to filter by each frontend filter in turns, rather than
 * combine them into a single filter. */

/* This ESLint rule is disabled for combineXXX(..) functions, as they are
 * intended to be used only internally, with a newly constructed object
 * passed in as the first argument (i.e. we take care that there is no
 * side-effects to mutate it within this module, and these functions
 * are not exported outside of the module). */
/* eslint-disable no-param-reassign */

function combineArrayRules(a, b, ruleName, or = false)
function combineEndDate(a, b)
function combineStartDate(a, b)
function combineTracks(a, b)

/* eslint-enable no-param-reassign */

/**
 * Combines multiple filter state objects together. Resulting state describes
 * the filter, which matches only those challenges that satisfy each of the
 * filters passed in as arguments.
 *
 * The main intended use of this function is to combine multiple frontend
 * challenge filters into a single one, that can be mapped into the
 * corresponding backend filter by mapToBackend(..) function.
 *
 * @param {Object} filters Input filter state objects to combine.
 * @return {Object}
 */
export function combine(...filters)

/* ************************************************************************** */
/* Below is a group of function that allow to map a frontend filter into the
 * corresponding backend (api) one. If you are not adding a new filter
 * functionality, just look for the exported mapToBackend(..) function. */

/**
 * Maps the frontend challenge filter into the corresponding backend (api) one.
 * As there is no 1:1 match between the frontend and backend challenge filters,
 * the resulting backend filter is always equal or broader than the given
 * frontend one; i.e. any challenge that satisfies the original frontend filter
 * will pass the backend one, though some of the challenges that pass the
 * backend filter may fail the frontend one.
 *
 * It is assumed that this function will help us to load challenges from the
 * backend more specifically, though it does not prevent as from the need
 * always perform the final filtering at the frontend side.
 *
 * @param {Object} filter
 * @return {Object}
 */
export function mapToBackend(filter)

/**
 * Returns clone of the state with the specified competition track removed.
 * @param {Object} state
 * @param {String} track
 * @return {Object} Resulting state.
 */
export function removeTrack(state, track)

/**
 * Clone the state and sets the end date.
 * @param {Object} state
 * @param {String} date
 * @return {Object}
 */
export function setEndDate(state, date)

/**
 * Clones the state and sets the review opportunity type.
 * @param {Object} state
 * @param {Array} reviewOpportunityType Possible values found in utils/tc REVIEW_OPPORTUNITY_TYPES
 * @return {Object}
 */
export function setReviewOpportunityType(state, reviewOpportunityType)

/**
 * Clones the state and sets the start date.
 * @param {Object} state
 * @param {String} date ISO date string.
 * @return {Object}
 */
export function setStartDate(state, date)

/**
 * Clones the state and sets the subtracks.
 * @param {Object} state
 * @param {Array} subtracks
 * @return {Object}
 */
export function setSubtracks(state, subtracks)

/**
 * Clones the state and sets the tags.
 * @param {Object} state
 * @param {Array} tags String array.
 * @return {Object}
 */
export function setTags(state, tags)

/**
 * Clones fitler state and sets the free-text string for the filtering by
 * challenge name and tags. To clear the string set it to anything evaluating
 * to falst (empty string, null, undefined).
 * @param {Object} state
 * @param {String} text
 * @return {Object} Resulting string.
 */
export function setText(state, text)