export const CLIENTS_FETCH_LIST = 'CLIENTS_FETCH_LIST';
export const CLIENTS_FETCH_LIST_SUCCESS = 'CLIENTS_FETCH_LIST_SUCCESS';
export const CLIENTS_FETCH_LIST_ERROR = 'CLIENTS_FETCH_LIST_ERROR';
export const CLIENTS_SET_CURRENT_CLIENT = 'CLIENTS_SET_CURRENT_CLIENT';
export const CLIENTS_ADD_ID = 'CLIENTS_ADD_ID';
export const CLIENTS_UPDATE_SEARCH_QUERY = 'CLIENTS_UPDATE_SEARCH_QUERY';
export const CLIENTS_APPLY_SEARCH = 'CLIENTS_APPLY_SEARCH';

export const fetchClientsList = payload => ({
    type: CLIENTS_FETCH_LIST,
    payload,
});
export const fetchClientsListSuccess = payload => ({
    type: CLIENTS_FETCH_LIST_SUCCESS,
    payload,
});
export const fetchClientsListError = payload => ({
    type: CLIENTS_FETCH_LIST_ERROR,
    payload,
});
export const setCurrentClient = payload => ({
    type: CLIENTS_SET_CURRENT_CLIENT,
    payload,
});
export const clientsAddID = payload => ({
    type: CLIENTS_ADD_ID,
    payload,
});
export const updateClientsSearchQuery = payload => ({
    type: CLIENTS_UPDATE_SEARCH_QUERY,
    payload,
});
export const applyClientsSearch = payload => ({
    type: CLIENTS_APPLY_SEARCH,
    payload,
});

