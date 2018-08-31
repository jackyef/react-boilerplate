import config from 'config';

const execIfFunc = x => typeof x === 'function' ? x() : x;

export const ifDev = (then, orElse) => {
  if (process.env.NODE_ENV === 'development') {
    return execIfFunc(then);
  } else {
    return execIfFunc(orElse);
  }
}

export const ifProd = (then, orElse) => {
  if (process.env.NODE_ENV === 'production') {
    return execIfFunc(then);
  } else {
    return execIfFunc(orElse);
  }
}

export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';
export const service = process.env.SERVICE_NAME;

export const serverEnv = {
  globals: JSON.stringify({
    ...config.globals,
  }),
  __DEV__: isDev,
  __PROD__: isProd,
  __CLIENT__: false,
  __SERVER__: true,
}