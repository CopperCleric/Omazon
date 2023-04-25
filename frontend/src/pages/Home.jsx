import React from 'react'
import Bestselling from '../components/best-selling'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Category from '../components/Categories'
import Products from '../components/Products'
import Footer from '../components/Footer'





const  Home = () => {
    return (
        <div>
            <Navbar/>
            <Bestselling/>
            <Slider/>
            <Category/>
            <Products/>
            <Footer/>
        </div>
    )
}

export default Home
