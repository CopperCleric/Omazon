import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { GitHub } from '@material-ui/icons';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const Container = styled.div`
    display:flex;
`

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Center = styled.div`
    flex:1;
    padding:20px;
`

const Right = styled.div`
    flex:1;
    padding:20px;
`
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`
const Logo = styled.h2`
`
const Title = styled.h2`
    margin-bottom:10px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`
const Desc = styled.p`
    margin:20px 0px;
`
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props =>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Omazon</Logo>
                <Desc>Blackpink Jisoo Yoona IU</Desc>
            
                <SocialContainer >
                    <SocialIcon color = "385999">
                        <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon color = "E4405F">
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon color = "55ACEE">
                        <GitHub/>
                    </SocialIcon>
                    </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Men Fahion</ListItem>
                    <ListItem>Kids Wear</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Favourite</ListItem>
                    <ListItem>Home</ListItem>
                    <ListItem>My Account</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomOutlinedIcon style = {{marginRight:"10px"}}/>Jln Profesor Diraja Ungku Aziz, 50603 Kuala Lumpur.
                </ContactItem>
                <ContactItem>
                    <PhoneInTalkOutlinedIcon style = {{marginRight:"10px"}}/>+60 16-3472321
                </ContactItem>
                <ContactItem>
                    <EmailOutlinedIcon style = {{marginRight:"10px"}}/>omazon-e-commerceproject@gmail.com
                </ContactItem>

            </Right>
        </Container>
    )
}

export default Footer
