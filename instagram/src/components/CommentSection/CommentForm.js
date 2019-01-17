import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'reactstrap';
import styled from 'styled-components';

const CommentFormWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    border-top: 1px solid #aaa;
    padding-top: 1%;
`

const CommentForm = (props) => {
    return (
        <Form onSubmit={props.sumbit}>
            <CommentFormWrapper>
                <Input 
                    placeholder="Add a comment..." 
                    value={props.value} 
                    onChange={props.onValueChange}
                    style={{border: "none" , padding: "0"}}
                />
                <i className="fas fa-ellipsis-h"></i>
            </CommentFormWrapper>
        </Form>
    )
}

CommentForm.propTypes = {
    value: PropTypes.string,  
    onValueChange: PropTypes.func,
    sumbit: PropTypes.func    
};

export default CommentForm;