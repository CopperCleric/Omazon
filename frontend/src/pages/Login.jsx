import styled from 'styled-components'
import { useState } from "react";
import { login } from '../redux/apiCalls';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Container = styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ) ,
    url("https://wallpaperaccess.com/full/2593045.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Wrapper = styled.div`
    padding:20px;
    width:25%;
    background-color:transparent;

`
const Form = styled.form`
    display:flex;
    flex-direction:column;
`
const Title = styled.h1`
    font-size:30px;
    font-weight:600;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0px;
    padding:10px;
`
const Link = styled.a`
    margin:5px 0px;
    font-size:15px;
    font-weight:600;
    text-decoration:underlined;
    cursor:pointer;
`

const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
    margin-bottom:10px;
    &:disabled{
       color: grey;
       cursor: not-allowed;
    }
`

const Error = styled.span`
    color: red;  
 `


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error} = useSelector((state) => state.user);

    const handleClick =(e) =>{
        e.preventDefault();
        login(dispatch, {username,password});
    };


    return (
        <Container>
            <Wrapper>
                
                <Title>SIGN IN</Title>
                <Form>
                    <Input 
                     placeholder = "Username"
                     onChange={(e)=> setUsername(e.target.value)}
                     />
                    <Input 
                     placeholder = "Password" 
                     type = "password"
                     onChange={(e)=> setPassword(e.target.value)}
                     />
                    <Button onClick={handleClick} disabled={isFetching}>LOGIN </Button>
                    {error && <Error>Something went wrong!</Error>}
                    <Link>FORGET YOUR PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
                
            </Wrapper>
        </Container>
    )
    
}

export default Login
