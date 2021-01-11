import React , { lazy, Suspense } from 'react'
// Pages
import HomePage from './components/Homepage'
// ROUTING IMPORTS
import { 
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'
// Components
import Layout from './components/layout'

// Lazy Components
const Barber = lazy( () => import('./components/Barbers') )
const Pricing = lazy( () => import('./components/Pricing') )



const App = () => {

	return (
		<Router>
			<Layout>
				<div className="app" >
				<Suspense fallback={<p>Loading......</p>}>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/barbers" component={Barber} />
						<Route path="/pricing" component={Pricing}/>
					</Switch>
				</Suspense>
				</div>
			</Layout>
		</Router>
	)
}

export default App