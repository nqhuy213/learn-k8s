import {getAuth, onAuthStateChanged} from 'firebase/auth';
import moment from 'moment';
import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {AuthRoute} from './components/AuthRoute';
import {PublicRoute} from './components/PublicRoute';
import HomePage from './pages/HomePage/HomePage';
import {LoginPage} from './pages/LoginPage';
import {RegisterPage} from './pages/RegisterPage';
import {AuthenticationService} from './services/AuthenticationService';

export default function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const authenticationService = new AuthenticationService();
  // Code for componentWillMount here
  // This code is called only one time before intial render

  useEffect(() => {
    const auth = getAuth();
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setIsAuthenticating(false);
        return;
      }
      const userIdToken = await currentUser.getIdToken();
      const response = await authenticationService.verifyUserIdToken(userIdToken);
      if (response.status === 'success') {
        setUser(response.payload);
      } else {
        setUser(null);
      }
      setIsAuthenticating(false);
    });
  }, []);

  if (isAuthenticating) {
    return <div>Loading...</div>;
  }
  return (
    <Routes>
      <Route path="/" element={<AuthRoute redirect="/auth/login" authed={user ? true : false} />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/auth/login" element={<PublicRoute redirect="/" authed={user ? true : false} />}>
        <Route path="" element={<LoginPage />} />
      </Route>
      <Route
        path="/auth/register"
        element={<PublicRoute redirect="/" authed={user ? true : false} />}
      >
        <Route path="" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}
