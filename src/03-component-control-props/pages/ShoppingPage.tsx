import { useState } from 'react';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { Product, onChangeArgs } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product1 = {
	id: '1',
	title: 'Coffe Mug - Card',
	img: './coffee-mug.png',
};

const product2 = {
	id: '2',
	title: 'Coffe Mug - Meme',
	img: './coffee-mug2.png',
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
	count: number;
}

export const ShoppingPage = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

	const onProductCountChange = ({ counter, product }: onChangeArgs) => {
		console.log({ counter, product });
	};

	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}
			>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						className='bg-dark text-white'
						onChange={onProductCountChange}
					>
						<ProductImage className='custom-image' />
						<ProductTitle className='text-bold' />
						<ProductButtons className='custom-buttons' />
					</ProductCard>
				))}
			</div>

			<div className='shoping-cart'>
				<ProductCard product={product2} className='bg-dark text-white' style={{ width: '100px' }}>
					<ProductImage className='custom-image' />
					<ProductButtons className='custom-buttons' />
				</ProductCard>

				<ProductCard product={product1} className='bg-dark text-white' style={{ width: '100px' }}>
					<ProductImage className='custom-image' />
					<ProductButtons className='custom-buttons' />
				</ProductCard>
			</div>
		</div>
	);
};
