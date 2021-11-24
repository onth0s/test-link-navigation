import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Home, Shop } from './pages';
import { Books, Games } from './pages/Shop';

import { NavLinkBar } from './components';

import { getPathArr } from './utils';

function App() {
	const [links, setLinks] = useState([{ name: 'hoMe', route: '/' }]);

	const { pathname } = useLocation();

	useEffect(() => {
		setLinks(() => getPathArr(pathname));
	}, [pathname]);

	return (<div className="container mx-auto">
		<NavLinkBar links={links} />

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
