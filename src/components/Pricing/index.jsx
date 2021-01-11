import React from 'react'

import './pricing.scss'

import Row from '../shared/Row'
import Button from '../shared/Button'
import Advert from '../shared/Advert'

export default function Pricing() {



	const haircutServices = [
		{ id: 1, service: "Haircut", duration: 30,  price: 30 },
		{ id: 2, service: "Re-Style", duration: 45,  price: 45 },
		{ id: 3, service: "Clippers Back & Sides", duration: 15,  price: 23 },
		{ id: 4, service: "Just Clippers", duration: 15,  price: 17 },
		{ id: 5, service: "Just Clippers with Wash", duration: 30,  price: 21 },
		{ id: 6, service: "Skin Fade with Haircut", duration: 45,  price: 40 },
		{ id: 7, service: "Head Shave", duration: 30,  price: 30 }
	]

	const shavingServices = [
		{ id: 1, service:  "Luxury Wet Save", duration: 45, price: 45 },
		{ id: 2, service:  "Express Shave", duration: 30, price: 30 },
		{ id: 3, service:  "Shaving Lesson", duration: 60, price: 80 },
	]

	const beardServices = [
		{ id: 1, service: "Beard Styling", duration: 15, price: 15 },
		{ id: 2, service: "Advanced Styling ", duration: 30, price: 30 },
		{ id: 3, service: "Full Shaping and Shave", duration: 45, price: 45 },
		{ id: 4, service: "Friction", duration: 10, price: 8 },
	]

	const packageServices = [
		{ id: 1, service: "Re-Style + Cleanse", duration: 50, price: 50 },
		{ id: 2, service: "Haircut + Beard Styling", duration: 45, price: 40 },
		{ id: 3, service: "Express Shave + Haircut", duration: 60, price: 50 },
		{ id: 4, service: "Fashion + Shaving Lessons", duration: 60, price: 100 },
	]

	// JSX

	return(
		<div className="pricing">
			<h1>Price List</h1>
			<div className="pricing--advert" style={{width: "100%", display: "flex", justifyContent:"center", alignItems: 'center', margin: "3rem 0 4rem 0"}}>
				<Advert 
					title="Student Discount 15%!" 
					description="You’re a student in the UK? Don’t forget to take advantage of our student discount!"				
				/>
			</div>
			<div className="pricing--list">
				<div className="pricing--list-items">
					<h2>Service</h2>
					<h2>Duration</h2>
					<h2>Price</h2>
				</div>
				<div className="pricing--category">
					<h1>Hair Styling</h1>
					{
						haircutServices.map( item => (
							<Row key={item.id} service={item.service} duration={item.duration} price={item.price} />
						))
					}
				</div>
				<div className="pricing--category">
					<h1>Shaving</h1>
					{
						shavingServices.map( item => (
							<Row key={item.id} service={item.service} duration={item.duration} price={item.price}  />
						))
					}
				</div>
				<div className="pricing--category">
					<h1>Beard Styling</h1>
					{
						beardServices.map( item => (
							<Row key={item.id} service={item.service} duration={item.duration} price={item.price}  />
						))
					}
				</div>
				<div className="pricing--category">
					<h1>Packages</h1>
					{
						packageServices.map( item => (
							<Row key={item.id} service={item.service} duration={item.duration} price={item.price} />
						))
					}
				</div>
				<div className="pricing--button">
					<Button value="Book an apointment" width={200} height={50} />
				</div>
			</div>
		</div>
	)
}