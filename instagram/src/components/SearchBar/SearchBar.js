import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import { LrgIcon, ActionIcon } from '../ReusableStyles/ReusableStyles';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2%;
    background-color: #FFFFFF;
`

const HeaderTitle = styled.h1`
    font-family: 'Oleo Script Swash Caps', cursive;
    font-size: 1.8em;
    margin: 0;
`
const HeaderSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    @media (max-width: 800px) {
        width: 28%;
        @media (max-width: 600px) {
            width: 40%;
        }
    }
`
const HeaderSearch = styled.div`
    font-family: 'FontAwesome', 'Open Sans', sans-serif;
    width: 30%;
    background: #FAFAFA;
    @media (max-width: 600px) {
        width: 100%;
        order: 1;
        margin: 5% 0 0;
    }
`
const Divider = styled.div`
    border-right: 1px solid #aaa;
`

const SearchBar = (props) => {
    return (
        <Header>
            <HeaderSection>
                <LrgIcon className="fas fa-camera-retro"></LrgIcon>
                <Divider>&nbsp;</Divider>
                <HeaderTitle>Instaclone</HeaderTitle>
            </HeaderSection>

            <HeaderSearch>
                <Input 
                    placeholder="&#xF002; Search" 
                    onChange={props.updateSearch}
                    value={props.inputValue}
                    style={{textAlign: "center"}}
                />
            </HeaderSearch>

            <HeaderSection>
                <LrgIcon className="far fa-compass header-icon"></LrgIcon>
                <LrgIcon className="far fa-heart header-icon"></LrgIcon>
                <ActionIcon>
                    <LrgIcon className="far fa-user header-icon" onClick={props.logout}></LrgIcon>
                </ActionIcon>
            </HeaderSection>
        </Header>
    );
}

SearchBar.propTypes = {
    inputValue: PropTypes.string,  
    updateSearch: PropTypes.func    
};

export default SearchBar;