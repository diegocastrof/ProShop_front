import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
	const { image, name, rating, numReviews, price } = product;
	return (
		<Card className="my-3 p-3 rounded">
			<Card.Img src={image} variant="top" />
			<Card.Body>
				<Card.Title as="div">
					<strong>{name}</strong>
				</Card.Title>
				<Card.Text as="div">
					<div className="my-3">
						{rating} from {numReviews} reviews
					</div>
				</Card.Text>
				<Card.Text as="h3">${price}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
