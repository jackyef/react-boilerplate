const renderer = async (ctx, next) => {
  console.log('Incoming request for url', ctx.url);

  ctx.body = 'OK';

  await next();
}

export default renderer;
