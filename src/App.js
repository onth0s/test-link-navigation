import { NavLinkBar } from './components';

function App() {
	return (<div className="container mx-auto">	
		<NavLinkBar
			links={[
				'home',
				'shop',
				'electronics',
				'phones',
				'Xiaomi',
				'Mi 11 Lite 5G',
				'checkout',
			]}
		/>
	</div>);
}

export default App;
