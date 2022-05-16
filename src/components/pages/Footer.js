import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import styled from "styled-components";
import { mobile } from '../responsive'

const Container = styled.div`
  background-color: #262626;
  display: flex;
  border-style: solid;
  border-width: thin;
  border-color: #FFFFFF;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const LogoImg = styled.img`
  width: 80px;
  height: 80px;
`; 

const Desc = styled.p`
  margin: 10px 0px;
  width: 400px;
  color: white;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: white;
  font-weight: 700;
  font-size: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color: white;
    a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration: none;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: white;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo><LogoImg src={require('../assets/SFlogo_white.png')} alt='logo' /></Logo>
        <Desc>
          I'm a minatures artist & terrain builder based in Philadelphia.
          Please contact me for any inquiries!   
        </Desc>
        <Desc>
          © Designed & Developed by JK
        </Desc>
      </Left>
      <Center>
        <Title>MENU</Title>
        <List>
          <ListItem><a href='http://localhost:3000/'>HOME</a></ListItem>
          <ListItem><a href='http://localhost:3000/projects'>PROJECTS</a></ListItem>
          <ListItem><a href='http://localhost:3000/blog'>BLOG</a></ListItem>
          <ListItem><a href='http://localhost:3000/about'>ABOUT</a></ListItem>
          <ListItem><a href='http://localhost:3000/contact'>CONTACT</a></ListItem>
          <ListItem><a href='http://localhost:3000/terms'>TERMS</a></ListItem>
        </List>
      </Center>
      <Right>
        <Title>CONTACT</Title>
        <ContactItem>
          <RoomOutlinedIcon style={{marginRight:"10px"}}/> PHILADELPHIA, PA
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{marginRight:"10px"}} /> STEVEFAMINE@GMAIL.COM
        </ContactItem>
        <SocialContainer>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTubeIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Right>
    </Container>
  );
};

export default Footer;