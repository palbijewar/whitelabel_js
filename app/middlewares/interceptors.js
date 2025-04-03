import axios from 'axios';
import qs from 'qs';

const API_BASE_URL = 'https://test.primealgotech.com/api';

const interceptorInstance = axios.create({
  baseURL: API_BASE_URL,
});

interceptorInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');

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
    if (error.response?.status === 401) {
      console.warn('Unauthorized! Redirecting to login...');
      localStorage.removeItem('access_token');
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export default interceptorInstance;

export const loginService = async (credentials) => {
  try {
    const response = await interceptorInstance.post('/users/token', qs.stringify(credentials), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    if (response.data?.data?.access_token) {
      localStorage.setItem('access_token', response.data.data.access_token);
      // eslint-disable-next-line no-use-before-define
      const userDetails = await getUserDetails();
      if (userDetails?.data?.user_type) {
        localStorage.setItem('user_type', userDetails.data.user_type);
      }
    }

    return response.data;
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
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
    tag: 'regular',
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

export const updateProfile = async (userId, formData) => {
  const reqBody = {
    name: formData?.name,
    email: formData?.email,
    mobile: formData?.phone,
    tag: 'regular',
    password: formData?.password,
  };

  try {
    const response = await interceptorInstance.patch(`/users/${userId}`, reqBody);
    return response?.data;
  } catch (error) {
    console.error('Update profile error:', error.response?.data || error.message);
    throw error;
  }
};

export const getUsers = async (skip = 0, limit = 10) => {
  try {
    const response = await interceptorInstance.get(`/users/`, {
      params: { skip, limit },
    });
    return response?.data;
  } catch (error) {
    console.error('Error fetching users:', error.response?.data || error.message);
    throw error;
  }
};

export const getHosts = async (skip = 0, limit = 10) => {
  try {
    const response = await interceptorInstance.get(`/hosts/`, {
      params: { skip, limit },
    });
    return response?.data;
  } catch (error) {
    console.error('Error fetching users:', error.response?.data || error.message);
    throw error;
  }
};
