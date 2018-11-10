import React from 'react';
import { branch, renderNothing, compose } from 'recompose';
import { connect } from 'react-redux';

import clientShape from '../../shapes/clients';
import { getCurrentClient } from '../../store/clients/selectors';

import './styles.scss';

const enhance = compose(
    connect(store => ({
        client: getCurrentClient(store),
    })),
    branch(({ client }) => typeof client.general === 'undefined', renderNothing),
);

const ClientProfile = ({ client }) => (
    <div className="ClientProfile">
        <img src={client.general.avatar} alt=""/>
        <div className="ClientProfile-info" >
           <strong className="ClientProfile-infoName">{client.general.firstName} {client.general.lastName}</strong>
            <div className="ClientProfile-infoContacts">
                <p>{client.contact.email}</p>
                <p>{client.contact.phone}</p>
            </div>
            <div className="ClientProfile-infoJob">
                <strong>{client.job.company}</strong>
                <p>{client.job.title}</p>
            </div>
            <div className="ClientProfile-infoAddress">
                <p>{client.address.street}, {client.address.city}, {client.address.zipCode}, {client.address.country} </p>
            </div>
        </div>
    </div>
);

ClientProfile.propTypes = {
    client: clientShape.isRequired,
};

export default enhance(ClientProfile);