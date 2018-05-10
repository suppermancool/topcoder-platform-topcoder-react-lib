# tc util
Codes of the Topcoder communities.


/**
 * Given options object it extracts 'auth.tokenV2' and 'auth.tokenV3',
 * if they are present there.
 * @param {Object} options Options object. For convenience, it is allowed to
 *  call this function without "options" argument (will result in empty tokens).
 * @return {Object} It will contain two string fields: tokenV2 and tokenV3.
 *  These strings will be empty if corresponding tokens are absent.
 */
export function getOptionTokens(options)

/**
 * Gets payload from a standard success response from TC API v3; or throws
 * an error in case of a failure response.
 * @param {Object} res
 * @return {Promise} Resolves to the payload.
 */
export async function getApiResponsePayloadV3(res)
