import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import Login from './Login';
import Logout from './Logout'

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isAuthenticated) {
    return (
      <>
        <div>
          <Link to='/logout' component={Logout}>Logout</Link>
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
        <Link to='/login' component={Login}>Login</Link>
      </div>
    )
  }
}

export default App;
