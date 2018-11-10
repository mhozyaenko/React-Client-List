import {fromJS} from 'immutable';
import UUID from 'uuid';
import {
    CLIENTS_FETCH_LIST_SUCCESS,
    CLIENTS_SET_CURRENT_CLIENT,
    CLIENTS_ADD_ID,
    CLIENTS_UPDATE_SEARCH_QUERY
} from './actions';

const initialState = fromJS({
    list: [],
    currentClient: {

    },
    searchQuery: '',
});

export default (state = initialState, action) => {
    switch (action.type) {
        case CLIENTS_FETCH_LIST_SUCCESS: {
            return state.set('list', fromJS(action.payload));
                   }
        case CLIENTS_ADD_ID: {
            return state.updateIn(['list'], list => list.map(client=> client.set('id', UUID())))
        }
        case CLIENTS_SET_CURRENT_CLIENT: {
            const currentClient = state.get('list').findLast(client => client.get('id') === action.payload);
            return state.set('currentClient', currentClient);
        }
        case CLIENTS_UPDATE_SEARCH_QUERY: {
            return state.set('searchQuery', action.payload);
        }
        default: {
            return state;
        }
    }
};