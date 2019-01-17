import React, {Component} from 'react';
import ls from 'local-storage';
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
        const filterData = this.state.data.filter( data => {
            return data.username.toLowerCase().includes(e.target.value.toLowerCase())
        });
        this.setState({
            filteredData: filterData,
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