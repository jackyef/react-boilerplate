// This is the entry point for server build
require('dotenv').config();
import WebServer from './web.server';

const webServer = new WebServer();

webServer.start()
  .then(() => {
    console.log(`Web Server started and listening on port ${process.env.PORT}`);
  })
  .catch(err => {
    console.error(err);
    console.error('Failed to start web server');
  })
  