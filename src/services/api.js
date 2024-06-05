// src/services/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchBooks = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}/search.json?q=books&page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books data", error);
    throw error;
  }
};
