import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

function Dashboard() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { goals, isLoading, isError, message } = useSelector(
		(state) => state.goals
	);

	useEffect(() => {
		if (isError) {
			console.log(message);
		} else {
			dispatch(reset());
		}

		// Fetches goal if user is validated. If not, redirects to login page
		if (user) {
			dispatch(getGoals());
		} else {
			navigate("/login");
		}
	}, [user, navigate, isError, message, dispatch]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<section className="heading">
				<h1>Welcome {user && user.name}!</h1>
				<p>Goals Dashboard</p>
			</section>

			<GoalForm />

			<section className="content">
				{goals.length > 0 ? (
					<div className="goals">
						{goals.map((goal) => (
							<GoalItem key={goal._id} goal={goal} />
						))}
					</div>
				) : (
					<h3>There are no goals set yet.</h3>
				)}
			</section>
		</>
	);
}

export default Dashboard;
