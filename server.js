const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const koaNextController = async ({ respond, ...ctx }, controller) => {
  await controller(ctx);
  respond = false;
};

app
  .prepare()
  .then(() => {
    const server = new Koa();
    const router = new Router();

    router.get('/p/:id', ctx =>
      koaNextController(ctx, async ({ req, res, params: { id } }) => {
        const actualPage = '/post';
        const queryParams = { id };
        await app.render(req, res, actualPage, queryParams);
      })
    );
    router.get('*', ctx =>
      koaNextController(ctx, ({ req, res }) => handle(req, res))
    );

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200;
      await next();
    });
    server.use(router.routes()).use(router.allowedMethods());

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
