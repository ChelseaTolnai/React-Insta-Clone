import React from 'react';
import PropTypes from 'prop-types';
import { CardText } from 'reactstrap';
import { LrgIcon, ActionIcon } from '../ReusableStyles/ReusableStyles';
import styled from 'styled-components';

const CommentIcon = styled.span`
    margin-left: 2%;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
`

const Likes = (props) => {

    return (
        <div>
            <CardText style={{marginBottom: "2%"}}>
                {props.isLikeOff 
                    ? <ActionIcon><LrgIcon className="far fa-heart" onClick={props.handleClickLike}></LrgIcon></ActionIcon>
                    : <ActionIcon><LrgIcon className="fas fa-heart" onClick={props.handleClickLike}></LrgIcon></ActionIcon>
                }
                <CommentIcon><LrgIcon className="far fa-comment"></LrgIcon></CommentIcon>
            </CardText>
            <CardText style={{fontWeight: "bold", marginBottom: "2%"}}>{props.likes} likes</CardText>
        </div>
    )
    
}

Likes.propTypes = {
    likes: PropTypes.number,  
    isLikeOff: PropTypes.bool,
    handleClickLike: PropTypes.func    
};

export default Likes;