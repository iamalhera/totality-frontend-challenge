import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// import Profile from './Profile';

const App: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  console.log(user);
  return (
    <div className="App">
      <h1 className=''>Totality Frontend Challenge</h1>

      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <div>
          <h3>Welcome, {user?.name}</h3>
          <img src={user?.picture} height={100} width={100} style={{borderRadius: '50%'}}/>
          <button><Link to={"/profile"}>Go to Profile</Link></button>
          <button onClick={() => logout({
            logoutParams: { returnTo: window.location.origin }
          })}>
            Log Out
          </button>
        </div>
      )}

      <Routes>
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </div>
  );
};

export default App;
