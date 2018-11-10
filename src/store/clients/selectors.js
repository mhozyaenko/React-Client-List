import { createSelector } from 'reselect';

export const getClientsList = createSelector(
    state => state.clients.get('list'),
    clientsList => clientsList.toJS(),
);
export const getCurrentClient = createSelector(
    state => state.clients.get('currentClient'),
    currentClient => currentClient.toJS(),
);
export const getClientsSearchQuery = createSelector(
    state => state.clients,
    clientsState => clientsState.get('searchQuery'),
);
export const getFilteredClientsList = createSelector(
    getClientsSearchQuery,
    state => state.clients.get('list'),
    (searchQuery, clientsList) => clientsList
        .filter(client =>
            client.flatten(1).delete('avatar').delete('id').valueSeq().join(' ').toLowerCase().includes(searchQuery)).toJS(),
);