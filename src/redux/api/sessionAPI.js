import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/session`,

  withCredentials: true,
});

// TODAY SESSIONS
export const getTodaySessionsAPI =
  async () => {
    const response =
      await API.get("/today");

    return response.data;
  };

// UPCOMING SESSIONS
export const getUpcomingSessionsAPI =
  async () => {
    const response =
      await API.get("/upcoming");

    return response.data;
  };

// HISTORY
export const getSessionHistoryAPI =
  async () => {
    const response =
      await API.get("/history");

    return response.data;
  };


  // ACCEPT REQUEST
export const acceptRequestAPI =
  async (learnerId) => {
    const response =
      await API.post(
        "/accept-request",
        {
          learnerId,
        }
      );

    return response.data;
  };

  // SCHEDULE SESSION
export const scheduleSessionAPI =
  async (data) => {
    const response =
      await API.patch(
        "/schedule-session",
        data
      );

    return response.data;
  };


  // UPDATE SESSION STATUS
export const updateSessionStatusAPI =
  async (data) => {
    const response =
      await API.patch(
        "/update-status",
        data
      );

    return response.data;
  };

  // RATE TUTOR
export const rateTutorAPI =
  async (data) => {
    const response =
      await API.post(
        "/rate",
        data
      );

    return response.data;
  };