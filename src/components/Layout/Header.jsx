import React from 'react'
import mealsImage from '../../assets/123456.webp'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'

function Header({ onShowCart }) {
	return (
		<>
			<header className={classes.header}>
				<h1>Food Piramid</h1>
				<HeaderCartButton onShowCart={onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt='food' />
			</div>
		</>
	)
}

export default Header
