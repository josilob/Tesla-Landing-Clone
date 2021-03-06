import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import { selectCars } from '../features/car/carSlice';

function Header() {
	const [burgerStatus, setBurgerStatus] = useState(false);
	const cars = useSelector(selectCars);

	return (
		<Container>
			<a>
				<img src='/images/logo.svg' alt='' />
			</a>

			<Menu>
				{cars &&
					cars.map((car, idx) => (
						<a key={idx} href='#'>
							{car}
						</a>
					))}
			</Menu>

			<RightMenu>
				<a href='#' alt='#'>
					Shop
				</a>
				<a href='#' alt='#'>
					Tesla Account
				</a>
				<CustomMenu
					onClick={() => {
						setBurgerStatus(true);
					}}
				/>
			</RightMenu>

			<BurgerNav show={burgerStatus}>
				<CloseWrapper>
					<CustomClose
						onClick={() => {
							setBurgerStatus(false);
						}}
					/>
				</CloseWrapper>

				<li>
					<a href='#'>Existing Inventory</a>
				</li>
				<li>
					<a href='#'>Used Inventory</a>
				</li>
				<li>
					<a href='#'>Trade-in</a>
				</li>
				<li>
					<a href='#'>Cybertruck</a>
				</li>
				<li>
					<a href='#'>Roadster</a>
				</li>
				<li>
					<a href='#'>Semi</a>
				</li>
				<li>
					<a href='#'>Charging </a>
				</li>
				<li>
					<a href='#'>Powerwall</a>
				</li>
				<li>
					<a href='#'>Commercial Energy</a>
				</li>
				<li>
					<a href='#'>Utilities</a>
				</li>
				<li>
					<a href='#'>Test Drive</a>
				</li>
				<li>
					<a href='#'>Find Us</a>
				</li>
				<li>
					<a href='#'>Support</a>
				</li>
				<li>
					<a href='#'>United States</a>
				</li>
			</BurgerNav>
		</Container>
	);
}

export default Header;

const Container = styled.div`
	min-height: 60px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
`;

const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 10px;
		flex-wrap: no-wrap;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;
	a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 10px;
	}
`;

const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`;

const BurgerNav = styled.div`
	position: fixed;
	right: 0;
	top: 0;
	bottom: 0;
	background: #fff;
	width: 300px;
	z-index: 10;
	list-style: none;
	padding: 20px;
	transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
	transition: transform 0.25s ease-in-out;

	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);

		a {
			font-weight: 600;
		}
	}
`;

const CustomClose = styled(CloseIcon)`
	cursor: pointer;
`;

const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;
