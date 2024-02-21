const host = 'localhost:2500';

export default {
  get: async (url) => {
    const res = await fetch(`http://${host}/${url}`);
    return res.json();
  },
  post: async (url, data) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(`http://${host}/${url}`, options);
    return res.json();
  },
  getWithToken: async (url) => {
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: localStorage.getItem('secret'),
      },
    };

    const res = await fetch(`http://${host}/${url}`, options);
    return res.json();
  },
  postWithToken: async (url, data) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: localStorage.getItem('secret'),
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(`http://${host}/${url}`, options);
    return res.json();
  },
};
