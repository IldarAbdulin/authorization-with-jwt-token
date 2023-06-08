import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Main } from './pages';
import { RootState, useAppDispatch } from './store';
import { Header } from './components';
import { getProfile } from './store/slice/auth/action-creators';

function App() {
  const isLoggedIn = useSelector(
    (state: RootState) => !!state.auth.authData.accessToken
  );
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to={`/`} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
