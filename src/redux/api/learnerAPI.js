import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/learner`,
  withCredentials: true,
});
// CREATE REQUEST
export const createLearnerRequestAPI = async (formData) => {
  const response = await API.post("/create-request", formData);

  return response.data;
};

// SEND OTP
export const sendOtpAPI = async (phone) => {
  const response = await API.post("/send-otp", { phone });

  return response.data;
};

// VERIFY OTP
export const verifyOtpAPI = async (data) => {
  const response = await API.post(
    "/verify-otp",
    data
  );



  return response.data;
};
// DASHBOARD
export const getLearnerDashboardAPI = async () => {
  const response = await API.get("/dashboard");

  return response.data;
};

// LOGOUT
export const logoutLearnerAPI = async () => {
  const response = await API.post("/logout");

  return response.data;
};
