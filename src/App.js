import { Routes, Route } from 'react-router-dom';

import { Home, Shop } from './pages';

import { NavLinkBar } from './components';

function App() {
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

		<div className="border-2 border-white rounded-lg p-4 mx-4">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />

				<Route path="*" element={<div>
					<p>404: No match for this route</p>
				</div>} />
			</Routes>
		</div>
	</div>);
}

export default App;
