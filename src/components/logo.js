import React from 'react'
import styled from 'styled-components'

const DivImg = styled.div`
text-align: center;
padding-top: 60px;
`;

const DivTitle = styled.div`
font-family: Mothproofscriptregular;
font-weight: bold;
color: rgb(0, 0, 0);
text-align: center;
font-size: 220%;
margin-bottom: 15px;
`;


const Img = styled.img`
    src: (${props => props.src});
`
const Logo = () => {
    return (
 
        <DivImg>
            <Img src="../../style/logo2.jpg"  />
            <DivTitle>CAMAGRU</DivTitle>
        </DivImg>
        
    )
}

export default Logo;