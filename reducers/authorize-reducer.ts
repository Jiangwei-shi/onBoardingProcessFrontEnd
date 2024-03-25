import { createSlice } from '@reduxjs/toolkit';
import {
    loginThunk,
    registerThunk,
} from '@/thunks/authorize-thunk';

const authorizeSlice = createSlice({
    name: 'authorize',
    initialState: null,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerThunk.fulfilled, () => null)
            .addCase(registerThunk.rejected, (state, action) => {
                console.log('this is registerThunk.rejected actio', action);
            })
            .addCase(registerThunk.pending, (state) => {
            })

            .addCase(loginThunk.fulfilled, (state, action) => ({ ...action.payload }))
            .addCase(loginThunk.pending, (state) => {
            })
            .addCase(loginThunk.rejected, (state, action) => {

            });
    },
});
export default authorizeSlice.reducer;
