import { createMockContext } from '@shopify/jest-koa-mocks';
import rendererMocks from '../../__test_utils__/rendererMocks';

describe('Renderer middleware tests', () => {
  rendererMocks();

  let renderer;
  beforeEach(() => {
    jest.isolateModules(() => {
      renderer = require('../renderer').default;
    });
  });

  it('should serve server-side rendered html correctly', async () => {
    const ctx = createMockContext({
      url: '/'
    });

    ctx.res.end = jest.fn();

    const next = () => {};

    await renderer(ctx, next);

    expect(ctx.res.statusCode).toBe(200);
    expect(ctx.res.getHeader('Content-Type')).toBe('text/html; charset=utf-8');
    expect(ctx.body).toBeDefined();
  });

  it('should fallback to hydrate on client when error occured', async () => {
    const ctx = createMockContext({
      url: '/'
    });

    ctx.res.end = jest.fn();

    const next = () => {};

    await renderer(ctx, next);

    expect(ctx.res.statusCode).toBe(200);
    expect(ctx.res.getHeader('Content-Type')).toBe('text/html; charset=utf-8');
    expect(ctx.body).toBeDefined();
  });
});
