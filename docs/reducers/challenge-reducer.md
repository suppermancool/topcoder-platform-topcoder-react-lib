# challenge reducer
Reducer for challenge.

Reducer for state.challenge.

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 *
 * challenge.challengeDetails.id: id of challenge
 *
 * challenge.challengeDetails.mySubmission: do i have submission on the challenge
 *
 * @return Promise which resolves to the new reducer.
 */
export function factory(options = {})
