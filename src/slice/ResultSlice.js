import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import resultService from "../service/ResultService";

const initialState = {
  results: [],
  resultData: {},
  avater: {},
  grade: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const result = createAsyncThunk(
  "result/results",
  async (id, thunkAPI) => {
    try {
      return await resultService.results(id);
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

export const resultsData = createAsyncThunk(
  "result/resultsData",
  async (id, thunkAPI) => {
    try {
      return await resultService.resultsData(id);
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

export const resultAvater = createAsyncThunk(
  "result/resultAvater",
  async (id, thunkAPI) => {
    try {
      return await resultService.avater(id);
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

// export const resultGrade = createAsyncThunk(
//   "result/gradeScore",
//   async (id, thunkAPI) => {
//     try {
//       return await resultService.grade(id);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const resultSlice = createSlice({
  name: "result",
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
      .addCase(result.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(result.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.results = action.payload;
      })
      .addCase(result.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(resultsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resultsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.resultData = action.payload;
      })
      .addCase(resultsData.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(resultAvater.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resultAvater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.avater = action.payload;
      })
      .addCase(resultAvater.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
    //   .addCase(resultGrade.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(resultGrade.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     state.grade = action.payload;
    //   })
    //   .addCase(resultGrade.rejected, (state, action) => {
    //     state.isError = true;
    //     state.isSuccess = false;
    //     state.message = action.payload;
    //   });
  },
});

export const { reset } = resultSlice.actions;
export default resultSlice.reducer;
