import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { ProductList } from '../components/ProductList'


const Home = () => {
  return (
    <>
    <Header />
    <Banner />
    <ProductList />
    </>
  )
}

export default Home