import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../../components/logo' ;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InfoUser, UpdateUser } from '../../actions/index';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';


const Wrapper = styled.section`
width: 32%;
border: 1px rgb(224, 226, 227) solid;
margin: auto;
padding-bottom: 20px;
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.3) 20px 20px 20px;
background: rgba(255, 255, 255, 0.8);
font-family: Mothproofscriptregular;
font-size: 90%;
`;

const Div = styled.div`
display: flex;
justify-content: center;
//margin-top: 15px;
margin-top: ${props => props.top ? '30px' : '15px'};;
`;

const Text = styled.div`
font-family: Mothproofscriptregular;
font-size: 130%;
color: ${props => props.blue ? 'rgb(59, 89, 152)' : 'rgb(0, 0, 0)'};;
font-weight: ${props => props.bold ? 'bold' : 'normal'};;

`;

const Input = styled.input`
border: 1px rgb(224, 226, 227) solid;
border-radius: 4px;
width: 70%;
height : 32px;
`;

const Button = styled.button`
background: rgb(59, 89, 152);
color: white;
border: 1px rgb(59, 89, 152) solid;
border-radius: 3px;
width: ${props => props.long ? '90%' : '40%'};
`;

const Register = styled.div`
font-size: 80%;
font-style: italic;
display: flex;
justify-content: center;
margin-top: 10px;
`;

const formConfig = {
    form: "creatConnexionForm",
    fields: ['pseudo','password'],
    //validate
}
class Connexion extends React.Component{
    render(){
        const {fields, handleSubmit, errors} = this.props
        console.log("error: ", errors)
        return(
            <div>
                <Logo/>
                <Wrapper>
                    <Div> <Text blue bold> Se connecter à Camagru</Text> </Div>
                    <Div>
                        <Text>Pseudo:</Text>
                    </Div>
                    <Div>
                        <Input type="text" placeholder="Entrer Pseudo" {...fields.pseudo} />
                    </Div>
                    <Div>
                        <Text>Password:</Text>
                    </Div>
                    <Div>
                        <Input type="password" placeholder="Entrer password" {...fields.password} />
                    </Div>
                    <Div top>
                    <Button long type="submit" disabled={this.props.invalid} > Connexion </Button>
                    </Div>
                    <Register> <a onClick={e => browserHistory.push('/')} > s'inscrire sur Camagru  </a></Register>
                </Wrapper>
            </div>
                                 
        )
    }
}

export default connect(null, null)(reduxForm(formConfig)(Connexion));