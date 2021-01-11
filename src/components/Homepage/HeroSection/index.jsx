import React from 'react'
import Arrow from '../../../icons/Arrow'
import './herosection.scss'
import animateScrollTo from 'animated-scroll-to';


export default function HeroSection() {

	const options = {
		speed: 500,
		minDuration: 250,
		maxDuration: 1500,
		element: window,
		cancelOnUserAction: true
	}

	const scrollOffset = 1100

	// JSX
	return(
		<div className="hero">
			<h1>Proffesional Haircut & Beard Trimming</h1>
			<p><a href="/">See Our Great Offers</a></p>
			<div className="hero-paragraph">
				<p>
					We have been working on hair styling for 11 years . So far I have attended
					a lot of seminars and hairdresser development workshops. You will definitely appreciate
					my creativity and imagination. I offer a range of men's and women's haircuts and hairdressing.
				</p>
			</div>
			<div className="scroll-down-arrow" onClick={ () => animateScrollTo( scrollOffset, options)} >
				<Arrow width={48} height={48} />
			</div>
			<div className="hero-image">
				
			</div>
		</div>
	)
}