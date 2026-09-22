const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "portfolio";
const basePath = isGithubActions ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    // Plain <a> tags (unlike next/link) do not get basePath auto-applied, so
    // static asset links (e.g. the CV PDF) read this to build a correct href.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
