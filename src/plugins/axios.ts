import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import EnvironmentUtils from '@/utils/EnvironmentUtils';

const requestTimeout = EnvironmentUtils.isProduction() ? 1000 * 10 : 1000 * 60;
const resourceServerAddress = 'https://api.midni.ru/v0';

const webClient: AxiosInstance = axios.create({
  baseURL: resourceServerAddress,
  timeout: requestTimeout,
  headers: { 'Content-type': 'application/json' },
});

webClient.interceptors.request.use(
  (request: AxiosRequestConfig) => request,
  (error) => Promise.reject(error),
);

export default webClient;
