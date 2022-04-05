import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import studentService from "../service/StudentService";

const initialState = {
  students: [],
  age: [],
  state: [],
  level: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const studentsList = createAsyncThunk(
  "student/students",
  async (_, thunkAPI) => {
    try {
      return await studentService.students();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const ageCategories = createAsyncThunk(
  "student/age",
  async (_, thunkAPI) => {
    try {
      return await studentService.studentAgeGroup();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const stateCategories = createAsyncThunk(
  "student/state",
  async (_, thunkAPI) => {
    try {
      return await studentService.studentStateGroup();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const levelCategories = createAsyncThunk(
  "student/level",
  async (_, thunkAPI) => {
    try {
      return await studentService.studentLevelGroup();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(studentsList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(studentsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.students = action.payload;
      })
      .addCase(studentsList.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(ageCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(ageCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.age = action.payload;
      })
      .addCase(ageCategories.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(stateCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(stateCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.state = action.payload;
      })
      .addCase(stateCategories.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(levelCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(levelCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.level = action.payload;
      })
      .addCase(levelCategories.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = studentsSlice.actions;
export default studentsSlice.reducer;
