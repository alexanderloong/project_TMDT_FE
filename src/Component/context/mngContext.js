// Import modules
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// Import Constant
import { apiUrl } from "./constanst";

// Export Constant
export const mngContext = createContext();

// Provider
const MngContextProvider = ({ children }) => {
  // State
  const [listService, getListService] = useState();

  // Confirm service
  const confirmService = async (id) => {
    try {
      const response = await axios.put(`${apiUrl}/manage/booking/${id}`);

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Insert Service
  const insertService = async (data) => {
    data.priceService = parseInt(data.priceService, 10);

    try {
      const response = await axios.post(`${apiUrl}/manage/service`, data);

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Get all service
  const getAllService = async () => {
    try {
      const response = await axios.get(`${apiUrl}/manage/service`);

      getListService(response.data.listService);
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Delete service
  const deleteService = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/manage/service/${id}`);

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Update service
  const updateService = async (data) => {
    try {
      const response = await axios.post(
        `${apiUrl}/manage/service/update`,
        data
      );

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  useEffect(async () => await getAllService());

  // Context data
  const serviceContextData = {
    deleteService,
    listService,
    insertService,
    confirmService,
    updateService,
  };

  // Return Provider
  return (
    <mngContext.Provider value={serviceContextData}>
      {children}
    </mngContext.Provider>
  );
};

export default MngContextProvider;
