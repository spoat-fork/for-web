import { ViteDevServer } from "vite";

//Load .env file
import dotenv from "dotenv";
dotenv.config({ quiet: true });

import CONFIGURATION, { AppConfig } from "./components/common/lib/env";

//Data for public config endpoint
const appCfg: AppConfig = {
  api: CONFIGURATION.DEFAULT_API_URL,
  gifbox: CONFIGURATION.DEFAULT_GIFBOX_URL,
};

export default function appConfigPlugin() {
  return {
    name: "app-config",
    configureServer(server: ViteDevServer) {
      server.middlewares.use("/.stoat-config", (_, res) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(appCfg));
      });
    },
  };
}
