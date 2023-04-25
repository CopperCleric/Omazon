import React from 'react'
import styled from 'styled-components'


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
    width:40%;
    background-color:transparent;

`
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`
const Title = styled.h1`
    font-size:30px;
    font-weight:600;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;
`
const Agreement = styled.span`
    font-size:15px;
    font-weight:600;
    margin:20px 0px;
`
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="FullName" />
                    <Input  placeholder="Username" />
                    <Input placeholder = "Email"/>
                    <Input placeholder = "Password"/>
                    <Input placeholder = "Confirm Password"/>
                    <Input placeholder = "PaymentPassword"/>
                                        
                    
                    <Agreement>
                        By creating an account , I consent to the processing of my personal data in accordance with the <u><b>Privacy Policy</b></u>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register