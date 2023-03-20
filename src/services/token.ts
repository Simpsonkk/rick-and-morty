const AUTH_TOKEN_KEY_NAME = 'r&m-token';

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const removeToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
