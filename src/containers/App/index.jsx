import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import * as clientsActions from '../../store/clients/actions';
import './styles.scss';

import ClientsList from '../ClientsList';
import ClientProfile from "../ClientProfile";
import ClientSearchContainer from '../ClientsSearchContainer';

const enhance = compose(
    connect(
        null,
        clientsActions,
    ),
    lifecycle({
        componentDidMount() {
            const { fetchClientsList } = this.props;
            fetchClientsList();
        },
    }),
);

const App = () => (
    <div className="App">
        <div className="App-sideBar">
            <ClientSearchContainer/>
            <ClientsList />
        </div>
       <div className="App-content">
       <ClientProfile/>
       </div>

    </div>
);

export default enhance(App);