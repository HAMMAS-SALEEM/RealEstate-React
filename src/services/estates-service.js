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

export const getMyEstates = async () => {
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

export const deleteEstate = async () => {
  const accessToken = JSON.parse(localStorage.getItem('user')).accessToken
  try {
    const res = await axios.delete(`${API_URL}/api/estates`, {
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