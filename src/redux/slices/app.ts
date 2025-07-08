import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '@services';
interface Item {
  id: number;
  title: string;
}

interface AppState {
  data: Item[];
  loading: boolean;
  error: string | null;
}

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await apiService.get<Item[]>('/posts');
  return response.data;
});

const initialState: AppState = {
  data: [],
  loading: false,
  error: null,
};

const appSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchItems.pending, state => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default appSlice.reducer;
