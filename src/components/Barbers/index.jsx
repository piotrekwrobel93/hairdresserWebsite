import React  from 'react'

import Card from '../shared/Card'
import CardContainer from '../shared/CardContainer'
import Button from '../shared/Button'
// 
import Natalie from '../../images/barbers/natalie.webp'
import Anna from '../../images/barbers/anna.webp'
import Jamie from '../../images/barbers/jamie.webp'
import Chris from '../../images/barbers/chris.webp'
// 
import './styles/barbers.scss'
import { animationHandler } from '../../utils'
import { Link } from 'react-router-dom'

export default function Barber() { 
		
	
	const barbers = [
		{ id: 1, name: "Anna Patison", image: Anna, anim: 'left'  },
		{ id: 2, name: "Jamie Stugars", image: Jamie , anim: 'right'},
		{ id: 3, name: "Natalie Dayne", image: Natalie, anim: 'left'},
		{ id: 4, name: "Chris Petra", image: Chris, anim: 'right'}
	]
	
	
	React.useEffect( () => {
		const leftArgsToAnimate = document.querySelectorAll('.left')
		const righttArgsToAnimate = document.querySelectorAll('.right')
		animationHandler.left( leftArgsToAnimate, false )
		animationHandler.right( righttArgsToAnimate, false )
	}, [])

	// JSX
	return ( 
		<div className="barber">
			<div className="barber__hero">
				<h1>Meet our barbers</h1>
				<p>Each one of us is unique</p>
			</div>
			<div className="barber__barbers">
				<CardContainer>
					{
						barbers.map( barber => (
							<Card key={barber.id} image={ barber.image } service={ barber.name } className={barber.anim} />
							))
							
						}
				</CardContainer>
			</div>
			<div className="barber__button">
				<Link to="/contact" >
					<Button width={200} height={50} value="Contact Us" />
				</Link>
			</div>
		</div>
	)
}