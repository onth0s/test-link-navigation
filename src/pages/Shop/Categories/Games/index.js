import { useNavigate } from 'react-router';

export const Games = () => {
	const navigate = useNavigate();
	
	const handleClick = (i) => navigate(String(i));
	
	return (<div className="grid grid-cols-3 gap-2">
		{[...Array(12).keys()].map((el, i) => (
			<div key={i} className="border-2 border-blue-700 flex items-center justify-center rounded-md py-2 cursor-pointer"
			onClick={() => handleClick(i + 1)}
			>
				<p>Game {(i < 10 ? '0' : '') + (i + 1)}</p>
			</div>
		))}
	</div>);
}

export { NthGame } from './NthGame';
