import React from 'react';
import '../styles/Global.css';
import '../styles/ProductItem.css';
import '../styles/ProductList.css';
import productImage from '../assets/products/iphone13.jpg';
import addToCart from '../assets/icons/bt_add_to_cart.svg';

export const ProductList = () => {
  return (
    <>
      <section className="main-container">
        <div className="cards-container">
          <div className="product-card">
            <img src={productImage} alt="Iphone 13" />
            <div className="product-info">
              <div>
                <p>$24,599</p>
                <p>iPhone 13</p>
              </div>
              <figure>
                <img src={addToCart} alt="Add to cart" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img src={productImage} alt="Iphone 13" />
            <div className="product-info">
              <div>
                <p>$24,599</p>
                <p>iPhone 13</p>
              </div>
              <figure>
                <img src={addToCart} alt="Add to cart" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img src={productImage} alt="Iphone 13" />
            <div className="product-info">
              <div>
                <p>$24,599</p>
                <p>iPhone 13</p>
              </div>
              <figure>
                <img src={addToCart} alt="Add to cart" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img src={productImage} alt="Iphone 13" />
            <div className="product-info">
              <div>
                <p>$24,599</p>
                <p>iPhone 13</p>
              </div>
              <figure>
                <img src={addToCart} alt="Add to cart" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img src={productImage} alt="Iphone 13" />
            <div className="product-info">
              <div>
                <p>$24,599</p>
                <p>iPhone 13</p>
              </div>
              <figure>
                <img src={addToCart} alt="Add to cart" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img src={productImage} alt="Iphone 13" />
            <div className="product-info">
              <div>
                <p>$24,599</p>
                <p>iPhone 13</p>
              </div>
              <figure>
                <img src={addToCart} alt="Add to cart" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}
