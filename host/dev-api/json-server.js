const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const options = {
  noCors: true
};
const middlewares = jsonServer.defaults(options);

const PORT = process.env.PORT_API_LOCAL || 5001;
const DELAY = process.env.DELAY_API_LOCAL || 2000;

const rewriteRules = {
  '/api/iasurgg/web/group-optimizations/*': '/$1',
  '/api/iasurgg/web/expertize/*': '/$1',
  '/api/iasurgg/web/group-chart/status': '/status',
  '/api/iasurgg/web/*': '/$1',
  "/api/iasurgg/web/group-optimizations/user_well_restrictions/:id": "/user_well_restrictions/:id"
};

let isActualizing = false;

server.use(function (req, res, next) {
  setTimeout(next, Number(DELAY));
});

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*' );

  next();
});
server.post('/api/iasurgg/web/expertize/actualization/', (req, res) => {
  if (isActualizing) {
    res.sendStatus(403);
  } else {
    isActualizing = true;

    setTimeout(() => {
      isActualizing = false;
    }, 60000);

    res.sendStatus(201);
  }
});
server.get('/api/iasurgg/web/expertize/actualization/status/', (req, res) => {
  if (isActualizing) {
    res.jsonp({
      "msg": "Проводится актуализация"
    });
    res.sendStatus(200);
  } else {
    res.sendStatus(204);
  }
});
server.use(jsonServer.rewriter(rewriteRules));
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
