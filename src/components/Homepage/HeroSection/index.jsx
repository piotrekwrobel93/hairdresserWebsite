import React from 'react'
import Arrow from '../../../icons/Arrow'
import './herosection.scss'
import animateScrollTo from 'animated-scroll-to';
import HeroVideo from '../../../images/video/barber.mp4'
import Shader from '../../shared/Shader'


export default function HeroSection() {

	const options = {
		speed: 500,
		minDuration: 250,
		maxDuration: 1500,
		element: window,
		cancelOnUserAction: true
	}

	const [ isMobile, setIsMobile ] = React.useState(false)
	const scrollOffset = 1100



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
			<div className="hero-video" >
				{ isMobile ? (
					<>
					<Shader opacity={0.7}/>
					<img className="mobile-hero-img" src="https://images.unsplash.com/photo-1598887143038-39282f41256a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="adv" />
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