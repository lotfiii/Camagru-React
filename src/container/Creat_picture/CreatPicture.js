import React from 'react';
import styled from 'styled-components';
import { reduxForm } from "redux-form";
import Logo from '../../components/logo';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

const DivInput = styled.div`
margin-top: 10px;
display: flex;
    flex-direction: column; cf
`;

const Text = styled.div`
font-size: 
`;

const Input = styled.input``;

const BlocPhoto = styled.div`
display: flex;
justify-content: ${props => props.centre ? "center" : "space-between"};
`;

const Lolo = styled.div`
margin-top: 20px;
background: rgba(180, 190, 196, 0.3);
height: 400px;
width: 400px;
border: 2px rgb(0, 0, 0) solid;
border-radius: 10px; 
`;

const Image = styled.img`
src : ${props => props.src};
border-radius: 8px;
`;

const Button = styled.button`
dipsplay: flex;
justify-content: center;
background: rgb(59, 89, 152);
color: white;
border: 1px rgb(59, 89, 152) solid;
border-radius: 3px;
width: ${props => props.long ? '90%' : '40%'};
`;

const Centre = styled.div`
margin-top: 30px;
display: flex;
justify-content: center;
height: 32px;
`;

const Input1 = styled.input` 
width: 120px;
`;

const formConfig = {
    form: "CreatImgForm",
    fields: ["titre", "image"]
}
class Picture extends React.Component{
    render(){
        const {fields, handleSubmit} = this.props
        console.log(this.props)
        return(
            <div>
                <Logo/>
            <form   >
                <DivInput>
                    <Text> Titre de la photo</Text>
                    <Input type="text" {...fields.titre}
                    />
                </DivInput>
                <BlocPhoto centre> 
                    <Lolo>
                        <Image  width="400" height="396"/>
                        <Input1
                        type="file"  {...fields.image}
                    />
                    </Lolo> 
                </BlocPhoto>
                <Centre><Button type="submit">Ajouter Photo</Button></Centre>    
            </form>
            </div>
        )
    }
}
/* 
function mapDisptachToProps(dispatch){
    console.log('creat picture', creatPicture)
    return bindActionCreators({creatPicture}, dispatch)
}
*/
export default  connect(null, null)(reduxForm(formConfig)(Picture));