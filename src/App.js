import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductShow from './screens/ProductShow';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/products/:id" component={ProductShow} />
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
