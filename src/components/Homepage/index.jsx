import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
// Custom
import Button from '../shared/Button'
import HeroSection from './HeroSection'
import Shader from '../shared/Shader'
import CardContainer from '../shared/CardContainer'
import Card from '../shared/Card'
// Images
import Hairdresser1 from '../../images/hairdresser1.jpg'
import HaircutServiceImage from '../../images/haircut.jpg'
import BeardServiceimage from '../../images/beard.jpg'
import WashServiceimage from '../../images/hairwash.jpg'
import HotTowelServiceimage from '../../images/hottowel.jpg'
// resized image_small for mobile
import BeardServiceimageSmall from '../../images/beard_small.jpg'
import HaircutServiceimageSmall from '../../images/haircut_small.jpg'
import HaircutServiceImageSmall from '../../images/hairwash_small.jpg'
import HotTowelServiceimageSmall from '../../images/hottowel_small.jpg'
// OTHER
import { animationHandler } from '../../utils'
import './homepage.scss'




// JSX
export default function HomePage(){

	// ANIMATION REFS
	const meetLeftRef = useRef( null )
	const meetLeftRef2 = useRef( null )
	const meetLeftRef3 = useRef( null )
	const meetRightRef = useRef( null )
	const meetRightRef2 = useRef( null )
	const meetRightRef3 = useRef( null )
	// STATE AND VARIABLES
	const boolean = true 

	// ARRAY TO LOOP THROUGH AND ADD SCROLL TRIGGER
	const leftAnimationsRefsArray = [
		meetLeftRef,
		meetLeftRef2,
		meetLeftRef3
	]

	const rightAnimationsRefArray = [
		meetRightRef,
		meetRightRef2,
		meetRightRef3,
	]

	// METHODS
	const mobileScreen = () => {
		if (window.innerWidth <= 568 ) return true
	}

	
	// SIDE EFFECTS
	useEffect( () => {
		animationHandler.left( leftAnimationsRefsArray, boolean )
		animationHandler.right( rightAnimationsRefArray, boolean )
	})

		
	// JSX
	return(
		<>
			<HeroSection />
			<div className="meet">
				<div className="meet-left" ref={meetLeftRef}>
					<h1>Meet Us</h1>
					<h4>and my passion</h4>
					<p>
					We've been working on hair styling for 2 years in the UK. We use only professional and brand products Wella in our salon. Haircuts, blow dry, coloring, hair styling, full head tint, highlights are performed in Passion for Beauty. We will supply you with a wonderful atmosphere. Our colleague Lucy will take professional care of your nails, eyebrows, and eyelashes. While listening to relaxing music and having a nice cup of coffee you will relax and feel wonderful also give you free advice about your hair.					</p>
					<div className="meet-left-buttons">
						<Link to="/gallery" >
							<Button 
								value="Gallery" 
								width={ mobileScreen() ? 150 : 200 }
							/>
						</Link>
						<Link to="/contact" >
							<Button 
								value="Contact Us" 
								width={ mobileScreen() ? 150 : 200 } 
							/>
						</Link>
					</div>
				</div>
					<div className="meet-right" ref={meetRightRef}>
						<Shader opacity={0.3}/>
						<img src={ Hairdresser1 } alt="Hairdresser" />
					</div>
			</div>
			<div className="offer">
				<h1>Offer</h1>
				<p>Discover our service</p>
				<CardContainer>
					<Card image={HaircutServiceImage} service="haircut" price="£22-50" reff={meetLeftRef2}  srcSet={` ${HaircutServiceImage} 1200w , ${HaircutServiceimageSmall} 700w `} />
					<Card image={BeardServiceimage} service="beard trim" price="£22-50" reff={meetRightRef2} srcSet={` ${BeardServiceimage} 1200w , ${BeardServiceimageSmall} 700w `} />
					<Card image={WashServiceimage} service="wash & style" price="£22-50"  reff={meetLeftRef3}  srcSet={` ${HaircutServiceImage} 1200w , ${HaircutServiceImageSmall} 700w `} />
					<Card image={HotTowelServiceimage} service="hot towel shave" price="£22-50" reff={meetRightRef3} srcSet={` ${HotTowelServiceimage} 1200w , ${HotTowelServiceimageSmall} 700w `} />
				</CardContainer>
				<div className="offer-more">
					<Link to="/pricing" >
						<Button 
							value="See more prices" 
							width={ mobileScreen() ? 150 : 200 } 
						/>
					</Link>
				</div>
			</div>
		</>
	)
}