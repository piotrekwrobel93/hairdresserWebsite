import React from 'react'
import { 
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

import BookingContextProvider from './context/context'

// Components
import HomePage from './components/Homepage'
import Layout from './components/layout'
import Barber from './components/Barbers'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

const App = () => {

	// JSX
	return (
	<Router>
		<BookingContextProvider>
			<div className="app" >
				<Layout>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/barbers" component={Barber} />
						<Route path="/pricing" component={Pricing}/>
						<Route path="/Gallery" component={Gallery}/>
						<Route path="/contact" component={Contact}/>
					</Switch>
				</Layout>
			</div>
		</BookingContextProvider>
	</Router>
	)
}

export default App