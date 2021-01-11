import './styles/row.scss'
export default function Row({service, duration, price}) {
	return (
		<div className="row">
			<h2>{service}</h2>
			<h2>{duration} min</h2>
			<h2>£{price}</h2>
		</div>
	)
}