import React, {Component} from 'react';
import ls from 'local-storage';
import Fuse from 'fuse.js';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            filteredData: [],
            searchTitle: ""
        }
    }

    componentDidMount() {
        this.setState({ data: dummyData });
    }
    
    handleSearch = (e) => {        
        const options = {
            shouldSort: true,
            tokenize: true,
            threshold: 0.4,
            location: 0,
            distance: 100,
            maxPatternLength: 30,
            minMatchCharLength: 0,
            keys: [
                "username",
                "comments.username",
                "comments.text"
            ]
            };
        const fuse = new Fuse(this.state.data, options);
        const results = fuse.search(e.target.value);
        // const filterData = this.state.data.filter( data => {
        //     return data.username.toLowerCase().includes(e.target.value.toLowerCase())
        // });
        this.setState({
            filteredData: results,
            searchTitle: e.target.value
        });
    }

    handleLogout = () => {
        ls.remove('user');
        window.location.reload();
    }


    render() {
        return (
            <div className="PostsPage">
                <SearchBar 
                    inputValue={this.state.searchTitle}
                    updateSearch={this.handleSearch}
                    logout={this.handleLogout}
                />

                <PostContainer 
                    data={
                        this.state.searchTitle !== "" 
                        ? this.state.filteredData 
                        : this.state.data
                    }
                />
            </div>        
        )
    }
}

export default PostsPage;