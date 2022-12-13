export const BASE_URL = 'https://api.mesto-exo.nomoredomains.icu';

const request = ({ url, method = 'POST', body }) => {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  return fetch(`${BASE_URL}${url}`, config).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
};

export const register = (email, password) => {
  return request({
    url: '/signup',
    body: { email, password },
  });
};

export const authorize = (email, password) => {
  return request({
    url: '/signin',
    body: { email, password },
  }).then((res) => {
    if (res.token) {
      localStorage.setItem('jwt', res.token);
      return res;
    }
  });
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => res.json())
  .then(data => data)
} 


