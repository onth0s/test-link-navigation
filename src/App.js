import { NavLinkBar } from './components';

function App() {
	return (<div className="container mx-auto">
		<NavLinkBar
			links={[
				'home',
				'shop',
				'checkout',
			]}
		/>
	</div>);
}

export default App;
