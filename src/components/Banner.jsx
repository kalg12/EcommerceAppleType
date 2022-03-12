import React from 'react'
import '../styles/Global.css';
const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-text">
          <h1>
            <span>Nuevo</span>
            <span>iPone SE</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Vestibulum euismod, nisi vel consectetur
          </p>
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  )
}

export default Banner