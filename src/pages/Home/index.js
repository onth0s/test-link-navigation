import { Link } from "react-router-dom";

export const Home = () => {
	return (<div>
		<Link to="/shop" className="cursor-pointer border-2 border-blue-700 rounded-md py-4 flex items-center justify-center">
			To Shop
		</Link>
	</div>);
}
