import React from 'react'
import '../../styles/navbar.scss'
import ScissorsIcon from '../../icons/Scissors'

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
					<li><a href="/">Home</a></li>
					<li><a href="/">About Us</a></li>
					<li><a href="/">Pricing</a></li>
					<li><a href="/">Gallery</a></li>
					<li><a href="/">Contact</a></li>
				</ul>
			</nav>
		</div>
	)
}