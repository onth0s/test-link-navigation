import { useNavigate } from "react-router";

export const NavLinkBar = ({ links = [] }) => {
	return (<div className="mt-12 mb-6 mx-4 bg-gray-800 text-xl h-14 flex space-x-4 items-center px-4 overflow-auto">
		{links.map((el, i) => (
			<InnerLink key={i} text={el.name} hideArrow={i === links.length - 1} route={el.route} />
		))}
	</div>);
}

const InnerLink = ({ text, hideArrow, route }) => {
	const navigate = useNavigate();
	const arrow = <i className="transform scale-75 fas mt-1 fa-chevron-right" />;

	const handleLink = () => navigate(route);

	return (<div className="flex space-x-2 bg-gray-600_ items-center cursor-pointer"
		onClick={handleLink}
	>
		<p className="capitalize">{text}</p>
		{!hideArrow && arrow}
	</div>);
}
