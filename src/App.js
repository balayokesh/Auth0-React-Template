import { Link } from 'react-router-dom';

import Login from './Login';
import Logout from './Logout'

function App() {
  return (
    <>
      <div>
        <Link to='/login' component={Login}>Login</Link>
      </div>
      <div>
        <Link to='/logout' component={Logout}>Logout</Link>
      </div>
    </>
  );
}

export default App;
