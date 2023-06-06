import React from 'react';
import { Login } from './components/Login/Login';
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { logoutUser } from '../../store/slice/auth/action-creators';

export const Main = () => {
  const dispatch = useAppDispatch();

  const profile = useSelector(
    (state: RootState) => state.auth.profileData.profile
  );
  const isLoggedIn = useSelector(
    (state: RootState) => !!state.auth.authData.accessToken
  );

  const renderProfile = () => (
    <div>
      <div>Вы успешно авторизовались, {profile}</div>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </div>
  );

  return (
    <div>
      <h1>Main</h1>
      {isLoggedIn ? renderProfile() : <Login />}
    </div>
  );
};
