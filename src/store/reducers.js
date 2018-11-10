import { combineReducers } from 'redux';

import clients from './clients/reducers';

export default combineReducers({
    clients,
});