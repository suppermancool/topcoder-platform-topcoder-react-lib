/**
 * Reducer for state.terms.
 */
import _ from 'lodash';
import { redux } from 'topcoder-react-utils';
import logger from '../utils/logger';
import actions from '../actions/terms';
import { getOptionTokens } from '../utils/tc';

/**
 * sort terms by agreed status
 * @param  {Array} terms terms to sort
 * @return {Array}       sorted terms
 */
function sortTerms(terms) {
  return _.sortBy(terms, t => (t.agreed ? 0 : 1));
}

/**
 * Handles TERMS/GET_TERMS_DONE action.
 * Note, that it silently discards received terms if the entity of received data
 * mismatches the one stored in loadingTermsForEntity
 * of the state.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetTermsDone(state, action) {
  if (action.error) {
    logger.error('Failed to get terms!', action.payload);
    return {
      ...state,
      terms: [],
      getTermsFailure: action.error,
      loadingTermsForEntity: null,
    };
  }

  if (!_.isEqual(action.payload.entity, state.loadingTermsForEntity)) {
    return state;
  }

  return {
    ...state,
    entity: action.payload.entity,
    terms: sortTerms(action.payload.terms),
    getTermsFailure: false,
    loadingTermsForEntity: null,
  };
}

/**
 * Handles TERMS/GET_TERMS_INIT action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetTermsInit(state, action) {
  return {
    ...state,
    getTermsFailure: false,
    loadingTermsForEntity: action.payload,
    terms: [],
    entity: action.payload,
  };
}

/**
 * Handles TERMS/CHECK_STATUS_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onCheckStatusDone(state, action) {
  if (action.error) {
    logger.error('Check terms status failed!', action.payload);
    return {
      ...state,
      checkingStatus: false,
      checkStatusError: action.payload,
      canRegister: false,
    };
  }
  const canRegister = _.every(action.payload, 'agreed');
  const selectedTerm = _.find(action.payload, t => !t.agreed);
  return {
    ...state,
    checkingStatus: false,
    checkStatusError: false,
    canRegister,
    terms: sortTerms(action.payload),
    selectedTerm,
  };
}

/**
 * Handles TERMS/GET_TERM_DETAILS_DONE action.
 * Note, that it silently discards received details if the termId of received
 * mismatches the one stored in loadingDetailsForTermId field
 * of the state.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetTermDetailsDone(state, action) {
  if (action.error) {
    logger.error('Failed to get term details!', action.payload);
    return {
      ...state,
      details: null,
      getTermDetailsFailure: action.payload,
      loadingDetailsForTermId: '',
    };
  }

  if (_.toString(action.payload.termId) !== state.loadingDetailsForTermId) {
    return state;
  }

  return {
    ...state,
    ...action.payload,
    getTermDetailsFailure: false,
    loadingDetailsForTermId: '',
  };
}

/**
 * Handles TERMS/GET_DOCU_SIGN_URL_DONE action.
 * Note, that it silently discards received url if the templateId of received
 * mismatches the one stored in loadingDocuSignUrl field
 * of the state.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetDocuSignUrlDone(state, action) {
  if (action.error) {
    logger.error('Failed to get docu sign url!', action.payload);
    return {
      ...state,
      docuSignUrl: '',
      getDocuSignUrlFailure: action.payload,
      loadingDocuSignUrl: '',
    };
  }

  if (_.toString(action.payload.templateId) !== state.loadingDocuSignUrl) {
    return state;
  }
  return {
    ...state,
    ...action.payload,
    getDocuSignUrlFailure: false,
    loadingDocuSignUrl: '',
  };
}

/**
 * Handles TERMS/AGREE_TERM_DONE action.
 * Note, that it silently discards received result if the termId of received
 * mismatches the one stored in agreeingTerm field
 * of the state.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onAgreeTermDone(state, action) {
  if (action.error) {
    logger.error('Failed to agree term!', action.payload);
    return {
      ...state,
      agreeTermFailure: action.payload,
      agreeingTerm: '',
    };
  }

  if (_.toString(action.payload.termId) !== state.agreeingTerm) {
    return state;
  }
  if (action.payload.success) {
    const terms = _.cloneDeep(state.terms);
    const term = _.find(terms, ['termsOfUseId', action.payload.termId]);
    term.agreed = true;
    const selectedTerm = _.find(terms, t => !t.agreed);
    return {
      ...state,
      terms,
      selectedTerm,
      agreeTermFailure: false,
      agreeingTerm: '',
    };
  }
  return {
    ...state,
    agreeTermFailure: false,
    agreeingTerm: '',
  };
}

/**
 * Opens the specified instance of terms modal + selects the terms to show in
 * there, although the exact functioning of that functionality was not
 * documented, thus has to be tracked.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onOpenTermsModal(state, action) {
  const { modalInstanceUuid } = action.payload;

  let { selectedTerm } = action.payload;
  if (!selectedTerm) {
    selectedTerm = _.find(state.terms, t => !t.agreed) || state.terms[0];
  }

  return {
    ...state,
    openTermsModalUuid: modalInstanceUuid,
    selectedTerm,
    viewOnly: Boolean(action.payload.selectedTerm),
  };
}

/**
 * Closes the specified terms modal, if necessary.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onCloseTermsModal(state, { payload }) {
  if (payload !== state.openTermsModalUuid
  && state.openTermsModalUuid !== 'ANY') return state;
  return { ...state, openTermsModalUuid: '' };
}

/**
 * Handles TERMS/SIGN_DOCU action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onSignDocu(state, action) {
  const terms = _.cloneDeep(state.terms);
  const term = _.find(terms, ['termsOfUseId', action.payload]);
  term.agreed = true;
  const selectedTerm = _.find(terms, t => !t.agreed);
  return {
    ...state,
    terms,
    selectedTerm,
  };
}

/**
 * Creates a new Profile reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @param {Object} mergeReducers Optional. Reducers to merge.
 * @return {Function} Profile reducer.
 */
function create(initialState, mergeReducers = {}) {
  return redux.handleActions({
    [actions.terms.getTermsInit]: onGetTermsInit,
    [actions.terms.getTermsDone]: onGetTermsDone,
    [actions.terms.getTermDetailsInit]: (state, { payload }) => ({
      ...state,
      getTermDetailsFailure: false,
      loadingDetailsForTermId: payload,
      details: null,
      termId: payload,
    }),
    [actions.terms.getTermDetailsDone]: onGetTermDetailsDone,
    [actions.terms.getDocuSignUrlInit]: (state, { payload }) => ({
      ...state,
      getDocuSignUrlFailure: false,
      loadingDocuSignUrl: payload,
      docuSignUrl: '',
      templateId: payload,
    }),
    [actions.terms.getDocuSignUrlDone]: onGetDocuSignUrlDone,
    [actions.terms.agreeTermInit]: (state, { payload }) => ({
      ...state,
      agreeTermFailure: false,
      agreeingTerm: payload,
    }),
    [actions.terms.agreeTermDone]: onAgreeTermDone,

    [actions.terms.checkStatusInit]: state => ({
      ...state,
      checkingStatus: true,
    }),
    [actions.terms.checkStatusDone]: onCheckStatusDone,
    [actions.terms.openTermsModal]: onOpenTermsModal,
    [actions.terms.closeTermsModal]: onCloseTermsModal,
    [actions.terms.selectTerm]: (state, { payload }) => ({ ...state, selectedTerm: payload }),
    [actions.terms.signDocu]: onSignDocu,
    ...mergeReducers,
  }, _.defaults(initialState, {
    terms: [],
    selectedTerm: null,
  }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 *
 * initialState: The initial state
 *
 * mergeReducers: The additional reducers to merge
 *
 * auth.tokenV2: The V2 auth token
 *
 * auth.tokenV3: The V3 auth token
 *
 * terms.entity.type: The terms entity type ('challenge' or 'community' or 'reviewOpportunity')
 *
 * terms.entity.id: The terms entity id
 *
 * @param {Object} options Optional. Options object for initial state.
 * @return Promise which resolves to the new reducer.
 */
export function factory(options = {}) {
  const entityType = _.get(options, 'terms.entity.type');
  const entityId = _.get(options, 'terms.entity.id');

  const initialState = {
    getTermsFailure: false,
    terms: [],
    openTermsModalUuid: '',
    selectedTerm: null,
    viewOnly: false,
    checkingStatus: false,
    checkStatusError: false,
    canRegister: false,
  } || options.initialState;

  if (entityType && entityId) {
    const { entity } = options.terms;
    const tokens = getOptionTokens(options);
    return redux.resolveAction(actions.terms.getTermsDone(entity, tokens))
      .then((termsDoneAction) => {
        // we have to init first, otherwise results will be ignored by onGetTermsDone
        let state = onGetTermsInit({}, actions.terms.getTermsInit(entity));
        state = onGetTermsDone(state, termsDoneAction);

        return create(_.merge(initialState, state), options.mergeReducers);
      });
  }

  return Promise.resolve(create(initialState, options.mergeReducers));
}

/* Reducer with the default initial state. */
export default create();
