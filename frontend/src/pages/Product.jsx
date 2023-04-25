import { Add, Remove } from '@material-ui/icons'
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useLocation } from "react-router-dom"
import {publicRequest} from "../requestMethod"
import { useEffect, useState } from "react"
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import  AddFavourite  from "../redux/favouriteRedux"

const Container = styled.div`
`;
const Wrapper = styled.div`
    padding:40px;
    display:flex;
`;
const ImgContainer = styled.div`
    flex:1;
`;
const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
`;
const Image = styled.img`
    height:90vh;
    width:95%;

`;
const Title = styled.h1`
    font-weight:600;
`;
const Desc = styled.p`
    margin:20px 0px;
`;

const Price = styled.span`
    font-weight:100;
    font-size:40px;
`;

const FilterContainer = styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;

`;
const Filter = styled.div`
    display:flex;
    align-items:center;

`;
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`;
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${(props) => props.color};
    margin:0px 5px;
    cursor:pointer;
`;
const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
`;
const FilterSizeOption = styled.option`

`;
const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;


const AmountContainer = styled.div`
    display:flex;
    align-items:center;    
    font-weight:700;
`;
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`;
const Button = styled.button`
    padding:15px;
    margin-left:90px;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:600;
    &:hover{
        background-color:#f8f4f4;
    }
`;
const ReviewCommentContainer = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:20px;
    width:90%;
    height:150px;

`

const Review = styled.h4`
    margin-left:10px;
    margin-top:10px;
`
const Comment = styled.h4`
    border:2px solid grey;
    margin:5px 5px 5px 5px;
`
const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({}); 
    const[color,setColor] = useState("");
    const[size,setSize] = useState("");
    const dispatch = useDispatch();
    //get product from db
    useEffect(() => {
        const getProduct = async () => {
          try {
            const res = await publicRequest.get("/products/find/" + id);
            setProduct(res.data);
          } catch {}
        };
        getProduct();
      }, [id]);
    
      //adjust the quantity of products we want
      const handleQuantity = (type) => {
        if (type === "decrease") {
          quantity > 1 && setQuantity(quantity - 1);
        } else {
          setQuantity(quantity + 1);
        }
      };  
      
      const handleClick = () => {
        //update our cart
        dispatch(
          addProduct({ ...product, quantity , color,size })
        );
      };

      const handleClickFavourite = () => {
        //update our cart
        dispatch(
          AddFavourite({ ...product, quantity , color,size })
        );
      };
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src = {product.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.description}</Desc>
                    <Price>{product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color: {product.color}</FilterTitle>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size : </FilterTitle>
                            <FilterSize>
                                {product.size?.map((s) => (
                                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>

                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                        <Remove onClick={() =>handleQuantity("decrease")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={() =>handleQuantity("increase")}/>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                        <Button onClick={handleClickFavourite}>ADD TO FAVOURITE</Button>
                        </AmountContainer>
                    </AddContainer>
                    <ReviewCommentContainer>
                        <Review>
                            Customer Reviews :
                            <Comment>This shirt is very nice!        -Kobe</Comment>
                            <Comment>This shirt is very nice!        -LowJs</Comment>

                        </Review>
                    </ReviewCommentContainer>
                    
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Product
