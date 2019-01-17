import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';
import {Username} from '../ReusableStyles/ReusableStyles';

const PostsContainer= styled.div`
    background-color: rgba(255, 255, 255, .5);
    margin: 0 auto;
    padding: 1% 3%;
    width: 90%;
    max-width: 450px;
`
const PostsContainers= styled.div`
    margin: 5% auto;
    width: 100%;
    max-width: 400px;
    height: auto;
`
const Thumbnail = styled.img`
    border-radius: 50%;
    width: 10%;
    margin-right: 2%;
`

const PostContainer = (props) => {
    return (
        <PostsContainer>
            {props.data.map( (data) => {
                return (
                    <PostsContainers key={data.imageUrl}>
                        <Card>
                            <CardBody>
                                <Thumbnail src={data.thumbnailUrl} alt="user-thumbnail"/>
                                <Username className="user">{data.username}</Username>
                            </CardBody>

                            <img src={data.imageUrl} alt="user-posted-photograph" width="100%" />

                            <CardBody>
                                <CommentSection 
                                    keyID={data.imageUrl}
                                    comments={data.comments}
                                    timestamp={data.timestamp}
                                    likes={data.likes}
                                /> 
                            </CardBody>
                        </Card>  
                    </PostsContainers>
                )
            })}
        </PostsContainer>        
    );
}

PostContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array,
    }))
};

export default PostContainer;