import { Add , Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useSelector } from "react-redux";
import { useState } from "react";


const Container = styled.div`

`;
const Wrapper = styled.div`
    padding:20px;

`;
const Title = styled.h1`
    font-weight:600;
    text-align:center;
`;
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`;
const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${(props) => props.type === "filled" && "none"};
    background-color:${(props) => 
        props.type === "filled" ? "black":"transparent"};
    color:${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`

`;
const TopText = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
    font-weight:600;
`;
const Info = styled.div`
    flex:3
`;

const Product = styled.div` 
    display:flex;
    justify-content:space-between;
`;
const ProductDetail = styled.div`
    flex:2;
    display:flex;
`;
const Image = styled.img`
    width:150px;
`;
const Details = styled.div`
    padding:20px;
    display:flex ;
    flex-direction:column;
    justify-content:space-around;

`;

const Hr = styled.hr`
    background-color:#eee;
    border:none;
    height:5px;
`
const ProductName = styled.span`
    font-weight:bold;
`;

const ProductSize = styled.span`
    font-weight:bold;
`;

const PriceDetails = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:10px;
`;
const ProductPrice = styled.div`
    font-size:26px;
    font-weight:600;
`;
const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
`;

const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
`;
const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:10px;
    margin-left:10px;
    height:50vh;
`;
const SummaryTitle = styled.h1`
    font-weight:200;
`;
const SummaryItem = styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:500;
    font-size:24px;
`;
const SummaryItemText = styled.span`
    
`;
const SummaryItemPrice = styled.span`
    
`;
const Button = styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:600;
`;





const Cart = () => {
    

    const [quantity, setQuantity] = useState(1);
     //adjust the quantity of products we want
    const handleQuantity = (type) => {
        if (type === "decrease") {
          quantity > 1 && setQuantity(quantity - 1);
        } else {
          setQuantity(quantity + 1);
        }
    };  

    
    const cart = useSelector(state => state.cart)
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <Title>Your Favourite</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Favourite(1)</TopText>
                    </TopTexts>
                    <TopButton type = "filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product)=> {
                            return (
                                <Product>
                                    <ProductDetail>
                                        <Image src={product.img} />
                                        <Details>
                                            <ProductName>
                                                <b>Product :</b>{product.title}
                                            </ProductName>
                                            <ProductSize>
                                                <b>Size :</b>{product.size}
                                            </ProductSize>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetails>
                                        <ProductAmountContainer>
                                            <Remove onClick={() =>handleQuantity("decrease")}/>
                                            <ProductAmount>
                                                {product.quantity}
                                            </ProductAmount>
                                            <Add onClick={() =>handleQuantity("increase")}/>
                                        </ProductAmountContainer>
                                        <ProductPrice>
                                            <b>RM </b>{product.price * product.quantity}
                                        </ProductPrice>
                                    </PriceDetails>
                                </Product>
                            )
                        })}
                        <Hr/>
                    </Info>
                </Bottom>
            </Wrapper>    

            <Footer/>
            
        </Container>
    )
}

export default Cart