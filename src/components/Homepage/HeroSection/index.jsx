import React from 'react'
import animateScrollTo from 'animated-scroll-to';

// ASSETS
import HeroVideo from '../../../images/video/barber.mp4'
import mobileImage from '../../../images/video/mobile_1.jpeg'
import Arrow from '../../../icons/Arrow'
import Shader from '../../shared/Shader'
// OTHER
import {Link} from 'react-router-dom'
import './herosection.scss'

export default function HeroSection() {

	// ANIMATION OPTIONS
	const options = {
		speed: 500,
		minDuration: 250,
		maxDuration: 1500,
		element: window,
		cancelOnUserAction: true
	}

	// STATE AND VARIABLES 
	const [ isMobile, setIsMobile ] = React.useState(false)
	const scrollOffset = 1100


	// SIDE EEFECTS 
	React.useEffect( () => {
		if( window.innerWidth < 768 ) {
			setIsMobile( true )
		} else {
			setIsMobile( false )
		}
	},[])


	// JSX
	return(
		<div className="hero">
			<h1>Proffesional Haircut & Beard Trimming</h1>
			<p><Link to="/pricing">See Our Great Offers</Link></p>
			<div className="hero-paragraph">
				<p>
				We have been working on hair styling for 11 years. So far we have attended a lot of seminars and hairdresser development workshops. 
				You will definitely appreciate our creativity, imagination and passion. We offer a range of men's and women's haircuts and hairdressing.
				</p>
			</div>
			<div className="scroll-down-arrow" onClick={ () => animateScrollTo( scrollOffset, options)} >
				<Arrow width={48} height={48} />
			</div>
			<div className="hero-video" >
				{ isMobile ? (
					<>
					<Shader opacity={0.7}/>
					<img 
						className="mobile-hero-img" 
						src={mobileImage} alt="heroimg" />
					</>
				) : (
					<>
					<Shader opacity={0.4} />
					<video playsInline autoPlay  muted loop id="video" >
						<source src={HeroVideo} type="video/mp4" />
					</video>
					</>
				)}
				<div className="hero-video-typo" >
					<h4 >Sundays <span>-20%</span></h4>
					<p>Every sunday we offer discount for all Walk-ins</p>
					<p>( student discount will not be applied )</p>
				</div>
			</div>
		</div>
	)
}