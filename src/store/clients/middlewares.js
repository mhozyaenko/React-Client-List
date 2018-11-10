import { CLIENTS_FETCH_LIST, fetchClientsListSuccess, fetchClientsListError, clientsAddID } from './actions';

export default store => next => action => {
    next(action);
    if (action.type === CLIENTS_FETCH_LIST) {
        import('./clients.json')
            .then(result => result.default)
            .then(clientsList => {
                next(fetchClientsListSuccess(clientsList));
                next(clientsAddID(clientsList))
                                 })
            .catch(error => {
                next(fetchClientsListError(error));

            })
             }
};