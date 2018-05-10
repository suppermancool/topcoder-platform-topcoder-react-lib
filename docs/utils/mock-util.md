# mock util
Util for mock flux standard action creator

Collection of functions useful in unit tests.

 /**
 * Creates a mock Flux Standard Action creator.
 * TODO: Additional options to set errors, etc. should be added.
 * TODO: It may be handier to return action created wrapped into Jest mock
 *  function.
 * @param {String} type Action type.
 * @param {Any} payload Action payload.
 * @param {Any} error Has error or not.
 */
export function mockAction(type, payload, error)