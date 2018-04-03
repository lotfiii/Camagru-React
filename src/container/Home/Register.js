import React from 'react';
import styled, { keyframes } from 'styled-components';
import {readUser, test, createUser} from '../../actions/index';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import validate from '../../validation/Validation_Register'


const Wrapper = styled.section`
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

const DivInput = styled.div`
display: flex;
height: ${props => props.error ? '20px' : '30px'};
justify-content: space-around;
`;

const DivEspace = styled.div`
height: 15px;
`;

const Input = styled.input`
width: ${props => props.long ? '90%' : '40%'};
background: white;
border: 1px rgb(224, 226, 227) solid;
border-radius: 3px;
text-align: center;
`;
const Button = styled.button`
background: rgb(59, 89, 152);
color: white;
border: 1px rgb(59, 89, 152) solid;
border-radius: 3px;
width: ${props => props.long ? '90%' : '40%'};
`;

const Text = styled.div`
text-align: center;
font-weight: bold;
font-size: 100%;
opacity: 0.5;

`;

const LogoSpin = keyframes`
  from {transform: rotate(0deg); }
  to {transform: rotate(360deg);}
`;
const Logo = styled.div`
  display: inline-block;
  animation: ${LogoSpin} 2s linear infinite;
  font-size: 1.2rem;
`;

// <Logo>   💅 </Logo>

const formConfig = {
    form: "creatUserForm",
    fields: ['pseudo', 'prenom', 'nom', 'email', 'password', 'confPassword' ],
    //validate: validate       
}

class Register extends React.Component{
    render(){
        //console.log("reduForm: ", this.props)
        const {fields, handleSubmit, errors} = this.props
        //console.log("fields: ", handleSubmit)
        console.log("error: ", errors)
        return(
            <div>
                <Wrapper>
                    <DivInput>
                        <Text>Inscrivez-vous pour voir les photos et vidéos de vos amis.</Text> 
                    </DivInput>
                    <DivInput>
                            <Button long> Se Connecter avec Facebook </Button>    
                        </DivInput>
                        <DivEspace></DivEspace>
                        <DivInput>
                            <Text>-------------------   OU   ------------------- </Text>
                        </DivInput>
                    <form onSubmit={handleSubmit(this.createUser.bind(this))} >
                        <DivInput>
                            <Input long type="text" placeholder="Entrer Pseudo" {...fields.pseudo} /> 
                        </DivInput>
                        <DivInput error>

                        </DivInput>
                        <DivInput>
                            <Input type="texte" placeholder="Entrer Prénom" {...fields.prenom} />
                            <Input  type="texte" placeholder="Entrer Nom"{...fields.nom} />
                        </DivInput>
                        <DivInput error>

                        </DivInput>
                        <DivInput>
                            <Input long type="email" placeholder="Entrer votre adresse e-mail" {...fields.email}  />
                        </DivInput>
                        <DivInput error>

                        </DivInput>
                        <DivInput>
                            <Input type="password" placeholder="Entrer password" {...fields.password} />
                            <Input type="password" placeholder="Confirmer password" {...fields.confPassword} />
                        </DivInput>
                        <DivInput error>

                        </DivInput>
                        <DivEspace></DivEspace>
                        <DivInput>
                            <Button long type="submit" disabled={this.props.invalid} > Inscription </Button>    
                        </DivInput>
                        <DivEspace></DivEspace>
                        <DivInput>
                        <Text>En vous inscrivant, vous acceptez nos Conditions d’utilisation et notre Politique de confidentialité.</Text> 
                    </DivInput>
                    </form>
                </Wrapper>
                <DivEspace></DivEspace>
            </div>
            
        )
    }
    createUser(user){
        this.props.createUser(user)
        browserHistory.push("/Profile")
    }
}


/*function validate(values){   A mettre dans un fichier séparer et faire un apl
    const errors = {};
    if(!values.pseudo){
        errors.pseudo = "Veuillez remplire le pseudo"
    }
    if(!values.prenom){
        errors.prenom = "Veuillez remplire le prenom"
    }
    if(!values.nom){
        errors.nom = "Veuillez remplire le nom"
    }
    return errors;
}
*/ 
function mapDispatchToProps(dispatch){
    console.log("dispatch de creatUser: ", createUser)
    return bindActionCreators({createUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(Register))