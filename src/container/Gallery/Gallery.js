import React, { Component } from 'react';
import styled from 'styled-components';
//import Logo from '../../components/logo' ;
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import { InfoUser, UpdateUser, ReadUser, imgInfo } from '../../actions/index';
import { browserHistory } from 'react-router';



const ButtonRond = styled.button`
    width:50px;
	height:50px;
    background:black;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33;
	box-shadow:2px 2px 8px #aaa;
	font:bold 13px Arial;
	border-radius:50%;
    color: red;
    outline: 0px !important;
    position: fixed;
`;

const DivButton = styled.div`
margin-top: 24%;
margin-left: 85%;
//position: fixed;
`;

const H1 = styled.div`
font-size: 100px;
color: red;
`;

class Gallery extends React.Component{
    render(){
        return(
            <div>
           <H1>Gallery Photo</H1>
            <DivButton>
                     <ButtonRond onClick={e => browserHistory.push('/Creat-picture')}>+</ButtonRond>
            </DivButton>
            </div>
        )
    }
}

export default Gallery;