import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getTodaySessionsAPI,
  getUpcomingSessionsAPI,
  getSessionHistoryAPI,
  acceptRequestAPI,
  scheduleSessionAPI,
  updateSessionStatusAPI,
  rateTutorAPI,
} from "../api/sessionAPI";

// TODAY
export const getTodaySessions = createAsyncThunk(
  "session/today",

  async (_, thunkAPI) => {
    try {
      return await getTodaySessionsAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to load today sessions",
      );
    }
  },
);

// UPCOMING
export const getUpcomingSessions = createAsyncThunk(
  "session/upcoming",

  async (_, thunkAPI) => {
    try {
      return await getUpcomingSessionsAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to load upcoming sessions",
      );
    }
  },
);

// HISTORY
export const getSessionHistory = createAsyncThunk(
  "session/history",

  async (_, thunkAPI) => {
    try {
      return await getSessionHistoryAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to load history",
      );
    }
  },
);

// ACCEPT REQUEST
export const acceptRequest = createAsyncThunk(
  "session/acceptRequest",

  async (learnerId, thunkAPI) => {
    try {
      return await acceptRequestAPI(learnerId);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to accept request",
      );
    }
  },
);

// SCHEDULE SESSION
export const scheduleSession = createAsyncThunk(
  "session/schedule",

  async (data, thunkAPI) => {
    try {
      return await scheduleSessionAPI(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to schedule session",
      );
    }
  },
);

// UPDATE STATUS
export const updateSessionStatus = createAsyncThunk(
  "session/updateStatus",

  async (data, thunkAPI) => {
    try {
      return await updateSessionStatusAPI(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update session",
      );
    }
  },
);

export const rateTutor =
  createAsyncThunk(
    "session/rateTutor",

    async (
      data,
      thunkAPI
    ) => {
      try {
        return await rateTutorAPI(
          data
        );
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data
            ?.message ||
            "Failed to rate tutor"
        );
      }
    }
  );

const initialState = {
  todaySessions: [],
  upcomingSessions: [],
  historySessions: [],

  loading: false,
  error: null,
};

const sessionSlice = createSlice({
  name: "session",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // TODAY
      .addCase(getTodaySessions.pending, (state) => {
        state.loading = true;
      })

      .addCase(getTodaySessions.fulfilled, (state, action) => {
        state.loading = false;

        state.todaySessions = action.payload.sessions;
      })

      .addCase(getTodaySessions.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      })

      // UPCOMING
      .addCase(getUpcomingSessions.fulfilled, (state, action) => {
        state.upcomingSessions = action.payload.sessions;
      })

      // HISTORY
      .addCase(getSessionHistory.fulfilled, (state, action) => {
        state.historySessions = action.payload.sessions;
      })

      // ACCEPT REQUEST
      .addCase(acceptRequest.pending, (state) => {
        state.loading = true;
      })

      .addCase(acceptRequest.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(acceptRequest.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      })

      // SCHEDULE SESSION
      .addCase(scheduleSession.pending, (state) => {
        state.loading = true;
      })

      .addCase(scheduleSession.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(scheduleSession.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      })
      .addCase(updateSessionStatus.pending, (state) => {
        state.loading = true;
      })

      .addCase(updateSessionStatus.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(updateSessionStatus.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      });
  },
});

export default sessionSlice.reducer;
