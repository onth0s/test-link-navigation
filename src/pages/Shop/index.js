import { Outlet, useNavigate } from 'react-router';

export { Books, Games } from './Categories';

const categories = [
	// 'Computers',
	// 'Phones',
	'Books',
	'Games',
];

export const Shop = () => {
	return (<div className="bg-yellow-900_ grid grid-cols-2 gap-4">
		<Outlet />

		{categories.map((el, i) => (
			<Category key={i} text={el} />
		))}
	</div>);
}

const Category = ({ text }) => {
	const navigate = useNavigate();

	const handleClick = () => navigate(String(text).toLowerCase());

	return (<div className="cursor-pointer border-2 border-blue-700 rounded-md py-4 flex items-center justify-center"
		onClick={handleClick}
	>
		<p>{text}</p>
	</div>);
}
