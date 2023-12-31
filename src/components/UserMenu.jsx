import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logOutThunk } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/auth.selectors';
const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div className="user-menu-container">
      {user && (
        <p className="welcome-text">
          Welcome, {user.email}
        </p>
      )}
      <button
        onClick={onLogOut}
        className="logout-button"
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
