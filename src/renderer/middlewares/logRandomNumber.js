export default async (ctx, next) => {
  ctx.body += `random number: ${Math.random() * 100}`;

  await next();
}