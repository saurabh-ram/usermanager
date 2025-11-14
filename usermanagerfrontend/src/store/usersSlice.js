import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, addUser, updateUser, deleteUser } from "../app/userApi.js";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await getUsers();
  return res.data;
});

export const createUser = createAsyncThunk("users/add", async (data) => {
  const res = await addUser(data);
  return res.data;
});

export const editUser = createAsyncThunk("users/edit", async ({ id, data }) => {
  const res = await updateUser(id, data);
  return res.data;
});

export const removeUser = createAsyncThunk("users/delete", async (id) => {
  await deleteUser(id);
  return id;
});

const userSlice = createSlice({
  name: "users",
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })

      .addCase(createUser.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      .addCase(editUser.fulfilled, (state, action) => {
        const idx = state.list.findIndex((u) => u.id === action.payload.id);
        state.list[idx] = action.payload;
      })

      .addCase(removeUser.fulfilled, (state, action) => {
        state.list = state.list.filter((u) => u.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
