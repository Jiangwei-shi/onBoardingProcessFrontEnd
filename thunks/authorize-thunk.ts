import { createAsyncThunk } from '@reduxjs/toolkit';
import * as userService from '../services/authorize-service';

interface UserData {
    username: string;
    password: string;
}
export const registerThunk = createAsyncThunk('auth/register',
    async (user:UserData) => userService.registerUser(user));

export const loginThunk = createAsyncThunk('users/login',
    async (credentials:UserData) => userService.loginUser(credentials));
