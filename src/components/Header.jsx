import React, {useState} from 'react'
import '../styles/Global.css'
import '../styles/Header.css'
import menu from '../assets/icons/icon_menu.svg'
import logo from '../assets/logos/logo_yard_sale.svg'
import shoppingCart from '../assets/icons/icon_shopping_cart.svg'
import Menu from '../components/Menu'
import MenuMovil from '../components/MenuMovil'

const Header = () => {

    const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	const [toggleMenu, setToggleMenu] = useState(false);

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu);
	}

  return (
    <nav>
			<img src={menu} alt="menu" className="menu" onClick={handleToggleMenu}/>
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">Inicio</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Contacto</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						luciano19940@hotmail.com
					</li>
					<li className="navbar-shopping-cart">
						<img src={shoppingCart} alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleMenu && <MenuMovil />}
		</nav>
  )
}

export default Header