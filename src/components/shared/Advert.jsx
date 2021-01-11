import './styles/advert.scss'
// import Books from '../../images/advert/books.jpg'
export default function Advert({title, description, width, height }) {

	return(	
		<div className="advert" style={{width: width, height: height}}>
			<h2>{ title }</h2>
			<p>{ description }</p>
		</div>
	)
}