type Env = {
  apiUrl: string;
};

export const env: Env = {
  apiUrl: process.env.REACT_APP_BASE_API_URL as string,
};
