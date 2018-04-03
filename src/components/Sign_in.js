import React from 'react';
import styled from 'styled-components';
import { browserHistory } from 'react-router';

const DivCo = styled.div`
width: 32%;
padding-top: 20px;
padding-bottom: 20px;
margin: auto;
border: 1px rgb(224, 226, 227) solid;
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.3) 20px 20px 20px;
background: rgba(255, 255, 255, 0.8);
font-family: Mothproofscriptregular;
font-size: 90%;
`;

const Text = styled.div`
display: flex;
justify-content: center;
font-size: 115%;
`;


class Sign_in extends React.Component{
    render(){
        return(
            <DivCo>
               <Text> Vous avez compte ? <a onClick={e => browserHistory.push('/Connexion')} >Connectez-Vous  </a></Text>
           </DivCo>
           
        )
    }
}

export default Sign_in;

           