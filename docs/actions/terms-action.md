# terms action
Action for terms.

Terms specific actions.

/**
 * Payload creator for TERMS/GET_TERMS_DONE action,
 * which fetch terms of the specified entity.
 * @param {Object}  entity       entity object
 * @param {String}  entity.type  entity type ['challenge'||'community']
 * @param {String}  entity.id    entity id
 * @param {Object}  tokens       object with tokenV2 and tokenV3 properties
 * @param {Boolean} mockAgreed   if true, then all terms will be mocked as agreed
 *                               this only makes effect if MOCK_TERMS_SERVICE is true
 *                               and the only purpose of this param is testing terms
 * @return {Promise}
 */
function getTermsDone(entity, tokens, mockAgreed)

/**
 * Payload creator for TERMS/CHECK_STATUS_DONE
 * which will check if all terms of specified entity have been agreed,
 *
 * NOTE:
 * As in some reason backend does not saves immediately that DocuSign term has been agreed
 * In case not all terms were agreed we try again after some delay.
 * Maximum quantity attempts and delay between attempts are configured in
 * MAX_ATTEMPTS and TIME_OUT
 *
 * TODO:
 * Looks like the bug described above was caused by server caching responses
 * at least for getTermDetails which is used by getCommunityTerms.
 * To fix it I've added nocache random value param in the terms service
 * for getTermDetails and it looks like works so we get results immediately.
 * This still have to be tested for challenges as they use another endpoint
 * in method getChallengeTerms.
 * Also terms which use third part service DocuSign has to be also tested prior
 * to removing multiple checks.
 * In case their agreed status is updated immediately, this code
 * has to simplified and don't make several attempts, only one.
 *
 * @param {Object} entity       entity object
 * @param {String} entity.type  entity type ['challenge'||'community']
 * @param {String} entity.id    entity id
 * @param {Object} tokens       object with tokenV2 and tokenV3 properties
 *
 * @return {Promise}           promise of request result
 */
function checkStatusDone(entity, tokens) 

/**
 * Payload creator for TERMS/GET_TERM_DETAILS_INIT action,
 * which marks that we are about to fetch details of the specified term.
 * If any details for another term are currently being fetched,
 * they will be silently discarded.
 * @param {Number|String} termId
 * @return {String}
 */
function getTermDetailsInit(termId)

/**
 * Payload creator for TERMS/GET_TERM_DETAILS_DONE action,
 * which fetch details of the specified term.
 * @param {Number|String} termId
 * @param {String} tokenV2
 * @return {Promise}
 */
function getTermDetailsDone(termId, tokenV2) 

/**
 * Payload creator for TERMS/GET_DOCU_SIGN_URL_INIT
 * @param  {Number|String} templateId id of document template to sign
 * @return {String} string format of the id
 */
function getDocuSignUrlInit(templateId)

/**
 * Payload creator for TERMS/GET_DOCU_SIGN_URL_DONE
 * which generate the url of DoduSign term
 * @param  {Number|String} templateId id of document template to sign
 * @param  {String} returnUrl  callback url after finishing singing
 * @param  {String} tokenV2    auth token
 * @return {Promise}           promise of request result
 */
function getDocuSignUrlDone(templateId, returnUrl, tokenV2)

/**
 * Payload creator for TERMS/AGREE_TERM_INIT
 * @param  {Number|String} termId id of term
 * @return {String}        string format of the id
 */
function agreeTermInit(termId)

/**
 * Payload creator for TERMS/AGREE_TERM_DONE
 * @param  {Number|String} termId id of term
 * @param  {String} tokenV2    auth token
 * @return {Promise}           promise of request result
 */
function agreeTermDone(termId, tokenV2)

/**
 * Payload creator for the action that opens the specified terms modal.
 * @param {String} modalInstanceUuid ID of the terms modal instance to be
 *  opened. Any other instances of terms modals present in the page will be
 *  closed automatically by this action, as it is not safe to open multiple
 *  modals, (and makes no sense in current implementation).
 * @param {???} selectedTerm Optional. Selected term. It was not documented by
 *  author of related code, thus the exact value is not clear.
 * @return {Object} Action payload.
 */
function openTermsModal(modalInstanceUuid, selectedTerm)

/**
 * Payload creator for the action that closes the specified terms modal.
 * @param {String} modalInstanceUuid ID of the terms modal instance to be
 *  closed. If another terms modal is open, it won't be affected.
 * @return {String} Action payload.
 */
function closeTermsModal(modalInstanceUuid)