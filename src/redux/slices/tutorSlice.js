import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  sendTutorOtpAPI,
  verifyTutorOtpAPI,
  createTutorProfileAPI,
  getTutorDashboardAPI,
  logoutTutorAPI,
  getNearbyRequestsAPI,
  getLeaderboardAPI,
} from "../api/tutorAPI";

// SEND OTP
export const sendTutorOtp = createAsyncThunk(
  "tutor/sendOtp",

  async (phone, thunkAPI) => {
    try {
      return await sendTutorOtpAPI(phone);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to send OTP",
      );
    }
  },
);

// VERIFY OTP
export const verifyTutorOtp = createAsyncThunk(
  "tutor/verifyOtp",

  async (data, thunkAPI) => {
    try {
      return await verifyTutorOtpAPI(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "OTP Verification Failed",
      );
    }
  },
);

// CREATE PROFILE
export const createTutorProfile = createAsyncThunk(
  "tutor/createProfile",

  async (data, thunkAPI) => {
    try {
      return await createTutorProfileAPI(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Profile creation failed",
      );
    }
  },
);

// DASHBOARD
export const getTutorDashboard = createAsyncThunk(
  "tutor/dashboard",

  async (_, thunkAPI) => {
    try {
      return await getTutorDashboardAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to load dashboard",
      );
    }
  },
);

// LEADERBOARD
export const getLeaderboard = createAsyncThunk(
  "tutor/leaderboard",

  async (_, thunkAPI) => {
    try {
      return await getLeaderboardAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch leaderboard",
      );
    }
  },
);

// NEARBY REQUESTS
export const getNearbyRequests = createAsyncThunk(
  "tutor/nearbyRequests",

  async ({ lng, lat }, thunkAPI) => {
    try {
      return await getNearbyRequestsAPI(lng, lat);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch nearby requests",
      );
    }
  },
);

// LOGOUT
export const logoutTutor = createAsyncThunk(
  "tutor/logout",

  async (_, thunkAPI) => {
    try {
      return await logoutTutorAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Logout failed",
      );
    }
  },
);

const initialState = {
  otpSent: false,
  otpVerified: false,
  tutorData: null,
  dashboardData: null,
  leaderboard: [],
  nearbyRequests: [],
  loading: false,
  error: null,
};

const tutorSlice = createSlice({
  name: "tutor",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(sendTutorOtp.fulfilled, (state) => {
        state.otpSent = true;
      })

      .addCase(verifyTutorOtp.fulfilled, (state) => {
        state.otpVerified = true;
      })

      .addCase(createTutorProfile.fulfilled, (state, action) => {
        state.tutorData = action.payload;
      })

      // DASHBOARD
      .addCase(getTutorDashboard.pending, (state) => {
        state.loading = true;
      })

      .addCase(getTutorDashboard.fulfilled, (state, action) => {
        state.loading = false;

        state.dashboardData = action.payload.dashboard;
      })

      .addCase(getTutorDashboard.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      })

      // NEARBY REQUESTS
      .addCase(getNearbyRequests.fulfilled, (state, action) => {
        console.log("PAYLOAD:", action.payload);

        state.nearbyRequests = action.payload.nearbyRequests;
      })

      .addCase(getLeaderboard.fulfilled, (state, action) => {
        state.leaderboard = action.payload.tutors;
      });
  },
});

export default tutorSlice.reducer;
