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

export const getMyEstatesAPI = async () => {
  const accessToken = JSON.parse(localStorage.getItem('user')).accessToken
  try {
    const res = await axios.get(`${API_URL}/api/myestates`, {
      headers: {
        'x-access-token': accessToken
      }
    });
    console.log(res);
    return res;
  } catch (error) {
    return error;
  }
}

export const postEstateAPI = async (data) => {
  const accessToken = JSON.parse(localStorage.getItem('user')).accessToken
  try {
    const res = await axios.post(`${API_URL}/api/estate/create`, data, {
      headers: {
        'x-access-token': accessToken
      }
    });
    console.log(res);
    return res;
  } catch (error) {
    return error;
  }
}

export const deleteEstateAPI = async () => {
  const accessToken = JSON.parse(localStorage.getItem('user')).accessToken
  try {
    const res = await axios.delete(`${API_URL}/api/estate`, {
      headers: {
        'x-access-token': accessToken
      }
    });
    console.log(res);
    return res;
  } catch (error) {
    return error;
  }
}