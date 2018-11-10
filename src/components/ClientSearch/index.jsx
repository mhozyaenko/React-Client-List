import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ClientSearch = ({ searchQuery, onSearchSubmit, onSearchChange }) => {
    return(
        <form action="/" className="ClientSearch" onSubmit={onSearchSubmit}>
        <input type="search" className="ClientSearch-input" onChange={onSearchChange} value={searchQuery} placeholder = "Search" />

    </form>);
};
ClientSearch.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    onSearchSubmit: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
};
export default ClientSearch;
