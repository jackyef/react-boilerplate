require('dotenv').config();
import express from 'express';

export default class WebServer {
  constructor() {
    this.app = express();
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
