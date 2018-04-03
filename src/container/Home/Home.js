import React from 'react';
import styled from 'styled-components';
import Sign_in from '../../components/Sign_in';
import Register from './Register';
import Logo from '../../components/logo' ;

class Home extends React.Component{
    render(){
        return(
            <div>
                <Logo/>
                <Register/>
                <Sign_in/>
            </div>
        )
    }
}

export default Home;
