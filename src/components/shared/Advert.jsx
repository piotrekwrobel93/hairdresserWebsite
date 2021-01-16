import './styles/advert.scss'
export default function Advert({title, description, width, height }) {

	return(	
		<div className="advert" style={{width: width, height: height}}>
			<h2>{ title }</h2>
			<p>{ description }</p>
		</div>
	)
}