import React from 'react'
import BannerIphoneSE from '../components/BannerIphoneSE'
import BannerIphonePro from '../components/BannerIphonePro'
import Header from '../components/Header'
import { ProductList } from '../components/ProductList'


const Home = () => {
  return (
    <>
    <Header />
    <BannerIphoneSE />
    <BannerIphonePro />
    <ProductList />
    </>
  )
}

export default Home