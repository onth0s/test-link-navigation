import { useParams } from "react-router";

export const NthGame = () => {
	const { id } = useParams();

	return (<div className="bg-yellow-900_ text-lg">
		<p>Game Number: {(id < 10 ? '0' : '') + id}</p>
	</div>);
}
