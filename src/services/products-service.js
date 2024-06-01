import API_URL from '../config/app.config/index'
import axios from 'axios';

export const getApiProducts = async () => {
  try {
    const res = await axios.get(API_URL);
    return res;
  } catch (error) {
    return error;
  }
};