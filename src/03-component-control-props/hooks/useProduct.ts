import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

export const useProduct = ({ product, onChange, value = 0 }: useProductArgs) => {
	const [counter, setCounter] = useState(value);
	const isControlled = useRef(!!onChange);

	const increaseBy = (value: number) => {
		if (isControlled.current) {
			return onChange!({ counter: value, product });
		}

		const newValue = Math.max(counter + value, 0);
		setCounter(newValue);

		onChange && onChange({ product, counter: newValue });
	};

	useEffect(() => {
		setCounter(value);
	}, [value]);

	return {
		counter,
		increaseBy,
	};
};

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}
