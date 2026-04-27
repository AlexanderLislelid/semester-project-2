import { loadToken } from "../utils/storage.js";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://v2.api.noroff.dev/";

async function apiClient(endpoint, options = {}) {
  const { body, ...customOptions } = options;
  const accessToken = loadToken();

  const headers = {
    "Content-Type": "application/json",
    "X-Noroff-API-Key": API_KEY,
  };

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  const config = {
    method: body ? "POST" : "GET",
    ...customOptions,
    headers: {
      ...headers,
      ...customOptions.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(BASE_URL + endpoint, config);

    if (response.status === 204) {
      return { data: null };
    }

    const text = await response.text();
    const responseData = text ? JSON.parse(text) : null;

    if (!response.ok) {
      const errorMessage =
        responseData?.errors?.[0]?.message ||
        responseData?.message ||
        "An unknown API error occurred.";
      throw new Error(errorMessage);
    }

    return responseData;
  } catch (error) {
    console.error("API Client Error:", error);
    throw error;
  }
}

export const get = (endpoint) => apiClient(endpoint);
export const post = (endpoint, body) => apiClient(endpoint, { body });
export const put = (endpoint, body) =>
  apiClient(endpoint, { method: "PUT", body });
export const del = (endpoint) => apiClient(endpoint, { method: "DELETE" });
