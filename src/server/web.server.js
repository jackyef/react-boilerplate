import express from 'express';
import compression from 'compression';

require('dotenv').config();

export default class WebServer {
  constructor() {
    this.app = express();
    this.app.use(compression());
    this.app.use(express.static('dist/public'));
  }

  start() {
    return new Promise((resolve, reject) => {
      try {
        this.server = this.app.listen(process.env.PORT, () => {
          resolve();
        })
      } catch (e) {
        console.error(e);
        reject(e);
      }
    })
  }

  stop() {
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => {
          resolve();
        })
      } catch (e) {
        console.error(e.message);
        reject(e);
      }
    })
  }
}
