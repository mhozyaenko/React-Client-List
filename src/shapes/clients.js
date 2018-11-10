import PropTypes from 'prop-types';

const clientShape = PropTypes.shape({
    id: PropTypes.string,
    general: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        avatar: PropTypes.string,
    }),
    job: PropTypes.shape({
        company: PropTypes.string,
        title: PropTypes.string,
    }),
    contact: PropTypes.shape({
        email: PropTypes.string.isRequired,
        phone: PropTypes.string,
    }),
    address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        zipCode: PropTypes.string,
        country: PropTypes.string,
    })
});

export default clientShape;