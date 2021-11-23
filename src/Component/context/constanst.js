// Export constant
export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "someURL";

export const LOCAL_STORAGE_TOKEN_NAME = "customer-nails-service-token";

export const SET_AUTH = "SET_AUTH";
export const CHOOSE_DATE_BOOKING = "CHOOSE_DATE_BOOKING";
export const CHOOSE_SERVICES_BOOKING = "CHOOSE_SERVICES_BOOKING";
export const TOTAL_PRICE = "TOTAL_PRICE";
export const SET_PAYMENT = "SET_PAYMENT";
