// Import modules
import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { bookReducer } from "../reducers/bookReducer";
import { authContext } from "./authContext";

// Import Constant
import {
  apiUrl,
  CHOOSE_DATE_BOOKING,
  CHOOSE_SERVICES_BOOKING,
  SET_PAYMENT,
  TOTAL_PRICE,
} from "./constanst";

// Export Constant
export const bookContext = createContext();

// Provider
const BookContextProvider = ({ children }) => {
  // Reducer
  const [bookState, dispatch] = useReducer(bookReducer, {
    date: null,

    people: null,
    time: null,
    service: [],
    totalPrice: 0,

    typePayment: "offline",
    statusPayment: 0,

    statusBooking: 0,
  });

  // Context
  const {
    authState: { user },
  } = useContext(authContext);

  // State
  const [listBooking, setListBooking] = useState([]);

  // Choose Date
  const chooseDate = (data) => {
    dispatch({
      type: CHOOSE_DATE_BOOKING,
      payload: data,
    });
  };

  // Choose Services
  const chooseService = (data) => {
    dispatch({
      type: CHOOSE_SERVICES_BOOKING,
      payload: data,
    });
  };

  // Get Booking
  const getBook = () => bookState;

  // Set Total Price
  const totalPrice = (price) => {
    dispatch({
      type: TOTAL_PRICE,
      payload: price,
    });
  };

  // Set Payment
  const setPayment = (data) => {
    dispatch({
      type: SET_PAYMENT,
      payload: data,
    });
  };

  // Post Booking
  const postBooking = async () => {
    try {
      const response = await axios.post(`${apiUrl}/booking`, bookState);
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Post Payment
  const postPayment = async (newBooking) => {
    try {
      const response = await axios.post(
        `${apiUrl}/booking/payment`,
        newBooking
      );

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Get list booking
  const getAllBooking = async (username) => {
    try {
      const response = await axios.post(`${apiUrl}/booking/getbook`, {
        username: username,
      });

      setListBooking(response.data);
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Delete booking
  const deleteBooking = async (id) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/booking/deletebook/${id}/${user.username}`
      );
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Update payment booking
  const updatePaymentBooking = async (id) => {
    console.log(id);
    try {
      const response = await axios.put(
        `${apiUrl}/booking/payment/response/${id}`
      );
      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Context data
  const bookContextData = {
    setPayment,
    totalPrice,
    getBook,
    chooseDate,
    chooseService,
    postBooking,
    postPayment,
    getAllBooking,
    listBooking,
    deleteBooking,
    updatePaymentBooking,
  };

  // Return provider
  return (
    <bookContext.Provider value={bookContextData}>
      {children}
    </bookContext.Provider>
  );
};

export default BookContextProvider;
