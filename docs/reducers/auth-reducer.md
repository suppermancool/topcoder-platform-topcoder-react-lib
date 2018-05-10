# auth reducer
Reducer for Authentication.

Reducer for state.auth.

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 *
 * auth.tokenV2: auth token
 *
 * auth.tokenV3: The V3 auth token
 *
 * @return Promise which resolves to the new reducer.
 */
export function factory(options = {})
