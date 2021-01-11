import React  from 'react'
import Card from '../shared/Card'
import CardContainer from '../shared/CardContainer'
import Button from '../shared/Button'
// STYLES
import './styles/barbers.scss'
// 
import {animationHandler } from '../../utils'
// Dynamic imports
import Eliza from '../../images/barbers/eliza.webp'
import Patrick from '../../images/barbers/patrick.webp'
import Louis from '../../images/barbers/louis.webp'
import David from '../../images/barbers/david.webp'

export default function Barber() { 
		
	
	const barbers = [
		{ id: 1, name: "David Patison", image: David, anim: 'left'  },
		{ id: 2, name: "Louis Stugars", image: Louis , anim: 'right'},
		{ id: 3, name: "Patrick Dayne", image: Patrick, anim: 'left'},
		{ id: 4, name: "Eliza Petra", image: Eliza, anim: 'right'}
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
				<Button width={200} height={50} value="Book an apointment" />
			</div>
		</div>
	)
}