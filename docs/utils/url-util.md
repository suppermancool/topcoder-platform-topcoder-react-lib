# url util
Util for Url.

 Various URL-related functions.


/**
 * If executed client-side (determined in this case by the presence of global
 * window object), this function updates query section of URL; otherwise does
 * nothing.
 * @param {Object} update Specifies the update to make. Current query will be
 *  parsed into JS object, then update will be merged into that object, and the
 *  result will be pushed back to the query section of URL. I.e. to unset some
 *  field of the query, that field should be explicitely mentioned inside
 *  'update' as undefined.
 */
export function updateQuery(update)