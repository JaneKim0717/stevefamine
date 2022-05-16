import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { FiYoutube, FiTwitter } from 'react-icons/fi'
import { mobile } from '../responsive'
import { NavLink as Link } from 'react-router-dom';


const LogoImg = styled.img`
  width: 320px;
  height: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`; 

const Container = styled.div`
  height: 110px;
  background-color: #262626;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: white;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 17px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const SocialItem = styled.div`
  font-size: 25px;
  cursor: pointer;
  margin-right: 25px;
  color: white;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;




const NavBar = () => {
  return (

    <Container>
      <Wrapper>
        <Left>
          <SocialItem><a href='https://www.instagram.com/stevefamine/'><FaInstagram /></a></SocialItem> 
          <SocialItem><a href='https://www.youtube.com/stevefamine'><FiYoutube /></a></SocialItem> 
          <SocialItem><a href='https://mobile.twitter.com/stevefamine'><FiTwitter /></a></SocialItem>
        </Left>
        <Center>
          <Logo><NavLink to='/'><LogoImg src={require('../assets/stevefamine-white-logo.png')} alt='logo' /></NavLink></Logo>
        </Center>
        <Right>
          <NavLink to='/' activeStyle> <MenuItem>HOME</MenuItem> </NavLink>
          <NavLink to='/projects' activeStyle><MenuItem>PROJECTS</MenuItem></NavLink>
          <NavLink to='/blog' activeStyle><MenuItem>BLOG</MenuItem></NavLink>
          <NavLink to='/about' activeStyle><MenuItem>ABOUT</MenuItem></NavLink>
          <NavLink to='/contact' activeStyle><MenuItem>CONTACT</MenuItem></NavLink>
        </Right>
      </Wrapper>
    </Container>
    // <>
    //   <Nav>
    //     <NavLink to='/'>
    //       <LogoImg src={require('../assets/SFlogo_white.png')} alt='logo' />
    //     </NavLink>
    //     <Bars /> 
    //     <NavMenu>
    //       <NavLink to='/' activeStyle>
    //         HOME
    //       </NavLink>
    //       <NavLink to='/projects' activeStyle>
    //         PROJECTS
    //       </NavLink>
    //       <NavLink to='/blog' activeStyle>
    //         BLOG
    //       </NavLink>
    //       <NavLink to='/about' activeStyle>
    //         ABOUT
    //       </NavLink>
    //       <NavLink to='/contact' activeStyle>
    //         CONTACT
    //       </NavLink>
    //     </NavMenu>
    //   </Nav>
    // </>
  )
}

export default NavBar