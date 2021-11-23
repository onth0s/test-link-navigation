const categories = [
	'Computers',
	'Phones',
	'Games',
	'Books',
];

export const Shop = () => {
	return (<div className="bg-yellow-900_ grid grid-cols-2 gap-4">
		{categories.map((el, i) => (
			<Category key={i} text={el} />
		))}
	</div>);
}

const Category = ({ text }) => {
	return (<div className="cursor-pointer border-2 border-blue-700 rounded-md py-4 flex items-center justify-center">
		<p>{text}</p>
	</div>);
}
