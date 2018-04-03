import React from 'react';
import styled, { keyframes } from 'styled-components';
import { browserHistory } from 'react-router';


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

class Nav extends React.Component{
    render(){
        return(
                <nav>
                    <NavUl>
                        <NavLi> <A onClick={e => browserHistory.push('/')} > Mes informations</A> </NavLi>
                        <NavLi> <A onClick={e => browserHistory.push('/Gallery')}> Mes Photos</A> </NavLi>
                        <NavLi> <A> Like</A> </NavLi>
                        <NavLi> <A> Deconnexion</A> </NavLi>
                    </NavUl>
                </nav>
        )
    }
}

export default Nav;