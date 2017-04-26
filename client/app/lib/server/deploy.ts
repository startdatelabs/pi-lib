import * as chalk from 'chalk';
import * as express from 'express';
import * as https from 'https';

import { cert } from './cert';

/**
 * Deploy HTTPS server
 */

export function deploy(app: express.Application,
                       port: number): https.Server {
  const server = https.createServer(cert, app);
  server.listen(port, () => {
    console.log(chalk.green('HTTPS'), `localhost:${port}`);
  });
  return server;
};
