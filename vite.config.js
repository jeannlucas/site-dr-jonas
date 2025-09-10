import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const repoName = env.VITE_REPO_NAME || "";

  const isVercel = !!process.env.VERCEL;
  const isProd = mode === "production";

  return {
    base: isVercel ? "/" : isProd ? `/${repoName}/` : "/",
    plugins: [react(), tailwindcss()],
    server: {
      open: true,
      host: false,
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: true,
        },
      },
    },
  };
});
