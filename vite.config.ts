import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // GitHub Pages base path:
  // - User/Org page repo (e.g. "username.github.io") => "/"
  // - Project page repo (e.g. "my-repo") => "/my-repo/"
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const githubPagesBase = repoName
    ? repoName.endsWith(".github.io")
      ? "/"
      : `/${repoName}/`
    : "/";

  return {
    base: mode === "production" ? githubPagesBase : "/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
