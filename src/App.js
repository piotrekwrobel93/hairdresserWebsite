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
const Prices = lazy( () => import('./components/Pricing') )



const App = () => {

	return (
		<Router>
			<Layout>
				<div className="app" >
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route path="/barbers">
							<Suspense fallback={<p>Loading...</p>} >
								<Barber />
							</Suspense>
						</Route>
						<Route path="/pricing">
							<Suspense fallback={ <p>Loading...</p>}>
								<Prices />
							</Suspense>
						</Route>
					</Switch>
				</div>
			</Layout>
		</Router>
	)
}

export default App