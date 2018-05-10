# my-submissions-management reducer
Reducer for my submissions management.

This reducer and corresponding actions control the logic for submission management.

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 *
 * empty otions: no need to specify any key in options object
 *
 * @return Promise which resolves to the new reducer.
 */
export function factory(options = {})
