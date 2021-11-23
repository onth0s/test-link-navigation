export const NavLinkBar = ({ links = [] }) => {
	return (<div className="m-12 bg-gray-800 text-2xl h-20 flex space-x-4 items-center px-4">
		{links.map((el, i) => (
			<InnerLink text={el} hideArrow={i == links.length - 1} />
		))}
	</div>);
}

const InnerLink = ({ text, hideArrow }) => {
	const arrow = <i className="transform scale-75 fas mt-1 fa-chevron-right" />;

	return (<div className="flex space-x-2 bg-gray-600 items-center">
		<p className="capitalize">{text}</p>
		{!hideArrow && arrow}
	</div>);
}
