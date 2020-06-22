/* eslint-disable camelcase */
import { API_URL_ROOT } from '../global';

// Account

export const login_post = () => `${API_URL_ROOT}/users/login`;
export const signUp_post = () => `${API_URL_ROOT}/users`;
export const current_user_get = () => `${API_URL_ROOT}/user`;
export const json_placeholder_user = () =>
  `https://jsonplaceholder.typicode.com/users/1`;
export const user_update_put = () => `${API_URL_ROOT}/user`;
// export const logout_get = () => API_URL_ROOT + '/user/logout';
