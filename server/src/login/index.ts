// axios login
export const login = (data: any) => {
  return axios.request({
    url: '/login',
    data,
    method: 'post'
  });
};

// Path: server/src/login/index.ts

// login test
export const loginTest = (data: any) => {
  return axios.request({
    url: '/login/test',
    data,
    method: 'post'
  });
};
