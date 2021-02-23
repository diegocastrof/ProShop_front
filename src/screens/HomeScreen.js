import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
      <h1 className="mt-5 text-center">Últimos Productos</h1>
      <Row>
        {products.map((product) => (
          <Col md={6} lg={4} xl={3}>
            <Product key={product._id} product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
