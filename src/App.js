import { Routes, Route, useLocation } from 'react-router-dom';

import { Home, Shop } from './pages';
import { Books, Games } from './pages/Shop';

import { NavLinkBar } from './components';
import { useEffect, useState } from 'react';

function App() {
	const links = useState([
		'Home'
	]);

	const { pathname } = useLocation();
	useEffect(() => {
		console.log(`pathname: ${pathname}`);
	}, [pathname]);

	return (<div className="container mx-auto">
		<NavLinkBar
			links={[
				{
					name: 'home',
					route: '/'
				},
				{
					name: 'shop',
					route: '/shop'
				},
				{
					name: 'checkout',
					route: '/checkout'
				},
				{
					name: 'home',
					route: '/'
				},
				{
					name: 'shop',
					route: '/shop'
				},
				{
					name: 'checkout',
					route: '/checkout'
				},
			]}
		/>

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
					<p>404: No match for this route</p>
				</div>} />
			</Routes>
		</div>
	</div>);
}

export default App;
