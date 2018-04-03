import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../../components/logo' ;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InfoUser, UpdateUser, ReadUser, imgInfo } from '../../actions/index';
import { browserHistory } from 'react-router';

const Div = styled.div`
margin-top: 10px;
font-weight: bold;
display: flex;
justify-content: space-between;
`;


const Centre = styled.div`
margin-top: 30px;
display: flex;
justify-content: center;
height: 32px;
`;


const Text = styled.div`
width: ${props => props.little ? '17.5%' : '45%'};;
font-family: Mothproofscriptregular;
font-size: 130%;
`;

const DivInput = styled.div`
display: flex;
justify-content: space-between;
height: 70px;
`;

const Input = styled.input`
border: 1px rgb(224, 226, 227) solid;
border-radius: 4px;
//width: 45%;
height : 32px;
width: ${props => props.img ? '60%' : '45%'};
height: ${props => props.img ? '32px' : '32px'};
`;

const Input1 = styled.input` 
width: ${props => props.img ? '60%' : '45%'};
height: ${props => props.img ? '32px' : '32px'};
`;

const Select = styled.select`
border: 1px rgb(224, 226, 227) solid;
border-radius: 4px;
width: ${props => props.little ? '17.8%' : '45%'};;
height : 32px;
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

const Titre = styled.div`
font-style: italic;
margin-top: 20px;
font-weight: bold;
font-family: Mothproofscriptregular;
font-size: 130%;
display: flex;
justify-content: center;
`;

const DivImage = styled.div`
display: flex;
justify-content: space-between;
`;

const BlocPhoto = styled.div`
display: flex;
justify-content: ${props => props.centre ? "center" : "space-between"};
`;

const Lolo = styled.div`
margin-top: 20px;
background: rgba(180, 190, 196, 0.3);
height: 204px;
width: 200px;
border: 2px rgb(0, 0, 0) solid;
border-radius: 10px; 
`;

const Image = styled.img`
src : ${props => props.src};
border-radius: 8px;
`;
const Label = styled.label`
margin-top: 10px;
border-radius: 5px;
color: rgb(61, 69, 74);
border: 2px solid rgb(0, 0, 0);
font-family: Mothproofscriptregular;
width:70%;
text-align: center;
`;

const NavUl = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: rgba(224, 226, 227, 0.5);
border-radius: 5px;
`;

const NavLi = styled.li`
float: left;
border-right:1px solid #bbb;
:last-child {border-right: none; float: right;}
`;

const A = styled.a`
display: block;
color: black;
text-align: center;
padding: 14px 16px;
text-decoration: none;
:hover {
    background-color: rgb(87,141,210);
    }
`;

const Span = styled.span`
font-style: italic;
font-weight: bold;
font-family: Mothproofscriptregular;
font-size: 120%;
`;

const Descritpion = styled.textarea`
height: 80px;
border: 1.2px solid rgb(0,0,0);
border-radius: 5px;
`;

const DivDescription = styled.div`
display: flex;
flex-direction: column;

`;

const DivEspace= styled.div`
margin-top: 20px;
`;


class Profile extends Component{
    render (){
        let tab = [18];
        for (let i = 19; i<100; i++)
            tab.push(i);

        function isEmpty(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
        if (isEmpty(this.props.user.information))
        {
            this.props.ReadUser(1)
            return(<div></div>)
        }
        else{
            return(
          
            <form onSubmit={e => this.props.UpdateUser(this.props.user, e) } >
                <Logo/>
                <Div>
                    <Text>Pseudo:</Text>
                    <Text>Email:</Text>
                </Div>
                    <DivInput>
                        <Input type="text" 
                        onChange={e => this.props.InfoUser(this.props.user, e.target.value, "pseudo", "information")}  
                        value={this.props.user.information.pseudo}/>
                        <Input type="email" 
                         onChange={e => this.props.InfoUser(this.props.user, e.target.value, "email", "information") }
                         value={this.props.user.information.email} />
                </DivInput> 
                <Div>
                    <Text>Nom:</Text>
                    <Text>Prenom:</Text>
                </Div><DivInput>
                        <Input type="text"  
                        onChange={e => this.props.InfoUser(this.props.user, e.target.value, "nom", "information")}
                        value={this.props.user.information.nom}
                         />
                        <Input type="text"
                         onChange={e => this.props.InfoUser(this.props.user, e.target.value, "prenom", "information") }
                         value={this.props.user.information.prenom} />
                </DivInput>
                <Div>
                    <Text>Orientation-Sexuelle</Text>
                    <Text little>Age</Text>
                    <Text little>Sex</Text>
                </Div>
                <DivInput>
                    <Select  type="text" onChange={e => this.props.InfoUser(this.props.user, e.target.value, "orientation", "information")}  > 
                        <option value={this.props.user.information.orientation} > {this.props.user.information.orientation} </option>
                        <option value="Hetero-sexuel">Hetero-sexuel</option>
                        <option  value="Bi-sexuel">Bi-sexuel</option>
                        <option value="Homo-sexuel">Homo-sexuel</option>
                    </Select>
                    <Select little type="text" onChange={e => this.props.infoUser(this.props.user, e.target.value,"age", "information")}>
                        <option value={this.props.user.information.age}>{this.props.user.information.age}</option>
                                {tab.map(t => {
                                    return <option key={t} value={t}>{t}</option>
                                })}

                    </Select>
                    <Select little type="text" onChange={e => this.props.InfoUser(this.props.user, e.target.value, "sex", "information")} >
                        <option value={this.props.user.information.sex} > {this.props.user.information.sex} </option>
                        <option value="Masculin"> Masculin</option>
                        <option value="Feminin"> Feminin</option>
                    </Select>
                </DivInput>
                <Titre>PHOTOS DE PROFILE</Titre>
                <BlocPhoto centre> 
                    <Lolo>
                        <Image src={this.props.user.picture.avatar} width="196" height="200"/>
                    <Input1 img
                        type="file" 
                        onChange={(e)=>this.props.imgInfo(e, this.props.user, 'avatar')} 
                    />
                    </Lolo> 
                    
                </BlocPhoto>
                <DivDescription>
                    <Span>Décris-toi !</Span>
                    <Descritpion type="textaera" 
                    onChange={e => this.props.InfoUser(this.props.user, e.target.value, "bio", "information") }
                    value={this.props.user.information.bio} >
                    </Descritpion>
                </DivDescription>
                <Centre><Button type="submit">Valider</Button></Centre>
                <DivEspace></DivEspace>
                
                 </form>

            )
        }
    }
}

function mapStateToProps(state){
    console.log("users: ", state.users)
    return{
        user: state.users
    }
}

function mapDisptachToProps(disptach){
    //console.log("action disptach infouser profil: ", InfoUser)
    //console.log("action disptach Update profil: ", UpdateUser)
    return bindActionCreators({InfoUser, UpdateUser, ReadUser, imgInfo}, disptach)
}

export default connect(mapStateToProps,mapDisptachToProps)(Profile);