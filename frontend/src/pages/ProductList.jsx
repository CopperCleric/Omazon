import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import { useState } from "react";


const Container = styled.div`

`
const Title = styled.h1`
    margin:20px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`
const Filter = styled.div`
    margin:20px;
`
const Select = styled.select`
    margin-right:20px;
    padding:10px;
`
const Option = styled.option`
    font-weight:bold;
`
const Filtertext = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`
const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const[filters, setFilters] = useState({});

    //take value from our select methods in option
    const handleFilters = (e) =>{
      const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    
    return (
        <Container>
            <Navbar/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <Filtertext>Filter Products:</Filtertext>
                    <Select name ="color" onChange ={handleFilters}>
                        <Option disabled>Color</Option>
                           <Option>White</Option>
                           <Option>Black</Option>  
                           <Option>Blue</Option>  
                           <Option>Red</Option>                          
                    </Select>
                    <Select name="size" onChange ={handleFilters}>
                        <Option disabled>Size</Option>
                           <Option>XS</Option>
                           <Option>X</Option>  
                           <Option>M</Option>  
                           <Option>L</Option>     
                           <Option>XL</Option>                     
                    </Select>
                </Filter>
                    
            </FilterContainer>
            <Products cat={cat} filters={filters}/>
            <Footer/>
        </Container>
    )
}

export default ProductList
