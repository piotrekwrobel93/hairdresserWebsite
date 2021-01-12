import React , { lazy, Suspense } from 'react'

import { 
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

// Lazy Components
import HomePage from './components/Homepage'
import Layout from './components/layout'
import Barber from './components/Barbers'
import Pricing from './components/Pricing'



const App = () => {


	// JSX
	return (
		<Router>
			<div className="app" >
				<Suspense fallback={<p></p>}>
					<Layout>
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/barbers" component={Barber} />
							<Route path="/pricing" component={Pricing}/>
						</Switch>
					</Layout>
				</Suspense>
				</div>
		</Router>
	)
}

export default App