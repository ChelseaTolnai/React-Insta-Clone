import React from 'react';
import PropTypes from 'prop-types';
import { CardText } from 'reactstrap';
import { Username, ActionIcon } from '../ReusableStyles/ReusableStyles'
import styled from 'styled-components'

const CommentTextWrapper = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`

const CommentDeleteIcon = styled.span`
    font-size: .6em;
    color: #aaa;
`

const Comments = (props) => {
    return (
        <div>
            {props.comments.map( (comment) => {
                return (
                    <CardText key={comment.text} id={comment.dateID} style={{marginBottom: "2%"}}>
                        <CommentTextWrapper>
                            <span>
                                <Username>{comment.username} </Username>
                                {comment.text}
                            </span>
                            {comment.username === props.user
                                ? <CommentDeleteIcon><ActionIcon className="fas fa-times" onClick={props.delete} ></ActionIcon></CommentDeleteIcon>
                                : null
                            }
                        </CommentTextWrapper>
                    </CardText>
                )}
            )}
        </div>
    )
}

Comments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
        dateID: PropTypes.string,
    }))   ,
    user: PropTypes.string,
    delete: PropTypes.func
};

export default Comments;