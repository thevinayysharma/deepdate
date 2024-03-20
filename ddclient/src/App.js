import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import OnboardingScreen from './OnboardingScreen';
import AuthService from './services/AuthService';
import Home from './components/home/Home';

const App = () => {
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const isAuthenticated = await AuthService.isAuthenticated();
      setAuthenticated(isAuthenticated);
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  const handleOnboardingComplete = () => {
    setOnboardingComplete(true);
  };    

  const handleLogout = () => {
    AuthService.logout();
    setAuthenticated(false);
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while checking authentication status
  }

  if (!authenticated) {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {onboardingComplete ? <Redirect to="/login" /> : <OnboardingScreen onComplete={handleOnboardingComplete} />}
          </Route>
          {/* Additional routes */}
        </Switch>
      </Router>
    );
  }

  return (
    <Router>
      <div>
        {/* Routes for authenticated users */}
        <Switch>
          <Route path="/home" component={Home} />
          {/* Additional authenticated routes */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
//react-geolocated 