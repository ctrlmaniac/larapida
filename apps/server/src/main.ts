import compression from "compression";
import express from 'express';
import morgan from "morgan";
import { join } from "path";

const HOST = process.env.HOST ?? 'localhost';
const PORT = Number.parseInt(process.env.PORT || "3000");
const DEVELOPMENT = process.env.NODE_ENV;
const ROOTDIR = process.env.ROOTDIR ?? join()


const app = express();

app.use(compression);
app.disable("x-powered-by");

if (DEVELOPMENT) {
  console.log("starting development server");

  const viteDevServer = await import("vite").then((vite) =>
    vite.createServer({
      server: { middlewareMode: true }
    })
  );

  app.use(viteDevServer.middlewares);

  app.use(async (req, res, next) => {
    try {
      const source = await viteDevServer.ssrLoadModule("./app.ts");
      return await source.app(req, res, next);
    } catch (error) {
      if (typeof error === "object" && error instanceof Error) {
        viteDevServer.ssrFixStacktrace(error);
      }
      next(error);
    }
  });
} else {
  console.log("starting production server");
}

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(PORT, HOST, () => {
  console.log(`[ ready ] http://${HOST}:${PORT}`);
});
