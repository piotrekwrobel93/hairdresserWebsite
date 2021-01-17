import React from 'react'
import '../../styles/navbar.scss'
import ScissorsIcon from '../../icons/Scissors'
// Route Link
import { NavLink, Link, useLocation } from 'react-router-dom'


export default React.memo(function Navbar() {

	const [ isOpenMenu, setIsOpenMenu ] = React.useState( false )
	const [ isHome, setIsHome ] = React.useState( false )
	let location = useLocation()

	const activeStyles = {
		fontWeight: "600",
		border:"2px solid #333",
		color: "#000"
	}
	
	const handleLogoClick = event => {
		// PREVENT RERENDER WHEN LOGO CLICK ON HOMEPAGE
		// FIXES ANIMATION BUG 
		if( isHome ) {
			event.preventDefault()
		}
	}

	
	React.useEffect( () => {
		if( location.pathname === "/") {
			setIsHome( true )
		} else {
			setIsHome( false )
		}

	},[location])

	// JSX
	return(
		<div className="navbar">
			<div className="navbar--wrapper">
				<div className="logo">
					<Link to={ isHome ? "" : "/"} onClick={ handleLogoClick } >
						<ScissorsIcon width={30} height={30} />
						<p>Mens<span>'</span> Haircut</p>
					</Link>
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
			</div>
				<nav>
					<ul className={isOpenMenu ? "activeMenu" : ""} >
						<li><NavLink exact to="/" activeStyle={ activeStyles } onClick={() => setIsOpenMenu(!isOpenMenu)}>Home</NavLink></li>
						<li><NavLink to="/barbers" activeStyle={ activeStyles } onClick={() => setIsOpenMenu(!isOpenMenu)} >Barbers</NavLink></li>
						<li><NavLink to="/pricing"activeStyle={ activeStyles } onClick={() => setIsOpenMenu(!isOpenMenu)} >Pricing</NavLink></li>
						<li><NavLink to="/gallery"activeStyle={ activeStyles } onClick={() => setIsOpenMenu(!isOpenMenu)} >Gallery</NavLink></li>
						<li><NavLink to="/contact"activeStyle={ activeStyles } onClick={() => setIsOpenMenu(!isOpenMenu)} >Contact</NavLink></li>
					</ul>
				</nav>
		</div>
	)
})