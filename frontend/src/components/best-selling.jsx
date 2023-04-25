import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
`
const Bestselling = () => {
    return (
        <div>
            <Container>
                Top 3 best selling products on Omazon!
            </Container>
        </div>
    )
}

export default Bestselling
