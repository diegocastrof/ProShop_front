import React from 'react';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
	return (
		<div className="App">
			<Header />
			<Container>
				<HomeScreen />
			</Container>
			<Footer />
		</div>
	);
};

export default App;
