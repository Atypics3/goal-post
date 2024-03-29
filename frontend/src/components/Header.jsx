import { FaSignInAlt, FaSignOutAlt, FaUser, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	// logout service
	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	};

	return (
		<header className="header">
			<div className="logo">
				<Link to="/dashboard">GoalSetter</Link>
			</div>
			{/* renders appropriate links and icons if user or not user */}
			<ul>
				{user ? (
					<li>
						<button className="btn" onClick={onLogout}>
							<FaSignOutAlt /> Logout
						</button>
					</li>
				) : (
					<>
						<li>
							<Link to="/">
								<FaHome /> Home
							</Link>
						</li>

						<li>
							<Link to="/login">
								<FaSignInAlt /> Login
							</Link>
						</li>
						<li>
							<Link to="/register">
								<FaUser /> Register
							</Link>
						</li>
					</>
				)}
			</ul>
		</header>
	);
}

export default Header;
