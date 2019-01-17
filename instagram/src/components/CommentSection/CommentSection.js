import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ls from 'local-storage';
import Likes from './Likes';
import Comments from './Comments';
import Timestamp from './Timestamp';
import CommentForm from './CommentForm';

class CommentSection extends Component {
    
    constructor(props) {
        super(props);
        const commentArray = ls.get(this.props.keyID) 
            ? (ls.get(this.props.keyID)) 
            : props.comments;
        const user = ls.get('user');
        this.state = {
            likes: props.likes,
            isLikeOff: true,
            comments: commentArray,
            inputValue: "",
            user: user.username,
        }
    }

    componentDidMount() {
        ls.set(this.props.keyID, this.state.comments);
        this.setState({comments: ls.get(this.props.keyID)})
    }

    handleClickLike = () => {
        this.state.isLikeOff ? 
            this.setState(state => ({
                likes: ++state.likes,
                isLikeOff: !state.isLikeOff 
            })) : 
            this.setState(state => ({
                likes: --state.likes,
                isLikeOff: !state.isLikeOff 
            }))
    }

    handleValueChange = (e) => {
        this.setState({inputValue: e.target.value});
    }

    addNewComment = (e) => {
        e.preventDefault();
        const comment = {
            username: this.state.user,
            text: this.state.inputValue,
            dateID: Date.now().toString(),
        }
        this.state.comments.push(comment);
        ls.set(this.props.keyID, this.state.comments);
        this.setState({
            comments: ls.get(this.props.keyID),
            inputValue: ""
        });
    }

    removeComment = (e) => {
        const target = e.target.parentNode.parentNode.parentNode.getAttribute('id');
        const newComments = this.state.comments.filter( comment => comment.dateID !== target);
        ls.set(this.props.keyID, newComments);
        this.setState({
            comments: ls.get(this.props.keyID),
        });
    }

    render() {
        return (
            <div className="CommentSection">

                <Likes 
                    likes={this.state.likes}
                    isLikeOff={this.state.isLikeOff}
                    handleClickLike={this.handleClickLike}
                />

                <Comments 
                    comments={this.state.comments} 
                    user={this.state.user}
                    delete={this.removeComment}
                />

                <Timestamp timestamp={this.props.timestamp}/>

                <CommentForm 
                    sumbit={this.addNewComment} 
                    value={this.state.inputValue} 
                    onValueChange={this.handleValueChange}
                />

            </div>
        );
    }
}

CommentSection.propTypes = {
    keyID: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
};

export default CommentSection;