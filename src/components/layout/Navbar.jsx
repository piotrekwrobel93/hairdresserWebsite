import React from 'react'
import '../../styles/navbar.scss'
import ScissorsIcon from '../../icons/Scissors'
// Route Link
import { NavLink, Link } from 'react-router-dom'

export default React.memo(function Navbar() {

	
	const [ isOpenMenu, setIsOpenMenu ] = React.useState( false )


	React.useEffect( () => {
		console.log("component mounted")
	},[])

	const activeStyles = {
		fontWeight: "600",
		border:"2px solid #333",
		color: "#000"
	}

	return(
		<div className="navbar">
			<div className="logo">
				<Link to="/" >
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
			<nav >
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