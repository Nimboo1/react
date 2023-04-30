import express from 'express';
import { createServer } from 'vite';

import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexHTML = path.resolve(__dirname, 'index.html');

async function startServer() {
  const app = express();
  const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });

  app.use(vite.middlewares);

  app.use('*', async (request, response) => {
    const url = request.originalUrl;

    try {
      const template = fs.readFileSync(indexHTML, 'utf8');
      const transformHTML = await vite.transformIndexHtml(url, template);
      const [startHTML, endHTML] = transformHTML.split('<!--app-->');

      const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');

      try {
        response.write(startHTML);
        const { stream } = await render(url, {
          onShellReady() {
            stream.pipe(response);
          },
          onAllReady() {
            response.write(endHTML);
            response.end();
          },
        });
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  });

  return app;
}

const PORT = 3001;

startServer().then((app) => {
  app.listen(PORT, () => {
    console.log(`Server is running >>> http://localhost:${PORT}`);
  });
});
