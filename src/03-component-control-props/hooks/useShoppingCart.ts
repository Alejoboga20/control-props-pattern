import { useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface ProductInCart extends Product {
	count: number;
}

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

	const onProductCountChange = ({ counter, product }: onChangeArgs) => {
		setShoppingCart((oldShoppingCard) => {
			const productInCart: ProductInCart = oldShoppingCard[product.id] || {
				...product,
				count: 0,
			};

			if (Math.max(productInCart.count + counter, 0) > 0) {
				productInCart.count += counter;

				return {
					...oldShoppingCard,
					[product.id]: productInCart,
				};
			}

			//Delete product
			const { [product.id]: toDelete, ...rest } = oldShoppingCard;

			return { ...rest };

			/* if (counter === 0) {
				const { [product.id]: toDelete, ...rest } = oldShoppingCard;
				console.log(toDelete);

				return { ...rest };
			}

			return {
				...oldShoppingCard,
				[product.id]: { ...product, count: counter },
			}; */
		});
	};

	return {
		onProductCountChange,
		shoppingCart,
	};
};
