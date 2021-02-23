import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  const { image, name, rating, numReviews, price, _id } = product;
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/products/${_id}`}>
        <Card.Img src={image} variant="top" />
      </Link>
      <Card.Body>
        <Card.Title as="div">
          <strong>{name}</strong>
        </Card.Title>
        <Card.Text as="div">
          <div className="my-3">
            <Rating rating={rating} numReviews={numReviews} />
          </div>
        </Card.Text>
        <Card.Text as="h3">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
