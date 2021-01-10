import React from 'react'
import '../../styles/navbar.scss'
import ScissorsIcon from '../../icons/Scissors'
// Route Link
import { NavLink } from 'react-router-dom'

export default () => {

	const [ isOpenMenu, setIsOpenMenu ] = React.useState( false )

	return(
		<div className="navbar">
			<div className="logo">
				<ScissorsIcon width={30} height={30} />
				<p>Mens<span>'</span> Haircut</p>
			</div>
			<div className="navbar__toggle" >
				<button onClick={
					() => setIsOpenMenu(!isOpenMenu)
				}>
					<div></div>
					<div></div>
					<div></div>
				</button>
			</div>
			<nav >
				<ul className={isOpenMenu ? "activeMenu" : ""}>
					<li><NavLink to="/" >Home</NavLink></li>
					<li><NavLink to="/barbers" >Barbers</NavLink></li>
					<li><NavLink to="/pricing">Pricing</NavLink></li>
					<li><a href="/">Gallery</a></li>
					<li><a href="/">Contact</a></li>
				</ul>
			</nav>
		</div>
	)
}