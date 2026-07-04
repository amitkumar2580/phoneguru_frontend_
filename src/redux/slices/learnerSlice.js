import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  logoutLearnerAPI,
  createLearnerRequestAPI,
  sendOtpAPI,
  verifyOtpAPI,
  getLearnerDashboardAPI,
} from "../api/learnerAPI";

export const createLearnerRequest = createAsyncThunk(
  "learner/createRequest",

  async (formData, thunkAPI) => {
    try {
      const response = await createLearnerRequestAPI(formData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something went wrong",
      );
    }
  },
);

export const sendOtp = createAsyncThunk(
  "learner/sendOtp",

  async (phone, thunkAPI) => {
    try {
      const response = await sendOtpAPI(phone);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to send OTP",
      );
    }
  },
);

export const verifyOtp = createAsyncThunk(
  "learner/verifyOtp",

  async (otpData, thunkAPI) => {
    try {
      const response = await verifyOtpAPI(otpData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "OTP Verification Failed",
      );
    }
  },
);

export const getLearnerDashboard = createAsyncThunk(
  "learner/dashboard",

  async (_, thunkAPI) => {
    try {
      const response = await getLearnerDashboardAPI();

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to load dashboard",
      );
    }
  },
);

export const logoutLearner = createAsyncThunk(
  "learner/logout",

  async (_, thunkAPI) => {
    try {
      const response = await logoutLearnerAPI();

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Logout Failed",
      );
    }
  },
);

const initialState = {
  otpLoading: false,
  formLoading: false,
  dashboardLoading: false,

  error: null,

  success: false,

  otpSent: false,

  otpVerified: false,

  learnerData: null,

  dashboardData: null,
};

const learnerSlice = createSlice({
  name: "learner",

  initialState,

  reducers: {
    clearLearnerState: (state) => {
      state.loading = false;

      state.error = null;

      state.success = false;
    },

    resetOtpState: (state) => {
      state.otpSent = false;

      state.otpVerified = false;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(createLearnerRequest.pending, (state) => {
        state.loading = true;

        state.error = null;
      })
      .addCase(getLearnerDashboard.pending, (state) => {
        state.dashboardLoading = true;
        state.error= null;
      })

     

      .addCase(getLearnerDashboard.rejected, (state, action) => {
        state.dashboardLoading = false;

        state.error = action.payload;
      })
      .addCase(createLearnerRequest.fulfilled, (state, action) => {
        state.loading = false;

        state.success = true;

        state.learnerData = action.payload;
      })

      .addCase(createLearnerRequest.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      })

      .addCase(sendOtp.pending, (state) => {
        state.loading = true;

        state.error = null;
      })

      .addCase(sendOtp.fulfilled, (state) => {
        state.loading = false;

        state.otpSent = true;
      })

      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      })

      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;

        state.error = null;
      })

      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading = false;

        state.otpVerified = true;
      })

      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      })

     .addCase(getLearnerDashboard.fulfilled, (state, action) => {
  state.dashboardLoading = false;

  state.dashboardData =
    action.payload;
})

      .addCase(logoutLearner.fulfilled, (state) => {
        state.learnerData = null;

        state.dashboardData = null;

        state.otpVerified = false;
      });
  },
});

export const { clearLearnerState, resetOtpState } = learnerSlice.actions;

export default learnerSlice.reducer;
