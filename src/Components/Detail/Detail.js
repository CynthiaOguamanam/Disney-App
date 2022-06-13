import React from 'react'
import styled from 'styled-components'
import data from '../Data.json'
import white from '../Assets/images/play-icon-black.png'
import group from '../Assets/images/group-icon.png'
import black from '../Assets/images/play-icon-black.png'
import { useParams } from 'react-router-dom'


const Detail = () => {
  const {id} = useParams()
  console.log(data[id - 1]);
  const newId = data[id -1];

  console.log('this is the new id', newId)
  return (
    <div>
        <Container>
            <Background>
              <img src={newId.backgroundImg} alt='background'/>
            </Background>
             <Wrapper>
              <Logo src={newId.title} alt=''/>
              <ButtonDiv>
                <Play>
                  <Icon src={black} alt=''/>
                  <h5>Play</h5>
                </Play>
                <Trailer>
                <Icon src={white} alt=''/>
                  <h5>Trailer</h5>
                </Trailer>
                <Plus>+</Plus>
                <Contact>
                  <Icon src={group} alt=''/>
                </Contact>
              </ButtonDiv>
              <Title>{newId.title}</Title>
              <SubTitle>{newId.subTitle}</SubTitle>
              <Description>{newId.description}</Description>
            </Wrapper>
        </Container>
    </div>
  )
}
 export default Detail;

 const Container = styled.div`
  width: 100%;
  position: relative;
  display: block;
 `;
 const Background = styled.img`
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;
 `;
 const Wrapper = styled.div`
    width: 100%;
 `;
 const ButtonDiv = styled.img`
 `;
 const Logo = styled.img`
 `;
 const Icon = styled.img`
 `;
 const Trailer = styled.img`
 `;
 const Plus = styled.img`
 `;
 const Play = styled.img`
 `;
 const Contact = styled.img`
 `;
 const Title = styled.img`
 `;
 const SubTitle = styled.img`
 `;
 const Description = styled.img`
 `;
