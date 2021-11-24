import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
	const { user, isAuthenticated, isLoading } = useAuth0();
	const { loginWithRedirect } = useAuth0();
	const { logout } = useAuth0();

	if (isLoading) {
		return <div>Loading...</div>
	}
    if (isAuthenticated) {
		return (
			<>
				<div>
					<button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
					<div>
						<img src={user.picture} alt={user.name} />
						<h2>{user.name}</h2>
						<p>{user.email}</p>
					</div>
				</div>
			</>
		);
	}
	else {
		return (
			<div>
				<button onClick={loginWithRedirect}>Login</button>
			</div>
		)
	}
}
