import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="header">
			<div className="logo">
				<Link to="/">GoalSetter</Link>
			</div>
			<ul>
				{/* login */}
				<li>
					<Link to="./login">
						<FaSignInAlt></FaSignInAlt> Login
					</Link>
				</li>

				{/* register */}
				<li>
					<Link to="./register">
						<FaUser></FaUser> Register
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
