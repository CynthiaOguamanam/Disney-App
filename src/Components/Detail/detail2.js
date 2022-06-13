import React from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import data from '../Data.json'

const Details = () => {
    return (
        <div>
            <Container>
                <Background>
                    <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg' alt='background image'/>
                </Background>
                <ImageTitle>
                    <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2041CE26663867FC4EF20377B8625BD629E619452E23BCDB1AB259DD475C2EA1/scale?width=1440&aspectRatio=1.78'/>
                </ImageTitle>
            </Container>
        </div>
    )
}

export default Details;

const Container = styled.div`
position: relative;
display: block;
`;
const Background = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;
`;
const LogoImg = styled.img`
    
`;
const Description = styled.div`
padding: 24px;

`;

const Title = styled.div`
    padding: 24px;
    padding-bottom: 24px;
    width: 100%;

    img{
        max-width: 600px;
        min-width: 600px;
        width: 34vw;
    }
`;
const subTitle = styled.div`
    width: 40vw;
`;
const Description2 = styled.div`
    
`;