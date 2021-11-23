// Import module
import { authReducer } from "../reducers/authReducer";
import { apiUrl } from "./constanst";
import setAuthToken from "../../utils/setAuthToken";

import axios from "axios";
import React, { createContext, useReducer, useEffect } from "react";

// Import constant
import { LOCAL_STORAGE_TOKEN_NAME, SET_AUTH } from "./constanst";

// Export constant
export const authContext = createContext();

// Provider
const AuthContextProvider = ({ children }) => {
  // Reducer
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  // Authenticate user
  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }

    try {
      const response = await axios.get(`${apiUrl}/auth`);
      if (response.data.success) {
        dispatch({
          type: SET_AUTH,
          payload: { isAuthenticated: true, user: response.data.user },
        });
      }
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setAuthToken(null);
      dispatch({
        type: SET_AUTH,
        payload: { isAuthenticated: false, user: null },
      });
    }
  };

  useEffect(async () => await loadUser(), []);
  // Register User
  const registerUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, userForm);

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, userForm);

      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Logout User
  const logoutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    setAuthToken(null);
    dispatch({
      type: SET_AUTH,
      payload: { isAuthenticated: false, user: null },
    });
  };

  // Get User
  const getUser = () => authState.user;

  // Context data
  const authContextData = {
    loginUser,
    authState,
    logoutUser,
    registerUser,
    getUser,
  };

  // Return provider
  return (
    <authContext.Provider value={authContextData}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
