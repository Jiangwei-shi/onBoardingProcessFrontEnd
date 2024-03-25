import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_APIENDPOINT || 'http://localhost:8080';

interface UserData {
    username: string;
    password: string;
}

const api = axios.create({
    withCredentials: true,
});
export const registerUser = async (userData: UserData) => {
    const response = await api.post(`${API_BASE}/auth/register`, userData);
    return response.data;
};

export const loginUser = async (userData: UserData) => {
    const response = await api.post(`${API_BASE}/login`, userData);
    return response.data;
};
