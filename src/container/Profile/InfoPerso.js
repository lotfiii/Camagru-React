import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import Nav from '../../components/nav';

class Info_perso extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <Profile/>
            </div>
        )
    }
}

export default Info_perso;
