import { Routes, Route } from 'react-router-dom';

import { Home, Shop } from './pages';

import { NavLinkBar } from './components';

function App() {
	return (<div className="container mx-auto">
		<NavLinkBar
			links={[
				'home',
				'shop',
				'something else',
				'"·$%&/()',
				'checkout',
			]}
		/>

		<div className="border-2 border-white rounded-lg p-4">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
			</Routes>
		</div>
	</div>);
}

export default App;
