import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/tutor`,

  withCredentials: true,
});

// SEND OTP
export const sendTutorOtpAPI = async (
  phone
) => {
  const response = await API.post(
    "/send-otp",
    { phone }
  );

  return response.data;
};

// VERIFY OTP
export const verifyTutorOtpAPI =
  async (data) => {
    const response = await API.post(
      "/verify-otp",
      data
    );

    return response.data;
  };

// CREATE PROFILE
export const createTutorProfileAPI =
  async (formData) => {
    const response = await API.post(
      "/create-profile",
      formData
    );

    return response.data;
  };

// DASHBOARD
export const getTutorDashboardAPI =
  async () => {
    const response =
      await API.get("/dashboard");

    return response.data;
  };
  // NEARBY REQUESTS
export const getNearbyRequestsAPI =
  async (lng, lat) => {
    const response =
      await API.get(
        `/nearby-requests?lng=${lng}&lat=${lat}`
      );

    return response.data;
  };


// LEADERBOARD
export const getLeaderboardAPI =
  async () => {
    const response =
      await API.get(
        "/leaderboard"
      );

    return response.data;
  };



// LOGOUT
export const logoutTutorAPI =
  async () => {
    const response =
      await API.post("/logout");

    return response.data;
  };