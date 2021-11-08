import React, {useState} from 'react';
import '@styles/ProductItem.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
	const[cart, setCart] = useState([]);//crea el estado de la lista de productos en el carrito
	
	const handleClick = () => {//cuando se ejecuta en set cart carga el valor en usestate
		setCart([]);
	}
	return (
		<div className="ProductItem">
			<img src="https://images.pexels.com/photos/3672355/pexels-photo-3672355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure onClick={handleClick} >
					<img src={addToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
