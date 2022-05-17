import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #262626;
  width: 100%;
  height: 50vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
  ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin: 0px 400px;
  // margin-left: 300px;
`;
const Title = styled.div`
  font-size: 40px;
  margin: 10px 400px;
  color: white; 
  // margin-left: 300px;
`;

const VideoTitle = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0px;
  margin-left: 50px;
  color:white;
`;



const MainSection = () => {
  return (
    <div className='border-2 border-white bg-neutral-800'>
      <Title>LATEST PROJECT</Title>
      <Container>
        <Wrapper>
          <iframe
            src="https://www.youtube.com/embed/1uFYq5-NSYY"
            height={500}
            width={900}
            frameborder="0"
            allow="autoplay"
            allowfullscreen
            title="video"
          />{" "}
          <VideoTitle>
            MINIATURE DUNE TERRAIN: THE WIND TRAP (Collab with Knarb Makes)
            <br/>
            This video is inspired by the Dune movie
          </VideoTitle>
        </Wrapper>
      </Container>
    </div>
  )
}

export default MainSection