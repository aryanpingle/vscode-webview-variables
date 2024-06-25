const esbuild = require("esbuild");

const production = process.argv.includes("--production");
const watch = process.argv.includes("--watch");

async function main() {
  const ctx = await esbuild.context({
    entryPoints: ["src/index.ts"],
    bundle: true,
    format: "cjs",
    minify: false,
    platform: "node",
    outdir: "dist",
    logLevel: "silent",
    allowOverwrite: true,
  });

  if (watch) {
    await ctx.watch();
  } else {
    await ctx.rebuild().then(ctx.dispose);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
