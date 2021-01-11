import React from 'react'
import '../../styles/footer.scss'
import Scissors from '../../icons/Scissors'
import Phone from '../..//icons/Phone'
import Mail from '../..//icons/Mail'
import Location from '../..//icons/Location'
import  Facebook from '../../icons/Facebook'
import  Instagram from '../../icons/Instagram'
import Maps from '../shared/Maps'

export default function Footer() {

	return (
		<div className="footer">
			<div className="footer__contact-section">
				<h1>Contact us</h1>
				<p>
					While listening to relaxation music, drinking good coffee
					and with us keeping You a company, You will relax
					from everyday tasks and chores.
				</p>
				<Scissors />
			</div>
			<div className="footer__contact-icons">
				<div>
					<Phone width={50} height={50}/>
					<div>
						<h4>Phone</h4>
						<p>+44 0234 443 321</p>
					</div>
				</div>
				<div>
					<Mail width={50} height={50}/>
					<div>
						<h4>E-mail</h4>
						<p>contact@manshaircut@stylist.co.uk</p>
					</div>
				</div>
				<div>
					<Location  width={50} height={50}/>
					<div>
						<h4>Address</h4>
						<p>Men's Haircut<br />230 Union Square<br /> AB21 7GT, Aberdeen</p>
					</div>
				</div>
			</div>
			<div className="footer__maps">
				<div className="google-maps">
					<Maps />
				</div>
			</div>
			<div className="footer__bottom">
				<p>Copyrights:  Mens' Haircut 2021</p>
				<ul>
					<li>
						<Facebook />
					</li>
					<li>
						<Instagram />
					</li>
				</ul>
				<p>Created By: piotrekwrobel93 UK</p>
			</div>
		</div>
	)
}