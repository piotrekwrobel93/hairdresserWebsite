import './styles/card.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function({ service, price, image, reff, onClick, className}) {
	return(
		<div className={`card ${className}`} ref={reff} onClick={onClick}>
			<LazyLoadImage src={image}  width="500px" height="500px" alt="service we do"/>
			<div className="card-details">
				<h1>{ service }</h1>
				<p>{ price }</p>
			</div>
		</div>
	)
}