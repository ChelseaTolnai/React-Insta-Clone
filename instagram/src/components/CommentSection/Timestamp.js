import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { CardText } from 'reactstrap';

const Timestamp = (props) => {
    return (
        <CardText>
            <small className="text-muted">
                {moment(props.timestamp).fromNow()}
            </small> 
        </CardText> 
    )
}

Timestamp.propTypes = {
    timestamp: PropTypes.string,  
};

export default Timestamp;