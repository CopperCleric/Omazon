import { Search } from '@material-ui/icons'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import React from 'react'
import styled from 'styled-components'
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const Container = styled.div`
    height:60px;
    background-color:white;
`
const SearchContainer = styled.div`
    border:1px solid lightgray;
    display:flex;    
    align-items:center;
    margin-left:25px;
    padding:5px;
`
const Input = styled.input`
    border:none;

`
const Logo = styled.h1`
    font-weight:bold;
`
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const Left = styled.div`
    flex:1;    
`
const Center = styled.div`
    flex:1;
    display:flex;

    align-items:center;
    text-align:center;
`
const Right = styled.div`
    flex:1;
    align-items:center;
    display:flex;
    justify-content:flex-end;
`   
const MenuItems = styled.div`
    font-size:11px;
    font-weight:bold;
    cursor:pointer;
    margin-left:25px;
`
const Navbar = () => {
    //take the state and choose cart inside the state
    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Omazon</Logo>
                </Left>
                
                <Center>                  
                    <SearchContainer>
                        <Input/>
                        <Search style= {{color:"grey" , fontSize:16}}/>
                    </SearchContainer>
                </Center>
                <Right>                    
                    <MenuItems><PersonOutlineOutlinedIcon/><p>SELLER</p></MenuItems>
                    <Link to="/cart">
                    <MenuItems>
                        <Badge badgeContent = {quantity} color = "primary" >                        
                        <ShoppingCartOutlinedIcon/>                       
                        </Badge>
                    </MenuItems>
                    </Link>
                    <Link to="/cart">
                    <MenuItems>
                        <Badge badgeContent = {quantity} color = "primary" >                        
                        <FavoriteBorderOutlinedIcon/>                       
                        </Badge>
                    </MenuItems>
                    </Link>                            
                    <MenuItems>
                        <ExitToAppOutlinedIcon/><p>LOGOUT</p>
                    </MenuItems>
                    
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar

