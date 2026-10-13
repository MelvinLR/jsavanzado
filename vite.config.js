import path from "node:path";
import { defineConfig } from 'vite';

const prod = process.env.NODE_ENV === "production";

export default defineConfig({
  root: "./src",  
 base: prod ? `/${path.basename(process.cwd())}/` : "./",
  mode: prod ? "production" : "development",
  publicDir: "../public",
  plugins: [],
  server: { port: 1234 },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  }
});