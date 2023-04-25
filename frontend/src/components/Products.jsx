import React from 'react';
import styled from 'styled-components';
import { polularProducts } from './data';
import Product from './Product';
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`
const Products = ({cat,filters}) => {
    //fetch data
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    //whenever we change the values in our filter , we need to update here
    //get products from api(making request)
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get( 
                    cat
                     ? `http://localhost:5000/api/products?category=${cat}`
                     : "http://localhost:5000/api/products"
                );
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts()
    },[cat]);


    //display items that match those keys
    useEffect(() => {
        cat &&
          setFilteredProducts(
            products.filter((item) =>
              Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
              )
            )
          );
      }, [products, cat, filters]);
    //set our filtered products
    return (
        <Container>
            { cat
              ?filteredProducts.map((item) => <Product item ={item} key = {item.salesVolume}/>)
              : products
               .slice(0,3)
               .map((item) => <Product item ={item} key = {item.salesVolume}/>)
            }
        </Container>
    )
}

export default Products
