type Env = {
  apiUrl: string;
  environment: string;
};

export const env: Env = {
  apiUrl: process.env.REACT_APP_BASE_API_URL as string,
  environment: process.env.NODE_ENV as string,
};
