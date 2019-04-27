/**
 * Wrapper for running webpack
 */
import webpack from 'webpack';
import appRootDir from 'app-root-dir';
import path from 'path';
import fs from 'fs-extra';

const log = require('debug')('build:process');
const logError = require('debug')('build:error');
const logSuccessError = require('debug')('build:success:error');
const logSuccessWarning = require('debug')('build:success:warning');

logError.color = 1;
logSuccessError.color = 5;
logSuccessWarning.color = 3;

async function build() {
  const dir = process.env.DIR;

  if (!dir) {
    throw new Error('Define DIR env.');
  }

  const config = require(path.join(appRootDir.get(), `/webpack/${dir}.config`)).default;

  // Make sure build path is exist, if not create it
  log(`> Cleaning output folder ${config.output.path} ...`);
  fs.emptyDirSync(config.output.path);

  return new Promise((resolve, reject) => {
    webpack(config).run((err, stats) => {
      if (err) {
        logError(err.stack || err);

        if (err.details) {
          logError(err.details);
        }

        reject(err);
      } else {
        const info = stats.toJson();

        if (stats.hasErrors()) {
          logSuccessError(info.errors);

          process.exit(1);
        }

        if (stats.hasWarnings()) {
          logSuccessWarning(info.warnings);
        }

        resolve();
      }
    });
  });
}

build();
