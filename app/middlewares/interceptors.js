import axios from 'axios';
import Cookies from 'js-cookie';
import qs from 'qs';

const API_BASE_URL = 'http://182.70.249.152:5000/api';

const interceptorInstance = axios.create({
  baseURL: API_BASE_URL,
});

interceptorInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('access_token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error('Request error:', error.message);
    return Promise.reject(error);
  }
);

interceptorInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error('Network error:', error.message);
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default interceptorInstance;

export const loginService = async (credentials) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const formData = qs.stringify(credentials);

    const response = await interceptorInstance.post('/users/token', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUpUser = async (formData) => {
  const reqBody = {
    name: formData?.name,
    email: formData?.email,
    mobile: formData?.mobile,
    user_type: formData?.user_type,
    password: formData?.password,
    tag: 'regular'
  };
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await interceptorInstance.post('/users/register', reqBody);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getUserDetails = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await interceptorInstance.get('/users/me');
    return response?.data;
  } catch (error) {
    throw error;
  }
};
