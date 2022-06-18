import axios from "axios";

const API_URL = "/api/goals/";

// create new goal
const createGoal = async (goalData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.post(API_URL, goalData, config);

	return response.data;
};

// get user goals
const getGoals = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL, config);

	return response.data;
};

// update user goal
const updateGoal = async (goalID, body, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.put(API_URL + goalID, body, config);

	return response.data;
};

// delete user goal
const deleteGoal = async (goalID, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.delete(API_URL + goalID, config);

	return response.data;
};

const goalService = {
	createGoal,
	getGoals,
	updateGoal,
	deleteGoal,
};

export default goalService;
