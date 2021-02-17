import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { User, ShoppingCart } from 'react-feather';

const Header = () => {
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Brand href="/">ProShop</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#home">
								<ShoppingCart className="mr-1 mb-1" size={18} />
								CART
							</Nav.Link>
							<Nav.Link href="#link">
								<User className="mr-1 mb-1" size={18} />
								SIGN IN
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
