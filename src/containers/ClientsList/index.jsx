import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as clientsActions from '../../store/clients/actions.js';
import clientShape from '../../shapes/clients';
import { getCurrentClient, getFilteredClientsList} from '../../store/clients/selectors';
import './styles.scss';


class ClientsList extends React.PureComponent {
    static propTypes = {
        clientsList: PropTypes.arrayOf(clientShape).isRequired,
        onClick: PropTypes.func,
        currentClient: clientShape,
    };
    static defaultProps = {
        onClick: null,
        currentClient: null,
    };
    handleClick = ({target }) => {
      const {setCurrentClient} = this.props;
        setCurrentClient(target.closest('li').dataset.id);
           };
     render() {
     const {clientsList, currentClient} = this.props;
     return (
         <ul className="ClientsList">
             {clientsList.map(({general, job, id}) =>{
                 const listItemClassName = classNames('ClientsList-item', {
                       isActive: id === currentClient.id,
                 });
                 return (
                     <li className={listItemClassName} key = {id} onClick={this.handleClick} data-id = {id}   >
                         <img src={general.avatar} alt=""/>
                         <div>
                             <strong>{general.lastName}</strong>
                             <p> {general.firstName}</p>
                             <i>{job.title}</i>
                         </div>
                     </li>
                 );
             }
             )}
         </ul>
     );
         }
};
const mapStateToProps = state => ({
             clientsList: getFilteredClientsList(state),
             currentClient: getCurrentClient(state)

                      });
export default connect(mapStateToProps, clientsActions)(ClientsList);