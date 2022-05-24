import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "@codemonument/sse-codec",
    version: Deno.args[0],
    description:
      "A package for encoding & decoding functionality for SSE Events, as well as providing some types. Cross-Compiled by deno's dnt module",
    license: "MIT",
    repository: {
      type: "git",
      url: "git@github.com:bjesuiter/deno-sse-codec.git",
    },
    bugs: {
      url: "https://github.com/bjesuiter/deno-sse-codec/issues",
    },
  },
});

// post build steps
await Deno.copyFile("LICENSE", "npm/LICENSE");
await Deno.copyFile("Readme.md", "npm/Readme.md");