const connect = require('connect');
const redirectSSL = require('redirect-ssl');
const serveHandler = require('serve-handler');

// Create web server.
const app = connect();

// redirectSSL defaults to only redirecting if NODE_ENV is production, which is fine.
// Use permanent redirect. We will always use SSL.
const redirectSSLMiddleware = redirectSSL.create({ statusCode: 301 });
app.use(redirectSSLMiddleware);

// Serve static (and compiled) content from /dist.
const serveMiddleware = async (req, res) => {
  await serveHandler(req, res, {
    public: 'dist',
    rewrites: [
      { source: '**', destination: '/index.html' }
    ]
  });
};
app.use(serveMiddleware);

app.listen(process.env.PORT || 5050);