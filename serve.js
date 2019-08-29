const connect = require('connect');
const redirectSSL = require('redirect-ssl');
const serveStatic = require('serve-static');

// Create web server.
const app = connect();

// redirectSSL defaults to only redirecting if NODE_ENV is production, which is fine.
// Use permanent redirect. We will always use SSL.
const redirectSSLMiddleware = redirectSSL.create({ statusCode: 301 });
app.use(redirectSSLMiddleware);

// Serve static (and compiled) content from /dist.
const staticServerMiddleware = serveStatic('dist');
app.use(staticServerMiddleware);

app.listen(process.env.PORT || 5050);