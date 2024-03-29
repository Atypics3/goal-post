import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Router>
				<div className="container">
					{/* header */}
					<Header />
					{/* router */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/dashboard" default element={<Dashboard />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</div>
			</Router>
			{/* toast */}
			<ToastContainer />
		</>
	);
}

export default App;
