import './styles/card.scss'

export default function CardContainer({ children }) {
	return (
		<div className="card-container">
			{ children }
		</div>
	)
}