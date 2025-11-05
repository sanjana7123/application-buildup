const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Register user
export const register = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.msg || 'Registration failed');
  }

  if (data.token) {
    localStorage.setItem('token', data.token);
  }

  return data;
};

// Login user
export const login = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.msg || 'Login failed');
  }

  if (data.token) {
    localStorage.setItem('token', data.token);
  }

  return data;
};

// Get logged in user
export const getMe = async () => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${API_BASE_URL}/me`, {
    method: 'GET',
    headers: {
      'x-auth-token': token,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.msg || 'Failed to get user data');
  }

  return data;
};

// Logout user
export const logout = () => {
  localStorage.removeItem('token');
};