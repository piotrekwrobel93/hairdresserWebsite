import React from 'react'
import '../../styles/navbar.scss'
import ScissorsIcon from '../../icons/Scissors'
// Route Link
import { NavLink } from 'react-router-dom'

export default React.memo(function Navbar() {

	
	const [ isOpenMenu, setIsOpenMenu ] = React.useState( false )


	React.useEffect( () => {
		console.log("... Navbar is being rendered ...")
	})

	const activeStyles = {
		color: "red",
		fontWeight: "600"
	}

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
					<li><NavLink exact to="/" activeStyle={ activeStyles }>Home</NavLink></li>
					<li><NavLink to="/barbers" activeStyle={ activeStyles } >Barbers</NavLink></li>
					<li><NavLink to="/pricing"activeStyle={ activeStyles } >Pricing</NavLink></li>
					<li><a href="/">Gallery</a></li>
					<li><a href="/">Contact</a></li>
				</ul>
			</nav>
		</div>
	)
})