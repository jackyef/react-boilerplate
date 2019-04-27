const execIfFunction = value => typeof value === 'function' ? value() : value;
const ifElse = condition => (A, B) => condition ? execIfFunction(A) : execIfFunction(B);

export const isDev = process.env.NODE_ENV === 'development';
export const isProd = !isDev;
export const ifDev = ifElse(isDev);
export const ifProd = ifElse(isProd);
