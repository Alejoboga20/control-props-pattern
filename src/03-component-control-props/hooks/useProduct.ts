import { useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

export const useProduct = ({ product, onChange }: useProductArgs) => {
	const [counter, setCounter] = useState(0);

	const increaseBy = (value: number) => {
		const newValue = Math.max(counter + value, 0);
		setCounter(newValue);

		onChange && onChange({ product, counter: newValue });
	};

	return {
		counter,
		increaseBy,
	};
};

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
}
