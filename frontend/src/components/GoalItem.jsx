import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteGoal, updateGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
	const [text, setText] = useState("");

	const dispatch = useDispatch();

	const onEdit = (e) => {
		e.preventDefault();
		setText(text);
	};

	const onUpdate = {
		id: goal._id,
		text: text,
	};

	return (
		<div className="goal">
			<div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
			<h2>{goal.text}</h2>
			{/* delete goal */}
			<button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
				X
			</button>

			{/* update goal */}
			<form onSubmit={onEdit}>
				<div className="form-group">
					<input
						type="text"
						name="text"
						id="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<button
						className="btn btn-avg"
						onClick={() => {
							dispatch(updateGoal(onUpdate));
						}}
					>
						Update
					</button>
				</div>
			</form>
		</div>
	);
}

export default GoalItem;
