import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #white;
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
  font-size: 50px;
  font-weight: 500;
  margin: 10px 400px;
  color: black; 
  letter-spacing: 2px;
`;

const VideoTitle = styled.p`
  margin: 50px 0px;
  width: 50%;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0px;
  margin-left: 50px;
  color: black;
`;

const Button = styled.button`
  margin-top: 40px;
  border: none;
  padding: 10px;
  background-color: #262626;
  color: white;
  cursor: pointer;
  font-weight: 400;
`;



const MainSection = () => {
  return (
    <div className='border-4 border-neutral-800 bg-white-800'>
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
            <br />
            This is a recent collaborative project with @KnarbMakes where we constructed and painted a Wind Trap from the Dune 2 Universe. In the video I go into detail about the Wind Trap’s inspiration from the retro games from the 90s and on the dual 6mm or 28mm scale.  I went over the basic techniques I used to paint it and showed some old game footage.
            <br />
            <Button><a href='https://www.youtube.com/channel/UCeWHMj-FQNlxopjlRDtlC8Q'>CHECK OUT MY YOUTUBE</a></Button>
          </VideoTitle>
        </Wrapper>
      </Container>
    </div>
  )
}

export default MainSection