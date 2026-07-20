import axios from "axios";

const BASE_URL =
    import.meta.env.VITE_API_URL ||
    "https://nama-app-production.up.railway.app";

    console.log("API URL:", BASE_URL);


const API_URL = import.meta.env.VITE_API_URL;
fetch(`${API_URL}/api/users`);

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
        }

        return Promise.reject(error);
    }
);

export async function apiRequest(
    path,
    {
        method = "GET",
        body = null,
        params = {},
    } = {}
) {
    try {
        const res = await apiClient.request({
            url: path,
            method,
            data: body,
            params,
        });

        return res.data;
    } catch (err) {
        const data = err.response?.data ?? null;

        const error = new Error(
            data?.message || "Terjadi kesalahan"
        );

        error.status = err.response?.status;
        error.data = data;

        throw error;
    }
}

export default apiClient;