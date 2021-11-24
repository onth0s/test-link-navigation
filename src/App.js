import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Home, Shop } from './pages';
import { Books, Games } from './pages/Shop';

import { NavLinkBar } from './components';

import { URLs } from './utils';

function App() {
	const [links, setLinks] = useState([
		{ name: 'home', route: '/' },
	]);

	const { pathname } = useLocation();

	useEffect(() => {
		console.log(`pathname: ${pathname}`);

		const names = (pathname === '/') ? ["/"] : pathname.split('/');
		names[0] = '/';
		let names2 = [];

		for (let i = 0; i < names.length; i++) {
			let str = '';

			for (let j = 0; j < i + 1; j++) {
				str += names[j] + ((j === i) || (j === 0) ? '' : '/');
			}

			names2[i] = str;
		}

		let arr = [];
		names2.forEach(el => {
			URLs.forEach(el2 => {
				if (el === el2.route) arr.push(el2);
			});
		});

		setLinks(l => arr);

		// setLinks(l => []);
	}, [pathname]);

	return (<div className="container mx-auto">
		<NavLinkBar links={links} />

		{/* <div className="border-2 border-white rounded-lg p-4 mx-4 mb-2">
			<Games />
		</div> */}

		<div className="border-2 border-white rounded-lg p-4 mx-4">
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/shop/" element={<Shop />} />
				<Route path="/shop/books" element={<Books />} />
				<Route path="/shop/games" element={<Games />} />

				<Route path="*" element={<div>
					<p>404: No match for this route!</p>
				</div>} />
			</Routes>
		</div>
	</div>);
}

export default App;
