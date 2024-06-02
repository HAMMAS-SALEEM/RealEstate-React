import API_URL from '../config/app.config/index'
import axios from 'axios';

export const getApiEstates = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/estates`);
    return res;
  } catch (error) {
    return error;
  }
};