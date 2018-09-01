const renderer = async (ctx, next)  =>{
  ctx.body += 'Your request passed through the renderer middleware';

  await next();
}

export default renderer;