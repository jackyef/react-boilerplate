// This is the entry point for server build
import WebServer from './web.server';

require('dotenv').config();

const webServer = new WebServer();

webServer.start()
  .then(() => {
    console.log(`Web Server started and listening on port ${process.env.PORT}`);
  })
  .catch(err => {
    console.error(err);
    console.error('Failed to start web server');
  })
  