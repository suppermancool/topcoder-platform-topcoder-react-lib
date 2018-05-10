# errors util
Util for Handle Errors.

 
/**
 * The function behaves similarly to javascript alert()
 * it will show a modal error diaglog with styling until the user clicks OK.
 */
export function fireErrorMessage(title, details)

/**
 * clear all error icons
 */
export function clearAllErrorIcons()

/**
 * add error message to error icon in bottom left in the screen.
 * @param id  id of error icon type (ERROR_ICON_TYPES.NETWORK or ERROR_ICON_TYPES.API)
 * @param title icon hover title
 * @param message icon hover message
 */
export function setErrorIcon(id, title, message)

/**
 * clear all error message for an error icon.
 * @param id  id of error icon type to clear
 */
export function clearErrorIcon(id)