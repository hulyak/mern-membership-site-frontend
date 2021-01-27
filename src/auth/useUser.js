import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

// get the current user from firebase with onAuthStateChanged
// allows us to add a listener callback, calls whenever the user's auth state changes
// it will call with user object that is either logged in or false
export const useUser = () => {
  const [userInfo, setUserInfo] = useState(() => {
    const user = firebase.auth().currentUser;
    const isLoading = !user;
    return { user, isLoading };
  });

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({ isLoading: false, user });
    });
  }, []);

  return userInfo;
};

