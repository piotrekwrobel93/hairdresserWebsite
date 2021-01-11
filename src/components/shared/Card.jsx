import React from 'react'
import './styles/card.scss'

export default React.memo( function Card({ service, price, image, reff, onClick, className}) {
	return(
		<div className={`card ${className}`} ref={reff} onClick={onClick}>
			<img src={image}  width="500px" height="500px" alt="service we do" />
			<div className="card-details">
				<h1>{ service }</h1>
				<p>{ price }</p>
			</div>
		</div>
	)
})